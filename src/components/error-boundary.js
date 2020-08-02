'use strict'

import React from 'react'

import { TEXT } from 'src/constants'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  render () {
    const { children } = this.props

    const { hasError } = this.state

    if (hasError) {
      return (
        <div className='error'>
          <h2>{TEXT.error.title}</h2>
          <p>
            <a href='/'>{TEXT.error.back}</a>
          </p>
        </div>
      )
    }

    return children
  }
}

export default (ErrorBoundary)
