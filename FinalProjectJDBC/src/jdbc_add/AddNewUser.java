package jdbc_add;

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
 * Servlet implementation class AddNewUser
 */
@WebServlet("/AddNewUser")
public class AddNewUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddNewUser() {
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
			System.out.println("here 1");
			Class.forName("com.mysql.jdbc.Driver");
			System.out.println("here 2");
			//you can only get a connection to one database AT A TIME. Can connect to others just not at the same time
			//don't use root, it's bad coding
			//to use SSL, download a self signed certificate
			
			conn = DriverManager.getConnection("jdbc:mysql://cs201.cll9sbto0nla.us-west-1.rds.amazonaws.com/GoOutDB?user=master&password=masterpassword&useSSL=false"); //add port number if not on default
			st = conn.createStatement();
			System.out.println("connected");
			
			if (eventName != null && eventName.length() > 0) {
				//use LIKE BINARY for case sensitive
				//ps = conn.prepareStatement("SELECT * FROM Events WHERE eventName LIKE " + "'%" +eventName + "%'");
//				ps.setString(1, "'%" +eventName + "%'");
				ps = conn.prepareStatement("SELECT * FROM Events WHERE eventName LIKE " + "'%?%'");
				ps.setString(1, "'%" +eventName + "%'");
				rs = ps.executeQuery();
			}
			else {

				//save self from SQL injection
				ps = conn.prepareStatement(" SELECT * FROM Events");
				rs = ps.executeQuery();
			}

			
			RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/AddNewUserResults.jsp");
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
