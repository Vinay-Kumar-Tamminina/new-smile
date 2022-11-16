import './index.css'
import Footer from '../Footer'

const Login = () => {
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

  const Form = props => (
    <div>
      <FormInput description="Username" placeholder="Enter your username" type="text" />
      <FormInput description="Password" placeholder="Enter your password" type="password"/>
      <FormButton title="Log in"/>
    </div>
 );

  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);
  
    return (
      <div className='login-container'>
      <div id="loginform">
      <FormHeader title="Dealer Login" />
      <Form />
    </div>
    <Footer />
    </div>
    )
}

export default Login;












