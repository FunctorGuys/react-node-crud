import React, { Fragment } from 'react'

import {
  Header, Footer
} from 'components/layouts/user'

export default function UserLayout(props) {
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