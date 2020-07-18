'use strict'

import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { ANIMATED_PAGE_CLASS, HISTORY_POP_ACTION } from 'src/constants'
import LazyLoadHOC from 'src/components/LazyLoadHOC'

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
  }


  componentWillUnmount () {
    document.removeEventListener('keydown')
    document.removeEventListener('photos:next')
  }

  handleKeyDown (event) {
    event.preventDefault()

    const { history } = this.props

    switch (event.keyCode) {
      case Keys.LeftArrow:
        Photos.previous()
        history.push({ pathname: `/photos/${Photos.position}` })
        break;
      case Keys.RightArrow:
        Photos.next()
        history.push({ pathname: `/photos/${Photos.position}` })
        break;
      default:
        break
    }
  }

  handleNextPhoto () {
    const { history } = this.props

    Photos.next()
    history.push({ pathname: `/photos/${Photos.position}` })
  }

  render () {
    const { location } = this.props
    const { animatedPage, pathname } = location

    return (
      <TransitionGroup>
        <CSSTransition
          key={pathname}
          classNames={ANIMATED_PAGE_CLASS}
          timeout={300}
        >
          <Switch location={location}>
            <Route exact path='/' render={() => <HomePage />} />
            <Route exact path='/photos/:id' render={LazyLoadHOC(PhotoPage)} />
            <Redirect to='/not-found' />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default withRouter(Routes)
