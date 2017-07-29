import React from 'react';
import ReactDOM from 'react-dom';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div className="box">
        <form className="register-form">
          <input type="text" className="inputFirstName" placeholder="First Name"/>
          <input type="text" className="inputLastName" placeholder="Last Name"/>
          <br/>
          <input type="text" className="input" placeholder="Enter your Email"/>
          <br/>
          <input type="password" className="input" placeholder="password" placeholder="Enter your Password"/>
          <br/>
          <textarea type="text" className="inputBio" placeholder="Tell us about yourself!"/>
          <br/>
          <button className="register" type="submit"> Register </button>
        </form>
      </div>
    )
  }
}

export default RegisterForm