import React, { useState } from 'react'
function Contact() {

  const [data, setdata]=useState({
    name: "",
    phone: "",
    email: "",
    msg: ""
  });
  const inputChange=(event) => {
    const {name, value}=event.target;
    setdata((prev) => {
      return {
        ...prev, [name]: value,
      };
    });
  };
  const formsubmit=(event) => {
    event.preventDefault();
    alert(`My name is ${data.name}`);
  };
  return (
    <div style={{marginBottom:'20%'}} id='box4'>
      <div className="my-5 mb-4">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div" >
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={inputChange} placeholder="Enter Your Name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputChange} placeholder="Mobile Number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email Adress</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputChange} placeholder="email Adress" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputChange} rows="3"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
