import React, {useState} from 'react';
import './App.css';
import Form from "./Form"
function App() {
  const [teams, setTeams] = useState([])
  const [edit, setEdit] = useState()
  const addTeam = team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role
    }
    setTeams([...teams, newTeam])
  }
  return (
    <div className="App-header">
      <h1>My Team</h1>
      <Form addTeam = {addTeam} teams = {teams}/>
    </div>
  );
}

export default App;
