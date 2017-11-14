package Information;

public class Event {
	private String title; 
	private Date date; 
	private String description; 
	private boolean isPrivate; 
	private String location; 
	public Event(String title, Date date, String description, boolean isPrivate, String location){
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
	public Date getDate(){
		return this.date; 
	}
	public void setDate(Date newDate){
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
