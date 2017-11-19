package Information;
import java.util.*; 

public class Event {
	private String title; 
	private Calendar date; 
	private String description; 
	private boolean isPrivate; 
	private String location; 
	public Event(String title, Calendar date, String description, boolean isPrivate, String location){
		this.title = title; 
		this.date = date; 
		this.description = description; 
		this.isPrivate = isPrivate; 
		this.location = location; 
	}
	// getters and setters for each private data member 
	public String getTitle(){
		return title; 
	}
	public void setTitle(String newTitle){
		this.title = newTitle; 
	}
	public Calendar getDate(){
		return this.date; 
	}
	public void setDate(Calendar newDate){
		this.date = newDate; 
	}
	public String getDescription(){
		return this.description; 
	}
	public void setDescription(String newDescription){
		this.description = newDescription; 
	}
	public boolean getIsPrivate(){
		return isPrivate; 
	}
	public void setIsPrivate(boolean newIsPrivate){
		this.isPrivate = newIsPrivate; 
	}
	public String getLocation(){
		return this.location; 
	}
	public void setLocation(String newLocation){
		this.location = newLocation; 
	}
}
