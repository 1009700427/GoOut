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
 * Servlet implementation class FindEventByUserUsername
 */
@WebServlet("/FindEventByUserUsername")
public class FindEventByUserUsername extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FindEventByUserUsername() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("username");
		Connection conn = null;
		Statement st = null;
		ResultSet rs = null;

		PreparedStatement ps = null;

		try {
			//System.out.println("here 1");
			Class.forName("com.mysql.jdbc.Driver");
			//System.out.println("here 2");
			
			conn = DriverManager.getConnection("jdbc:mysql://cs201.cll9sbto0nla.us-west-1.rds.amazonaws.com/GoOutDB?user=master&password=masterpassword&useSSL=false"); //add port number if not on default
			st = conn.createStatement();
			System.out.println("connected");
			
			if (username != null && username.length() > 0) {
				//ps = conn.prepareStatement("SELECT * FROM Users WHERE username=?");
				ps = conn.prepareStatement("SELECT * "
											+ "FROM Users u, Events e "
											+ "WHERE u.userID = e.userID "
											+ "AND username LIKE ?");

				
				ps.setString(1, "%" + username + "%");
				rs = ps.executeQuery();

			}
			else {

				//save self from SQL injection
				ps = conn.prepareStatement("SELECT * FROM Events e, Users u WHERE e.userID = u.userID");
				rs = ps.executeQuery();
			}
			
			
			ArrayList<Integer> eventIDs = new ArrayList<Integer>();
			ArrayList<String> eventNames = new ArrayList<String>();
			ArrayList<Integer> eventUserIDs = new ArrayList<Integer>();
			ArrayList<String> eventLocations = new ArrayList<String>();
			ArrayList<Integer> eventMonths = new ArrayList<Integer>();
			ArrayList<Integer> eventDays = new ArrayList<Integer>();

			ArrayList<String> eventStartTimes = new ArrayList<String>();
			ArrayList<String> eventEndTimes = new ArrayList<String>();
			
			
			ArrayList<Integer> userIDs = new ArrayList<Integer>();
			ArrayList<String> usernames = new ArrayList<String>();
			ArrayList<String> fullNames = new ArrayList<String>();
			

			
			
			
			while(rs.next()) {
		

				
				int eventID = rs.getInt("e.eventID");
				String eventName_ = rs.getString("eventName");
				int eventUserID = rs.getInt("e.userID");
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
					eventEndTimes.add(eventEndTime.toString());
				}
				else {
					eventEndTimes.add("N/A");
				}
	
				

				
				int userID = rs.getInt("u.userID");
				String username_ = rs.getString("u.username");
				String fullName = rs.getString("u.fullName");

				
				userIDs.add(userID);
				usernames.add(username_);
				fullNames.add(fullName);	
				
				
			
			}
			

			
			
			
			
			request.setAttribute("eventIDs", eventIDs);
			request.setAttribute("eventNames", eventNames);
			request.setAttribute("eventUserIDs", eventUserIDs);
			request.setAttribute("eventLocations", eventLocations);
			request.setAttribute("eventMonths", eventMonths);
			request.setAttribute("eventDays", eventDays);
			request.setAttribute("eventStartTimes", eventStartTimes);
			request.setAttribute("eventEndTimes", eventEndTimes);
			
			
			
			request.setAttribute("userIDs", userIDs);
			request.setAttribute("usernames", usernames);
			request.setAttribute("fullNames", fullNames);
			RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/EventSearchResultsUsers.jsp");
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
