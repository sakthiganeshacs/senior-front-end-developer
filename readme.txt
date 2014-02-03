chatapp - readme.txt

"This is my first code in Node.js, Hope I did well as I can"

How To Run "chatapp":
    1. Run "chatserver.js" using Node.js command prompt("node chatserver.js")
    2. Open two browsers on the address bar type http://localhost:portnumber
    3. Enter the Username and Login in each of them
    4. You can start send the messages.

	
	Created a basic HTML page with a div for messages and text area for entering a message, a button to send the message to the server.
	

	When a user enters a message and clicks the button, it will move it to the div and send it to the server a unique id will be generated to identify the client for the session.


	When the server receives the message, it will broadcasts it to all clients including the originating client.
 
	But as per the requirement, when the client receives the message, it will ignore it if it was the sender. 
	

	When receiving a message from another client, it will add to div for message identifying the id of the client.

	Active Users will be shown in the list box. 

	Test cases created for the code.
 


