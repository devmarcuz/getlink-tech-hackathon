import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../css/Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    team_name: "",
    email: "",
    phone: "",
    message: "",
    topic: "",
  });
  const [error, seterror] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { first_name, email, phone, message, topic } = formData;
  const apiUrl = "https://backend.getlinked.ai/hackathon/contact-form";

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    seterror("");
    setLoading(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let data = {
      email,
      phone_number: phone,
      first_name,
      message,
    };
    axios
      .post(apiUrl, data)
      .then((res) => {
        setFormData({
          first_name: "",
          team_name: "",
          phone: "",
          email: "",
          topic: "",
          message: "",
        });
        seterror("Message sent successfully");
        setLoading(false);
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 400") {
          seterror("Please fill all fields");
          setLoading(false);
        } else {
          seterror("Server error");
          setLoading(false);
        }
      });
  };

  return (
    <div className="contact">
      {/* <img
        src="/images/Purple-Lens-Flare-PNG-contact.svg"
        alt=""
        className="lens-contact"
      /> */}
      <img
        src="/images/Purple-Lens-Flare-PNG-contact-respo.svg"
        alt=""
        className="lens-repo"
      />
      <Header isFixed={isFixed} setIsFixed={setIsFixed} />
      <main>
        <img
          src="/images/Purple-Lens-Flare-PNG-contact.svg"
          alt=""
          className="lens"
        />
        <img
          src="/images/Purple-Lens-Flare-PNG-contact-2.svg"
          alt=""
          className="len"
        />
        <img src="/images/stars/sata gra.svg" alt="" className="star" />
        <div className="left-section">
          <h2>Get in touch</h2>
          <div className="details">
            <p>Contact Information</p>
            <p>27,Alara Street Yaba 100012 Lagos State</p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
          </div>
          <div className="media">
            <p>Share on</p>
            <div className="socials">
              <Link>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link>
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link>
                <svg
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </Link>
              <Link>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img src="/images/stars/star pu.svg" alt="" className="stars" />
          <img src="/images/stars/star (1).svg" alt="" className="stars-2" />
          <img src="/images/stars/star.svg" alt="" className="stars-3" />

          <form action="" onSubmit={onSubmit}>
            <h1>
              Questions or need assistance? <br />
              Let us know about it!
            </h1>
            <p>Email us below to any question related to our event</p>
            {error && <div className="error">{error}</div>}
            <input
              type="text"
              placeholder="First Name"
              className="firstname"
              name="first_name"
              onChange={onChange}
              value={first_name}
            />
            <input
              type="text"
              placeholder="Team Name"
              className="team"
              name="first_name"
              onChange={onChange}
              value={first_name}
            />
            <input
              type="text"
              placeholder="Topic"
              className="topic"
              name="topic"
              onChange={onChange}
              value={topic}
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Mail"
              onChange={onChange}
              value={email}
            />
            <textarea
              name="message"
              id=""
              rows="6"
              placeholder="Message"
              onChange={onChange}
              value={message}
            ></textarea>
            {!loading ? (
              <button type="submit">Submit</button>
            ) : (
              <button type="submit" className="loading">
                Submit
              </button>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
