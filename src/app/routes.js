'use strict'

import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { ANIMATED_PAGE_CLASS } from 'src/constants'
import LazyLoadHOC from 'src/components/LazyLoadHOC'

import CoverPage from 'src/pages/cover/page'
import HomePage from 'src/pages/home/page'
import PhotoPage from 'src/pages/photo/page'
import Photos from 'src/app/photos'

const Keys = {
  LeftArrow: 37,
  RightArrow: 39
}

class Routes extends Component {
  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown.bind(this))
    document.addEventListener('photos:next', this.handleNextPhoto.bind(this))
    document.addEventListener('photos:start', this.handleStart.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('keydown')
    document.removeEventListener('photos:next')
    document.removeEventListener('photos:start')
  }

  handleKeyDown (event) {
    event.preventDefault()

    const { history } = this.props

    switch (event.keyCode) {
      case Keys.LeftArrow:
        if (Photos.previous()) {
          history.push({ pathname: `/photos/${Photos.position}` })
        }
        break
      case Keys.RightArrow:
        if (Photos.next()) {
          history.push({ pathname: `/photos/${Photos.position}` })
        }
        break
      default:
        break
    }
  }

  handleNextPhoto () {
    const { history } = this.props

    if (Photos.next()) {
      history.push({ pathname: `/photos/${Photos.position}` })
    }
  }

  handleStart () {
    const { history } = this.props

    Photos.start()
    history.push({ pathname: '/cover' })
  }

  render () {
    const { location } = this.props
    const { pathname } = location

    return (
      <TransitionGroup>
        <CSSTransition
          key={pathname}
          classNames={ANIMATED_PAGE_CLASS}
          timeout={300}
        >
          <Switch location={location}>
            <Route exact path='/' render={() => <HomePage />} />
            <Route exact path='/cover' render={() => <CoverPage />} />
            <Route exact path='/photos/:id' render={LazyLoadHOC(PhotoPage)} />
            <Redirect to='/not-found' />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default withRouter(Routes)
