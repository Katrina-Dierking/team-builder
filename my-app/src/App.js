import React, {useState} from 'react';
import TeamData from './Components/TeamData';
import TeamList from './Components/TeamList';
import Form from './Form';

function App() {
  const [members, setMembers] = useState(TeamData);

  const addNewMember = member => {
    setMembers([...members, member])
  }

  return (

    <div>
      <div className ="teamSection">
      <h1>Katrina's Team Members</h1>
      <TeamList teamList={members} />
      </div>

      <div className ="formSection">
      <Form addNewPerson={addNewMember} />
      </div>
    </div>
  );
}


  

export default App;
