package jdbc_add;

import java.io.IOException;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddNewEvent
 */
@WebServlet("/AddNewEvent")
public class AddNewEvent extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddNewEvent() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String eventName = request.getParameter("eventName");
		String userIDStr = request.getParameter("userID");
		String location = request.getParameter("location");
		int month = Integer.parseInt(request.getParameter("month")); 
		int day = Integer.parseInt(request.getParameter("day")); 
		String startTime = request.getParameter("startTime");
		String endTime = request.getParameter(request.getParameter("endTime")); 
		boolean privateEvent = request.getParameter("privateEvent") != null;
		// check null 
		if(eventName==null || eventName=="" || userIDStr==null || userIDStr==""){
			request.setAttribute("errmsg", "Invalid username and password.");
			response.sendRedirect("");
		}
		int userID = Integer.parseInt(userIDStr); 
		Connection conn = null;
		Statement st = null;
		ResultSet rs = null;
		PreparedStatement psUpdate = null;
		PreparedStatement psDisplay = null;
		try{
			Class.forName("com.mysql.jdbc.Driver");
			// sets up the connection 
			conn = DriverManager.getConnection("jdbc:mysql://cs201.cll9sbto0nla.us-west-1.rds.amazonaws.com/GoOutDB?user=master&password=masterpassword&useSSL=false");
			st = conn.createStatement();
			System.out.println("connected");
			
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
