import React, { useEffect, useState, useRef } from "react";
import { db, getDocs, collection } from "../contact/firebase"; // Correct import
import "./me.css"; // Add any CSS if needed

function Me({ LocomotiveScrollProvider }) {
  const meRef = useRef(null);
  const [messages, setMessages] = useState([]); // State to hold messages

  // Fetch messages from Firestore
  const fetchMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const messagesArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Sort messages by timestamp in descending order
      messagesArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      setMessages(messagesArray); // Store messages in state
    } catch (error) {
      console.error("Error fetching messages: ", error);
    }
  };

  // Initialize Locomotive Scroll and fetch messages on component mount
  useEffect(() => {
    fetchMessages(); 
    const intervalId = setInterval(fetchMessages, 5000); 

    if (meRef.current) {
      console.log("Locomotive Scroll is working on Me page.");
    } else {
      console.log("Locomotive Scroll reference is missing.");
    }

    return () => {
      clearInterval(intervalId); 
      if (LocomotiveScrollProvider) {
        LocomotiveScrollProvider.destroy();
      }
    };
  }, [LocomotiveScrollProvider]);

  return (
    <div id="me" data-scroll-container ref={meRef}>
      <div className="adminpage container-fluid" data-scroll-section>
        {/* Display the fetched messages */}
        <div className="messages-list " >
          <h2>Messages</h2>
          {messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            <div className="container-fluid" >
              <ul className="container" data-scroll data-scroll-speed="2">
                {messages.map((message) => (
                  <li key={message.id}>
                    <strong>{message.name}:</strong> <br />{message.message} <br />
                    <small>Email: {message.email}</small> <br />
                    <small>Date: {new Date(message.timestamp).toLocaleString()}</small>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Me;
