package jdbc_add;

import java.io.IOException;
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

/**
 * Servlet implementation class CheckUsername
 */
@WebServlet("/CheckUsername")
public class CheckUsername extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CheckUsername() {
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
			Class.forName("com.mysql.jdbc.Driver");

			conn = DriverManager.getConnection("jdbc:mysql://localhost/CSCI201_Lab11?user=root&password=Shanghai.River&useSSL=false"); //add port number if not on default
			st = conn.createStatement();
			
			
			if (username != null && username.length() > 0) {
//				rs = st.executeQuery("SELECT * FROM Student WHERE username = '" + username + "'");
				ps = conn.prepareStatement("SELECT * FROM Users WHERE username=?");
				ps.setString(1, username);
				rs = ps.executeQuery();
			}
			if (rs == null) {
//				request.setAttribute("curUser", username);
//				request.setAttribute("curPassword", password);
				RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/AddNewUserResults.jsp");
				dispatcher.forward(request, response);
			}
			else {
				response.sendRedirect("AddNewUserForm.html");
			}
			
			
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
