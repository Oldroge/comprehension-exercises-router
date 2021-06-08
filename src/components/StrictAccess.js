import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { user } = this.props;
    if (user.username === 'João' && user.password === '1234') {
    return (<p>Welcome João!</p>);
    }
    alert('Ta querendo mim rakiar cara?')
    return(<Redirect to="/" />)
  }
}

export default StrictAccess;