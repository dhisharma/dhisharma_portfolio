import React, { useState } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, subject });
    if (name && email && phone && subject && message) {
      const templateParams = {
        from_name: name,
        reply_to: email,
        email:email,
        message: message,
        subject: subject,
        phone: phone,
      };
      emailjs
        .send(
          "service_tkuvbba",
          "template_eivujlm",
          templateParams,
          "0GGH6mtrI34Idozb4"
        )
        .then(
          (response) => {
            swal("Message Sent!", "", "success");
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.log("FAILED...", err);
            swal("Failed!", "", "error");
          }
        );
    } else {
      swal("Error!", "Missing Required Field", "error");
    }
  };
  return (
    <section className="contact" id="contact">
      <h3 className="contact-intro  text-center">Contact me!</h3>
      <div className="form-div text-center">
        <form className="form" onSubmit={sendMail}>
          <div className="form-group display-flex row">
            <label for="email" className="form-label col-md-4">
              {/* Email */}
            </label>
            <input
              type="email"
              className="form-control fields col-md-8"
              placeholder="Email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("email " + email);
              }}
            />
          </div>
          <div className="form-group row">
            <label for="name" className="form-label col-md-4">
              {/* Name */}
            </label>

            <input
              type="text"
              className="form-control fields col-md-8"
              placeholder="Name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group row">
            <label for="phone" className="form-label col-md-4">
              {/* Phone */}
            </label>

            <input
              type="number"
              className="form-control fields col-md-8"
              placeholder="Phone Number"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group row">
            <label
              for="subject"
              placeholder="Subject"
              className="form-label col-md-4"
            >
              {/* Subject */}
            </label>

            <input
              id="subject"
              className="form-control fields col-md-8"
              row="10"
              type="text"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group row">
            <label
              for="subject"
              placeholder="Subject"
              className="form-label col-md-4"
            >
              {/* Message */}
            </label>

            <textarea
              id="message"
              class="form-control col-md-8"
              row="10"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <center>
            <button>
              Submit
            </button>
          </center>
        </form>
      </div>
    </section>
  );
};

export default Contact;
