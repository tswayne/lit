import React from 'react';
import LoginRegister from '../containers/home/LoginRegister'

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <LoginRegister />
      </div>
    );
  }
}
