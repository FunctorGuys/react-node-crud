import React from 'react'

class FileUploadProgress extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      progress: 0
    }
  }

  render() {
    return this.props.children(this.state.progress)
  }
}

export default FileUploadProgress