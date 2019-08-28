import React from "react"

import "./form.css"

const Form = () => {
  return (
    // data-netlify="true" tells netlify to register form
    <form
      name="Contact Form"
      method="POST"
      data-netlify="true"
      className="form-container"
    >
      <input type="hidden" name="form-name" value="Contact Form" />
      <label className="form-element">
        <span>From: </span>
        <input name="From" placeholder="From" className="form-field" />
      </label>

      <label className="form-element">
        <span>Subject: </span>
        <input name="Subject" placeholder="Subject" className="form-field" />
      </label>

      <label className="form-element">
        <span>Message: </span>
        <textarea
          name="Message"
          placeholder="Message"
          className="form-field"
          rows="5"
        />
      </label>
    </form>
  )
}

export default Form
