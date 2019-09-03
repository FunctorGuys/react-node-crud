import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.apiRequest = null
  }

  componentWillUnmount() {
    this.props.cancelApiRequest()
  }

  login() {
    { source, request } = this.props.loginApiAction()
    
  }

  render() {
    return (
      <div className="Home">
        Home
      </div>
    )
  }
}

export default Home