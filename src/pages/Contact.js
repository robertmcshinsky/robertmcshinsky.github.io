import React from "react";

function Contact() {
  return (
    <div className="container">
      <form
        className="text-center border border-light p-5"
        action="mailto:robert.mcshinsky@gmail.com"
      >
        <p className="h4 mb-4">Shoot me a Message</p>

        <input
          type="text"
          id="defaultContactFormName"
          className="form-control mb-4"
          placeholder="Name"
        ></input>

        <input
          type="email"
          id="defaultContactFormEmail"
          className="form-control mb-4"
          placeholder="E-mail"
        ></input>

        <label>Subject</label>
        <select className="browser-default custom-select mb-4">
          <option value="" disabled>
            Choose option
          </option>
          <option value="1">Learn More</option>
          <option value="2">Business Idea</option>
          <option value="3">Project</option>
          <option value="4">Job Offer</option>
          <option value="5">Other</option>
        </select>

        <div className="form-group">
          <textarea
            className="form-control rounded-0"
            id="exampleFormControlTextarea2"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>

        <div className="custom-control custom-checkbox mb-4">
          <input
            type="checkbox"
            className="custom-control-input"
            id="defaultContactFormCopy"
          ></input>
          <label
            className="custom-control-label"
            htmlFor="defaultContactFormCopy"
          >
            Send me a copy of this message
          </label>
        </div>

        <button className="btn btn-info btn-block" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
