import React from "react"

import "./form.css"

const Form = () => {
  return (
    <div className="form-container">
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
    </div>
  )
}

export default Form
