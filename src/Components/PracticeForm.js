import React, {useState} from 'react';


const petsList = [
    {petName: "Karma", petType: "cat"},
    {petName: "Beatrice 'Bea' BumbleBeans", petType: "cat"},
    {petName: "Bruno", petType: "orange"},
    {petName: "Scout", petType: "mockingbird"},
    {petName: "Young", petType: "Giant"}
    
  ]
  
 export default function PracticeForm(){
    const [pets, setPets] = useState(petsList);
    const [formValues, setFormValues] = useState({petName: "", petType: ""});

const change = (evt) =>{
  console.log(evt.target.value);
  const {name, value} = evt.target;
  setFormValues({...formValues, [name]: value})
}
  

const submit = (event) => {
  event.preventDefault();
  const newPet = {
    petName: formValues.petName.trim(),
    petType: formValues.petType.trim()
  }
  setPets(pets.concat(newPet));
  formValues.petName = "";
  formValues.petType = "";
}
    return (
      <div className="container">
        <br></br>
        <h1>A Test Form</h1>
        <h2>(You know, for confidence)</h2><br/><br/>
        <p>Here is a list of pets that I've collected from various sources (like my kitchen cabinet, and this form that I took four and a half billion years to build out.)<br/><br/><br/></p>
        {pets.map((pet, idx) => (
         <div key={idx} > {pet.petName}, the {pet.petType}</div>
         ))}
 

       <form onSubmit={submit}>
        <input
          value={formValues.petName}
          name="petName"
          type="text"
          onChange={change}
          placeholder="pet's given name"
        />
        <input 
          value={formValues.petType}
          name="petType"
          type="text"
          onChange={change}
          placeholder="make and model of pet"
        />
        <input type="submit" value="Give Me Your Pet"/>
       </form>


      </div>
    )
  }