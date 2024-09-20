import React, { useEffect, useRef, useState,useContext } from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { db, addDoc, collection } from "./firebase"; // Import Firebase config
import "./contact.css";
import toast, { Toaster } from 'react-hot-toast';
import ThemeContext from '../../Components/custom/Theme';


function Contact({ LocomotiveScrollProvider }) {
  const contactRef = useRef(null);
  const { theme,toggleTheme } = useContext(ThemeContext);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Initialize Locomotive Scroll
  useEffect(() => {
    if (contactRef.current) {
      console.log("Locomotive Scroll is working on Contact page.");
    } else {
      console.log("Locomotive Scroll reference is missing.");
    }

    // Clean up Locomotive Scroll on component unmount
    return () => {
      if (LocomotiveScrollProvider) {
        console.log("Destroying Locomotive Scroll");
        LocomotiveScrollProvider.destroy();
      }
    };
  }, [LocomotiveScrollProvider]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Show a toast while the message is being saved
  if (theme === 'light') {
    await toast.promise(
      addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(), // Add timestamp
      }),
      {
        loading: "sending your message...",
        success: "Thank you for contacting me.I will get back to you shortly.",
        error: "Failed to send message. Please try again.",
      },
      {
        position: "top-center",
        style: {
          backgroundColor: '#1f1f1f',
          color: '#fff',
        },
        className: 'teaser1',
        success: {
          duration: 5000,
          icon: '📩',
       },
      }
    );
  }
  else if (theme === 'dark') {
    await toast.promise(
      addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(), // Add timestamp
      }),
      {
        loading: "sending your message...",
        success: "Thank you for contacting me.I will get back to you shortly.",
        error: "Failed to send message. Please try again.",
      },
      {
        position: "top-center",
        style: {
          backgroundColor: '#fff',
          color: '#000',
        },
        className: 'teaser1',
        success: {
          duration: 5000,
          icon: '📩',
       },
      }
    );
  }
    // Reset form after successful submission
    // setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Error adding document: ", error);
    toast.error("Failed to send message. Please try again.", {
      position: "top-center",
    });
  }
};


  return (
    <div className="contactpage">
      <div className="maincontact " data-scroll-container ref={contactRef}>
        <div className="contact container d-flex flex-column flex-wrap justify-content-center" data-scroll-section>
          <h1 className="contactheading" data-scroll data-scroll-delay=".1" data-scroll-class="in-view">
            Contact Me
          </h1>
          <p data-scroll data-scroll-class="in-view">
            For any queries or suggestions, feel free to contact Me.
          </p>
          <div className="contact-logo container d-flex flex-row" data-scroll>
            <div className="email" data-scroll data-scroll-class="in-view">
              <p>
                <a href="mailto:alanjohn9626@gmail.com">
                  <MdAttachEmail className="email-logo" />
                </a>
              </p>
            </div>
            <div className="git ms-4" data-scroll data-scroll-class="in-view">
              <p>
                <a href="https://github.com/itsmealan2000" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-logo" />
                </a>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="form-group" data-scroll data-scroll-class="in-view">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="form-control m-2"
              data-scroll
              data-scroll-speed="1"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control m-2"
              data-scroll
              data-scroll-speed="1"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Enter your message"
              name="message"
              className="form-control m-2"
              data-scroll
              data-scroll-speed="1"
                rows="5"
                cols="30"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="buttons container-fluid" data-scroll data-scroll-class="in-view">
              <button type="submit" className="btn btn-primary mt-3">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
        </div>
  );
}

export default Contact;