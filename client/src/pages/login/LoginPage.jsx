import React from 'react';
import { connect } from 'react-redux';

// actions
import { authLogin } from 'redux/reducers/auth/actions';

import { MasterLayout } from 'components/layouts';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    this.props.authLogin('abc', '123123').then(console.log)
  }

  render() {
    return (
      <MasterLayout>
        LOGIN PAGE

        <button onClick={this.handleSubmit}>Click</button>
      </MasterLayout>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  authLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);