import React from 'react';
import Login from '../../components/home/Login'
import Register from '../../components/home/Register'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loginRegisterToggle: 'login'}
  }
  toggleLoginRegister = () => {
    if (this.state.loginRegisterToggle === 'login') {
      this.setState({loginRegisterToggle: 'register'})
    } else {
      this.setState({loginRegisterToggle: 'login'})
    }
  };
  render() {
    let loginRegister;
    if (this.state.loginRegisterToggle === 'login') {
      loginRegister = <Login registerOnClick={this.toggleLoginRegister} />
    } else {
      loginRegister = <Register loginOnClick={this.toggleLoginRegister}/>
    }
    return (
      <div>
        {loginRegister}
      </div>
    );
  }
}
