import React from "react";

function Application(): React.ReactElement {
  return (
    <React.Fragment>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.668xw:1.00xh;0.119xw,0&resize=1200:*"
        alt="Cute little cat"
      />
      <div data-testid="custom-element">Custom HTML Element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Jest"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United State</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canda</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
            <option value="ID">Indonesia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="term" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default Application;
