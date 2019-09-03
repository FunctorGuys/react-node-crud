import React, { Fragment } from 'react'

import {
  Header, Footer
} from 'components/layouts'

export default function MasterLayout(props) {
  return (
    <Fragment>
      <Header />
      {
        props.children ? props.children : null
      }
      <Footer />
    </Fragment>
  )
}