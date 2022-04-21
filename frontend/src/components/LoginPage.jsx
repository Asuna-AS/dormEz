import React from 'react'
import {Col, Row, Container} from 'react-bootstrap';
import './css/login.css';
const { Component } = React

class LoginForm extends React.Component{
render(){
  return(
    <div id="loginform">
      <FormHeader title="Log in" />
      <Form />  
    </div>
  )
}
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
 <div>
   <FormInput description="Username" placeholder="Enter your username" type="text" />
   <FormInput description="Password" placeholder="Enter your password" type="password"/>
   <FormButton title="Log in"/>
 </div>
);

const FormButton = props => (
<div id="button" class="row">
  <button>{props.title}</button>
</div>
);

const FormInput = props => (
<div class="row">
  <label>{props.description}</label>
  <input type={props.type} placeholder={props.placeholder}/>
</div>  
);


function LoginPage() {
  return (
    <>
      <LoginForm />
    </>
  )
}

export default LoginPage;