'use strict'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import ErrorBoundary from 'src/components/error-boundary'

export const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </BrowserRouter>
)
