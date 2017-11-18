<<<<<<< HEAD
package Thread;

public class Notification extends Thread{
	public Notification(){
		
	}
	public void run(){
		
	}
}
=======
package Thread;

import java.io.*;
import java.net.*;
import java.text.*;
import java.util.*;
import Server.*;
import Information.* ;

public class Notification extends Thread{
	private GoOutServer gos; 
	private Socket s; 
	private ObjectInputStream ois; 
	private ObjectOutputStream oos; ;
	private UserEventInformationMessage eventInfo; 
	// passes in the notification time 
//	public Notification(Calendar notificationTime, String eventName, String username){
//		this.notificationTime = notificationTime; 
//		this.eventName = eventName;
//		this.username = username; 
//	}
	public Notification(GoOutServer gos, Socket s){
		this.gos = gos; 
		this.s = s; 
		try {
			ois = new ObjectInputStream(s.getInputStream());
			oos = new ObjectOutputStream(s.getOutputStream());
		} catch (IOException ioe) {
			System.out.println("ioe in Notification constructor: "+ioe.getMessage());
		}
	}
	public void run(){
		try{
			// receives the event user information 
			while(true){
				this.eventInfo = (UserEventInformationMessage)ois.readObject();
			}
		}catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}
	// gets the current date and time 
	public Calendar getCurrentDate(){
		Calendar cal = Calendar.getInstance();
		return cal;
	}
//	public static void main(String[] args){
//		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
//		Date date = new Date();
//		System.out.println(dateFormat.format(date));
//	}
}
>>>>>>> steven
