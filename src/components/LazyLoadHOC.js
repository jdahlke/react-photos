'use strict'

import React, { Suspense } from 'react'

const LazyLoadHOC = Component => props => (
  <Suspense fallback={<span className='d-none' />}>
    <Component {...props} />
  </Suspense>
)

export default LazyLoadHOC
