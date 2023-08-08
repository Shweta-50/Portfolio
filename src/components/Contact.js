import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";
import "animate.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const [emailSend, setEmailSend] = useState("");
  const [contact, setContact] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tj6z5rh",
        "template_2kqp2q5",
        form.current,
        "yhCvvefqZ49YqLbJE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSend("Email has been send. We will connect you soon.");
        },
        (error) => {
          console.log(error.text);
          setEmailSend(error.text);
        }
      );
  };
  const InputHandler = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const SendDetail = (e) => {
    e.preventDefault();
    setEmailSend("Email has been send. We will connect you soon.");
    setContact({
      user_name: "",
      user_email: "",
      message: "",
    });
    setTimeout(() => {
      setEmailSend("");
    }, 3000);
  };

  return (
    <section className="contact pt-6 px-2" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img
              className={"animate__animated animate__zoomIn"}
              src={contactImg}
              alt="Contact Us"
            />
          </Col>
          <Col size={12} md={6}>
            <div className={"animate__animated animate__fadeIn"}>
              <h2>Get In Touch</h2>
              <form ref={form}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      onChange={InputHandler}
                      placeholder="First Name"
                      name="user_name"
                      value={contact.user_name}
                    />
                  </Col>

                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      name="user_email"
                      value={contact.user_email}
                      onChange={InputHandler}
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col size={12} className="px-1 ">
                    <textarea
                      rows="6"
                      name="message"
                      value={contact.message}
                      onChange={InputHandler}
                      placeholder="Message"
                    ></textarea>

                    <button
                      className="send-btn"
                      type="submit"
                      onClick={SendDetail}
                    >
                      <span>Send</span>
                    </button>
                  </Col>
                </Row>
              </form>
              <h3 className="py-3 mt-3 d-block">{emailSend}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
