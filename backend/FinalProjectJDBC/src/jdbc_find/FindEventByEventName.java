package jdbc_find;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FindEventByEventName
 */
@WebServlet("/FindEventByEventName")
public class FindEventByEventName extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FindEventByEventName() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String eventName = request.getParameter("eventName");
		Connection conn = null;
		Statement st = null;
		ResultSet rs = null;
		PreparedStatement ps = null;
		try {

			Class.forName("com.mysql.jdbc.Driver");

			
			conn = DriverManager.getConnection("jdbc:mysql://cs201.cll9sbto0nla.us-west-1.rds.amazonaws.com/GoOutDB?user=master&password=masterpassword&useSSL=false"); //add port number if not on default
			st = conn.createStatement();
			System.out.println("connected");
			
			if (eventName != null && eventName.length() > 0) {
				//use LIKE BINARY for case sensitive
				ps = conn.prepareStatement("SELECT * FROM Events WHERE eventName LIKE ?");
				ps.setString(1,"%"+eventName+"%");
				rs = ps.executeQuery();
			}
			else {

				//save self from SQL injection
				ps = conn.prepareStatement(" SELECT * FROM Events");
				rs = ps.executeQuery();
			}
			ArrayList<Integer> eventIDs = new ArrayList<Integer>();
			ArrayList<String> eventNames = new ArrayList<String>();
			ArrayList<Integer> eventUserIDs = new ArrayList<Integer>();
			ArrayList<String> eventLocations = new ArrayList<String>();
			ArrayList<Integer> eventMonths = new ArrayList<Integer>();
			ArrayList<Integer> eventDays = new ArrayList<Integer>();
			//use Time object instead?
			ArrayList<String> eventStartTimes = new ArrayList<String>();
			ArrayList<String> eventEndTimes = new ArrayList<String>();
			
			while(rs.next()) {
				int eventID = rs.getInt("eventID");
				String eventName_ = rs.getString("eventName");
				int eventUserID = rs.getInt("userID");
//				System.out.println(userID + "-" + firstName + " " + lastName);
				
				eventIDs.add(eventID);
				eventNames.add(eventName_);
				eventUserIDs.add(eventUserID);

				//may be null
				String eventLocation = rs.getString("location");
				if (eventLocation != null) {
					eventLocations.add(eventLocation);
				}
				else {
					eventLocations.add("N/A");
				}
				
				int eventMonth = rs.getInt("month");
				if (eventMonth != 0) {
					eventMonths.add(eventMonth);
				}
				else {
					eventMonths.add(0);
				}
				
				int eventDay = rs.getInt("day");
				if (eventDay != 0) {
					eventDays.add(eventDay);
				}
				else {
					eventDays.add(0);
				}
				
				Time eventStartTime = rs.getTime("startTime");
				if (eventStartTime != null) {
//					eventStartTimes.add(eventStartTime);
					eventStartTimes.add(eventStartTime.toString());
				}
				else {
					eventStartTimes.add("N/A");
				}
				
				Time eventEndTime = rs.getTime("endTime");
				if (eventEndTime != null) {
//					eventEndTimes.add(eventEndTime);
					eventEndTimes.add(eventStartTime.toString());
				}
				else {
					eventEndTimes.add("N/A");
				}
				
			
			}
			
			
			request.setAttribute("eventIDs", eventIDs);
			request.setAttribute("eventNames", eventNames);
			request.setAttribute("eventUserIDs", eventUserIDs);
			request.setAttribute("eventLocations", eventLocations);
			request.setAttribute("eventMonths", eventMonths);
			request.setAttribute("eventDays", eventDays);
			request.setAttribute("eventStartTimes", eventStartTimes);
			request.setAttribute("eventEndTimes", eventEndTimes);
			
			RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/EventSearchResults.jsp");
			dispatcher.forward(request, response);
		}catch(SQLException sqle) {
			System.out.println("sqle: " + sqle.getMessage());
		}catch (ClassNotFoundException cnfe) {
			System.out.println("cnfe: " + cnfe.getMessage());
		} finally {
			try {
				//has to be in reverse order
				if (rs != null) {
					rs.close();
				}
				if (st != null) {
					st.close();
				}
				if (conn != null) {
					conn.close();
				}
			}catch(SQLException sqle) {
				System.out.println("sqle closing stuff: " + sqle.getMessage());
			}
		}
		
		
	}

}
