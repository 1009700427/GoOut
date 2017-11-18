package Server;
import java.io.*;
import java.net.*;
import java.util.*;
import Thread.*;
public class GoOutServer {
	private volatile ArrayList<Notification> notificationList;
	public GoOutServer(){
		 notificationList = new ArrayList<Notification>();
		 ServerSocket ss = null;
		 Socket s = null; 
		 try{
			 ss = new ServerSocket(1234); 
			 System.out.println("Successfully connected to port 1234");
			 while(true){
				 s = ss.accept();
				 Notification n = new Notification(this, s);
				 notificationList.add(n);
			 }
		 }catch(IOException ioe){
			 System.out.println("ioe in GoOutServer: "+ioe.getMessage());
		 }
	}
}
