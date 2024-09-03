<header>
        <h1>Real-Time Chat Server</h1>
    </header>

        <strong>Description</strong>
        This is a real-time chat server built with Node.js, Express, and Socket.io. It handles user connections, message sending, and user disconnections, providing a foundation for real-time messaging applications.

        <strong>Features</strong>
        
           <strong>Real-Time Messaging:</strong> Allows users to send and receive messages instantly.
           <strong>User Online Status:</strong> Tracks and broadcasts online users.
           <strong>Notifications:</strong> Sends notifications for new messages.
       

        <strong>Prerequisites</strong>
        <ul>
            <li><strong>Node.js:</strong> v14 or later</li>
            <li><strong>npm:</strong> Node package manager</li>
        </ul>

        <strong>Installation</strong>
        <ol>
            <li><code>git clone <repository-url></code></li>
            <li>Navigate to the Project Directory:
                <pre><code>cd &lt;project-directory&gt;</code></pre>
            </li>
            <li>Install Dependencies:
                <pre><code>npm install</code></pre>
            </li>
            <li>Start the Server:
                <pre><code>npm start</code></pre>
                Server will run on: <code>http://localhost:2000</code>
            </li>
        </ol>

        <strong>Endpoints</strong>
        <ul>
            <li><code>GET /</code> - Returns a simple welcome message.</li>
        </ul>

        <strong>Socket Events</strong>
        <ul>
            <li><code>addNewUser(userId)</code> - Emits when a new user connects, adding them to the list of online users.</li>
            <li><code>sendMessage(message)</code> - Emits when a message is sent from one user to another.</li>
            <li><code>disconnect</code> - Emits when a user disconnects, updating the list of online users.</li>
        </ul>
   
