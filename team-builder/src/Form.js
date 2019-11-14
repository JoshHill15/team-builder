import React, { useState, useEffect } from "react";
import "./App.css";

function Form(props) {
  const [team, setTeam] = useState({
    name: "",
    email: "",
    role: ""
  });
  const handleChanges = e => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };
  function submit(e) {
    e.preventDefault();
    props.addTeam(team);
    setTeam({
      name: "",
      email: "",
      role: ""
    });
  }
  useEffect(() => {});
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={team.name}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChanges}
          value={team.email}
        />
        <br />
        <label htmlFor="role">Role: </label>
        <select
          value={team.role}
          onChange={handleChanges}
          type="text"
          id="role"
          name="role"
        >
          <option value="something">Whats your role?</option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="UI/UX Engineer">UI/UX Engineer</option>
          <option value="Data Scientist">Data Scientist</option>
        </select>
        {/* <label htmlFor = "role">Role:  </label>
                <input
                id = "role"
                type = "text"
                name = "role"
                onChange = {handleChanges}
                value = {team.role}
                /> */}
        <br />
        <button type="submit">Add Teammate!</button>
      </form>
      {props.teams.map(cv => (
        <div className="form">
          <p>Name: {cv.name}</p>
          <p>Email: {cv.email}</p>
          <p>Role: {cv.role}</p>
        </div>
      ))}
    </div>
  );
}

export default Form;
