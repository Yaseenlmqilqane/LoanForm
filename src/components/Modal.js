import "./Modal.css"

const Modal = ({isVisible, errorMessage=null}) => {
  if(isVisible) {
    return (
      <div className="container">
        {/* <h1 className="msg-text">The Form Has Been Submited Successfully</h1> */}
        <h1 style={{color: errorMessage ? "red" : "green"}} className="msg-text">{errorMessage ? errorMessage : "The Form Has Been Submited Successfully"}</h1>
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Modal
