import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/Register.css";
import SucessModal from "../components/SucessModal";
import axios from "axios";

const Register = () => {
  const [bool, setBool] = useState(false);
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    category: "",
    size: "",
  });
  const [categoryArr, setCategoryArr] = useState([]);
  const sizeArr = [0, 1, 2, 8, 9, 10];

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    axios
      .get("https://backend.getlinked.ai/hackathon/categories-list")
      .then((res) => {
        setCategoryArr(res.data);
      })
      .catch((err) => {});
  }, []);

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

  const { name, phone, email, topic, category, size } = formData;

  const apiUrl = "https://backend.getlinked.ai/hackathon/registration";

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !phone || !email || !topic) {
      setError("Please fill all the fields");
      setLoading(false);
    } else if (!category) {
      setError("Select a category");
      setLoading(false);
    } else if (!size) {
      setError("Select a group size");
      setLoading(false);
    } else if (!check) {
      setError("Accept the privacy policy");
      setLoading(false);
    } else {
      let data = {
        team_name: name,
        phone_number: phone,
        email,
        project_topic: topic,
        category: parseInt(category),
        group_size: parseInt(size),
        privacy_policy_accepted: check,
      };

      axios
        .post(apiUrl, data)
        .then((res) => {
          setLoading(false);
          setBool(true);
          setFormData({
            name: "",
            phone: "",
            email: "",
            topic: "",
            category: "",
            size: "",
          });
          setError("");
          setCheck(false);
        })
        .catch((err) => {
          setLoading(true);

          if (
            err.response.data.email[0] ===
            "applicant with this email already exists."
          ) {
            setError("Email already exists");
            setLoading(false);
          } else setError("Server error");
        });
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setLoading(false);
  };

  return (
    <div className="register">
      <Header isFixed={isFixed} setIsFixed={setIsFixed} />
      {bool && <SucessModal setBool={setBool} />}
      <img
        src="/images/Purple-Lens-Flare-PNG-register-repo.svg"
        alt=""
        className="lens-repo"
      />
      <main>
        <img
          src="/images/Purple-Lens-Flare-PNG-register.svg"
          alt=""
          className="lens"
        />
        <img
          src="/images/Purple-Lens-Flare-PNG-register-2.svg"
          alt=""
          className="lens-2"
        />
        <div className="left-container">
          <img src="/images/stars/sata gra.svg" alt="" className="star" />
          <img src="/images/stars/star (1).svg" alt="" className="star-2" />
          <img src="/images/stars/star pu.svg" alt="" className="star-3" />
          <img
            src="/images/3d-graphic-designer-showing-thumbs-up-png 1.svg"
            alt=""
            className="vector"
          />
        </div>
        <div className="right-container">
          <img src="/images/stars/star (1).svg" alt="" className="star" />
          <img src="/images/stars/star.svg" alt="" className="star-2" />
          <form action="" onSubmit={submit}>
            <h1>Register</h1>
            <img
              src="/images/3d-graphic-designer-showing-thumbs-up-png 1 (1).svg"
              alt=""
              className="vector2"
            />
            <div className="contain">
              <img src="/images/Part of move.svg" alt="" className="move" />
              <h2>CREATE YOUR ACCOUNT</h2>
              {error && <p className="error">{error}</p>}
              <div className="form">
                <div className="label-container">
                  <div className="label">
                    <label htmlFor="name">Team's Name</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={onChange}
                      placeholder="Enter the name of your group"
                    />
                  </div>
                  <div className="label">
                    <label htmlFor="name">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={phone}
                      onChange={onChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="label-container">
                  <div className="label">
                    <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="label">
                    <label htmlFor="name">Project Topic</label>
                    <input
                      type="text"
                      name="topic"
                      value={topic}
                      onChange={onChange}
                      placeholder="What is your group project topic"
                    />
                  </div>
                </div>

                <div className="label-container select">
                  <div className="label">
                    <label htmlFor="name">Category</label>
                    <div className="select-container">
                      <select
                        className="custom-select"
                        onChange={onChange}
                        name="category"
                        value={category}
                      >
                        <option value="">Select your category</option>[
                        {categoryArr.length >= 1 &&
                          categoryArr.map((item, index) => (
                            <option value={item.id} key={index}>
                              {item.name}
                            </option>
                          ))}
                      </select>
                      <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L6.5 7L11.5 1"
                          stroke="white"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="label">
                    <label htmlFor="name">Group Size</label>
                    <div className="select-container">
                      <select
                        className="custom-select"
                        onChange={onChange}
                        name="size"
                        value={size}
                      >
                        <option value="">Select your group size</option>
                        {sizeArr.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L6.5 7L11.5 1"
                          stroke="white"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="warning">
                Please review your registration details before submitting
              </div>
              <div className="agree">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    onClick={() => {
                      setCheck(!check);
                      setError("");
                    }}
                  />
                  {!check ? (
                    <span className="checkmark"></span>
                  ) : (
                    <span className="checkmarked"></span>
                  )}
                </label>
                <p>
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
            </div>
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

export default Register;
