-- DROP is a dangerous statement
DROP DATABASE IF EXISTS GoOutDB;
CREATE DATABASE GoOutDB;

USE GoOutDB;

CREATE TABLE Users(

	userID INT(11) PRIMARY KEY AUTO_INCREMENT,

    fullName VARCHAR(999) NOT NULL,
    username VARCHAR(999) NOT NULL,
    password VARCHAR(999) NOT NULL,
    privateUser BOOLEAN NOT NULL
);

INSERT INTO Users(fullName, username, password, privateUser)
	VALUES	("Jess Zhu", "jessicyz", "password", false),
					("Sina Kwhatever", "username", "Passw0rd", false),
                    ("Jeffrey Hernan", "jefnandez", "herfrey", true),
                    ("Steven Xu", "Si", "Yuan", true);




    
CREATE TABLE Events(
	eventID INT(11) PRIMARY KEY AUTO_INCREMENT,
    eventName VARCHAR(999) NOT NULL,
    userID INT(11) NOT NULL,
    location VARCHAR(999),
    month INT(2),
    day INT(2),
    startTime TIME,
    endTime TIME,
    privateEvent BOOLEAN NOT NULL,
    
    
    FOREIGN KEY fk1(userID) REFERENCES Users(userID)
    
);

INSERT INTO Events(eventName, userID, location, month, day, startTime, endTime, privateEvent)
	VALUES ("event1", 3, "SAL", 4, 1, 22000, 210000, true),
					("event2", 
					(SELECT userID
						FROM	Users
						WHERE	fullName = 'Jess Zhu'
                        ),
					"VKC", 2, 21, 143000, 153000, false); 

INSERT INTO Events(eventName, userID, privateEvent)
	VALUES	("evvveeeeent3", 2, false),
					("v4", 
                    (SELECT userID
						FROM	Users
						WHERE	username = 'Si'),
					false),
                    ("e5", 1, false);
                    





CREATE TABLE FollowingUsers(
	followUserID INT(11) PRIMARY KEY AUTO_INCREMENT,
    followedUserID INT(11) NOT NULL,
    followedByUserID INT(11) NOT NULL,


    FOREIGN KEY fk1(followedUserID) REFERENCES Users(userID),
    FOREIGN KEY fk2(followedByUserID) REFERENCES Users(userID)
);

INSERT INTO FollowingUsers(followedUserID, followedByUserID)
	VALUES	(1,4),
					(
						(SELECT userID
						FROM Users
						WHERE username = 'jefnandez'),
							
						(SELECT userID
						FROM Users
                        WHERE fullName = 'Sina Kwhatever')
                    );




CREATE TABLE FollowingEvents(
	followEventID INT(11) PRIMARY KEY AUTO_INCREMENT,
    userID INT(11) NOT NULL,
    eventID INT(11) NOT NULL,
    notificationTime INT(11),

    FOREIGN KEY fk1(userID) REFERENCES Users(userID),
    FOREIGN KEY fk2(eventID) REFERENCES Events(eventID)
);



INSERT INTO FollowingEvents(userID, eventID, notificationTime)
	VALUES	(3,2,30),
					(
						(SELECT userID
							FROM Users
                            WHERE username = 'jessicyz'),
						(SELECT eventID
							FROM Events
                            WHERE eventName = 'v4'),
						120
                    );

INSERT INTO FollowingEvents(userID, eventID)
	VALUES (2,1),
				(
					(SELECT userID 
						FROM Users 
                        WHERE fullName = 'Sina Kwhatever'),
					(SELECT eventID
						FROM Events 
                        WHERE userID = 1
                        AND eventName = 'e5')
                
                );