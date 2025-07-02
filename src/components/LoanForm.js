import "./LoanForm.css";
import Modal from "./Modal";
import { useState } from "react";



const LoanForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [ShowModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    phone: "",
    age: "",
    isItEmployee: false,
    salary: ""
  });

  const btnIsDisabled = 
  formInputs.name === "" || 
  formInputs.phone === "" || 
  formInputs.age === "";



  const handleFormSubmit = (e) => {
    e.preventDefault();

    const {age, phone} = formInputs;
    if(age < 18 || age > 60) {
      setErrorMessage("The age is not allowed")
    } else if(phone.length < 10 || phone.length > 12) {
      setErrorMessage("The phone number is not allowed")
    } else {
      setErrorMessage(null)
    }

    setShowModal(true)
  };

  const heandleShowModal = () => {
    if(ShowModal) {
      setShowModal(false)
    }
  };

  return (
    <div onClick={heandleShowModal}>
      <form>
        <h1>Requesting a Loan</h1>

        <div className="div-input">
          <label>Full Name</label>
          <input 
            value={formInputs.name}
            onChange={(e) => setFormInputs({...formInputs, name: e.target.value})}
            type="text" 
            placeholder="Name"
          />
        </div>

        <div className="div-input">
          <label>Phone Number</label>
          <input 
            value={formInputs.phone}
            onChange={(e) => setFormInputs({...formInputs, phone: e.target.value})}
            type="text" 
            placeholder="Your phone number"
          />
        </div>

        <div className="div-input">
          <label>Age</label>
          <input 
            value={formInputs.age}
            onChange={(e) => setFormInputs({...formInputs, age: e.target.value})}
            type="text" 
            placeholder="Your age"
          />
        </div>

        <div className="div-input">
          <label>Are you Employee</label>
          <input 
          checked={formInputs.isItEmployee}
            onChange={(e) => setFormInputs({...formInputs, isItEmployee: e.target.checked})}
            className="checkbox" 
            type="checkbox" />
        </div>

        <div className="div-input">
          <label>Salary</label>
          <select
            value={formInputs.salary}
            onChange={(e) => setFormInputs({...formInputs, salary: e.target.value})}
          >
            <option>Less than $500</option>
            <option>Between $1000 and $3000</option>
            <option>Between $3000 and $5000</option>
          </select>
        </div>

        <button 
          onClick={handleFormSubmit} 
          disabled={btnIsDisabled} 
          className="btn" 
          type="submit">
            Submit
        </button>

      </form>


      <Modal isVisible={ShowModal} errorMessage={errorMessage}/> 

    </div>
    


  )
}

export default LoanForm
