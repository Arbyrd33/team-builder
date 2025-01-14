import './App.css';
import React, {useState} from 'react'; 
import Form from "./Form";
// import PracticeForm from "./PracticeForm";

const teamMates = [
  {
    id: 21,
    name: "Gary Knowles",
    email: "Gary@GaryKnowles.Gary",
    role: "Senior Developer"
  }, {
    id: 22, 
    name: "Brad Childs",
    email: "Brad@stern.um",
    role: "Junior Developer"
  }, {
    id: 23,
    name: "Daphne Blake",
    email: "daphne@blake.estate",
    role: "Student Developer"
  }
]
const initialFormValues = {
  id: '',
  name: '',
  email: '',
  role: ''
}

 

function App() {
  const [team, setTeam] = useState(teamMates)
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue)=>{
    setFormValues({ ...formValues, [inputName]: inputValue })
  }
  const submitForm = ()=>{
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.name || !newMember.email || !newMember.role) return;
    setTeam([...team, newMember]);


  }




  return (
    <div className="App">
      <header className="App-header">
        <h2>Meet The Team!</h2>
      </header>
      <div className="App-body">
      <div className="card team">
          {team.map((member, i) => <p key={i}>{member.name}, {member.role}</p>)}
      </div>
      <h2 className = "join">Join The Team!</h2>
      <div className= "card form">
      <Form 
        values = {formValues}
        team = {team}
        update = {updateForm}
        submit = {submitForm}
        />
        {/* <PracticeForm /> */}
        </div>
    </div>
    </div>
  );
}

export default App;
