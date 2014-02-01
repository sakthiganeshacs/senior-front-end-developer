## Senior Front-end developer programming task

In order to be considered for the Front-end developer, you must complete the following steps.

Note: This task should take no longer than 3-4 hours at the most.

### Prerequisites

* You will need to have [NodeJS](http://www.nodejs.org/) and [Socket IO](http://socket.io/) installed

## Task
1. Fork this repository (if you don't know how to do that, Google it)
2. Create a *source* folder to contain your code
3. In the *source* folder, create an [ExpressJS](http://expressjs.com/) or bare NodeJS app to do the following:
   - A Node JS Socket IO server that handles any message received and broadcasts the message to all clients
   - A basic HTML page with a div for messages and text area for entering a message, a button to send the message to the server
   - When a user enters a message and clicks the button, it should move it to the div and send it to the server
   - The message needs to use Socket IO to communicate with the server. It should contain:
     - Message
     - Message Type
       - *Plain* message is just content
       - *Active*, is basically when a user is focused on the web page (Bonus)
       - *Inactive*, is when the user leaves focus of the webpage (Bonus)
       - *Offline*, when a user has closed the browser, or the socket io session is lost (Bonus)
     - a unique id to identify the client (can be generated for the session)
   - When the server receives the message, it broadcasts it to all clients including the originating client.
   - When the client receives the message, it should ignore it if it was the sender.
   - When receiving a message from another client, it should add to div for message identifying the id of the client.
   - Bonus message types are optional to implement
   - Identify if other users on the system are active, or inactive, based on these message types. You can use a list box to show the active users
4. Create a text file on the root of your folder to identify test cases for your code.
5. Commit and Push your code to your new repository
6. Send us a pull request, we will review your code and get back to you.


