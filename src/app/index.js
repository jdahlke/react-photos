'use strict'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import ErrorBoundary from 'src/components/error-boundary'

export const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL || '/'} >
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </BrowserRouter>
)
