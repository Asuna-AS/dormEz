import React from 'react'
import {Col, Row, Container} from 'react-bootstrap';
import './css/signin.css';
const { Component } = React

class SignInForm extends React.Component{
render(){
  return(
    <div id="signinform">
      <FormHeader title="Sign In" />
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
   <FormInput description="Name" placeholder="Enter your Name" type="text" />
   <FormInput description="Roll no." placeholder="Enter your Roll no." type="text"/>
   <FormInput description="Phone no." placeholder="Enter your Phone no." type="text" />
   <FormInput description="Floor no." placeholder="Enter your Floor no." type="text"/>
   <FormInput description="Room no." placeholder="Enter your Room no." type="text"/>
   <FormInput description="Create password" placeholder="Enter your Password" type="Password"/>
   <FormButton title="Sign in"/>
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

function SigninPage() {
  return (
    <>
      <SignInForm />
    </>
  )
}
// const SigninPage = () => {
//   return (
//     <div>SigninPage</div>
//   )
// }

export default SigninPage