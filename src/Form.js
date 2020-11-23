import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class SignupForm extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      email: '', 
      agree: false, 
      touched: {
        name: false,
        email: false
      }
    };
    
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateAgreement = this.updateAgreement.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  updateName(event) {
    console.log(this.state.name);
    this.setState({
  	  name: event.target.value
    })
  } 

  updateEmail(event) {
    console.log(this.state.email);
  	this.setState({
  	  email: event.target.value
    })
  } 

  updateAgreement(event) {
    console.log('Checkbox clicked');
    this.setState({
      agree: event.target.checked
    })
  }

  handleBlur = (field) => (event) => {
    this.setState ({
      touched: {...this.state.touched, [field]: true}
    })
  }

  validateFields(name, email) {
    const error = {
      name: '',
      email: '',
    }

    if (this.state.touched.name && name.length < 2) {
      error.name = "Name should be longer than 2 characters."
    } 

    if (this.state.touched.email && email.split('').filter( x => x === '@').length !== 1) {
      error.email = "E-mail address should contain an '@' character."
    }

    return error;
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert(`Current state is ${JSON.stringify(this.state)}`);

    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {

    const error = this.validateFields(this.state.name, this.state.email);

    return (
      <div>
        <h1>Join our waitlist!</h1>
        <p>If you'd like to get early access to our app, leave your contact details below.</p>
        <Form className="justify-content-center" onSubmit={this.handleSubmit}>
            <Form.Group as={Row} >
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={this.updateName} onBlur={this.handleBlur('name')}/>
                <p>{error.name}</p>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.updateEmail} onBlur={this.handleBlur('email')}/>
                <p>{error.email}</p>
              </Col>
            </Form.Group> 
            <Form.Group as={Row} controlId="formBasicCheckbox">
              <Col sm={{span: 8, offset: 2}}>
               <Form.Check type="checkbox" name="agree" checked={this.state.agree} onChange={this.updateAgreement} label="By checking this box, you agree to be contacted 
              by us when we launch the app."  />
              </Col>
            </Form.Group>
            <Button column sm={2} type="submit" className="rounded-pill btn-success">
                Submit
            </Button>
        </Form>
      </div>
    );
  }
}

export default SignupForm;