package jdbc_follow;

import java.io.IOException;
import java.util.ArrayList; 
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Information.*; 
/**
 * Servlet implementation class FollowUser
 */
@WebServlet("/GetFollowingEventList")
public class GetFollowingEventList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetFollowingEventList() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int userID = Integer.parseInt(request.getParameter("userID"));
		Connection conn = null;
		Statement st = null;
		ResultSet rs = null;
		PreparedStatement ps = null;
		try{
			Class.forName("com.mysql.jdbc.Driver");
			// sets up the connection 
			conn = DriverManager.getConnection("jdbc:mysql://cs201.cll9sbto0nla.us-west-1.rds.amazonaws.com/GoOutDB?user=master&password=masterpassword&useSSL=false");
			st = conn.createStatement();
			System.out.println("Connnected!");
			ps = conn.prepareStatement("SELECT * FROM FollowingEvents WHERE userID = ?");
			ps.setInt(1, userID);
			rs = ps.executeQuery();
			ArrayList<Integer> eventIDList = new ArrayList<Integer>();
			while(rs.next()){
				int index = rs.getInt("eventID"); 
				eventIDList.add(index);
				System.out.println("Index: "+index);
			}
			System.out.println("size: "+eventIDList.size()+"\n");
			ArrayList<Event> eventList = new ArrayList<Event>(); 
			for(int x=0; x<eventIDList.size(); x++){
				ps = conn.prepareStatement("SELECT * FROM Events WHERE eventID = ?");
				ps.setInt(1, eventIDList.get(x));
				rs = ps.executeQuery();
				while(rs.next()){
					String eventName = rs.getString("eventName");
					String location = rs.getString("location"); 
					java.sql.Time startTime = rs.getTime("startTime"); 
					java.sql.Time endTime = rs.getTime("endTime"); 
					Event e = new Event(eventName, location, startTime, endTime);
					eventList.add(e); 
				}
			}
			
//			System.out.println("size: "+eventIDList.size());
			response.getWriter().println(eventList);
			response.getWriter().flush();
			response.getWriter().close();
			//request.setAttribute("eventList", eventList);
			//RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/GetFollowingEventListResult.jsp");
			//dispatcher.forward(request, response);
		}catch(SQLException sqle) {
			System.out.println("sqle: " + sqle.getMessage());
		}catch (ClassNotFoundException cnfe) {
			System.out.println("cnfe: " + cnfe.getMessage());
		}finally {
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
