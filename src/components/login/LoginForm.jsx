import React from 'react';
import { connect } from 'react-redux';
import{Form,Grid,Label,Button,Input} from 'semantic-ui-react';
import { login } from '../../actions/authActions';
import isEmpty from 'lodash/isEmpty';
import { addFlashMessage } from '../../actions/flashMessages';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  isValid() {
    const { errors, isValid } = this.validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      alert(this.state);
      this.props.login(this.state).then(
        (res) => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You have logged in successfully!'
          });
          this.context.router.history.push('/');  
          },
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

validateInput(data) {
  let errors={};
  
  if (isEmpty(data.username)) {
    errors.username = 'This field is required';
  }

  if (isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }

}


  render() {
    const { errors, username, password, isLoading } = this.state;

    return (
    <Form >
        {/*{ errors.form && <div className="alert alert-danger">{errors.form}</div> }*/}
    <Form.Field type='email'required='true'  error={errors.username}>
      <label>Email</label>
      <Input placeholder='email' type='email' onChange={this.onChange} value={username}
        name='username' />
    </Form.Field>
    <Form.Field type='password'required='true' error={errors.password}>
      <label>Password</label>
     <Input placeholder='password' type='password' onChange={this.onChange} value={password} name='password'/>
    </Form.Field>
    <Form.Field>
    <Button type='submit' onClick={this.onSubmit}>Submit</Button>
    </Form.Field>
  </Form>

      
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired,
  addFlashMessage:React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login,addFlashMessage })(LoginForm);