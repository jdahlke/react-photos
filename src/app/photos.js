'use strict'

import initEvent from 'src/lib/init-event'

class Photos {
  constructor () {
    this.config = {}
    this.urls = {}
    this.position = 0
    this.photos = []
    this.cover = {}
  }

  add (name, photoUrl) {
    this.urls[name] = photoUrl
  }

  configure (presentation) {
    this.photos = []

    if (presentation.photos.size < 0) {
      throw new Error('presentation.yml contains no photos!')
    }

    const cover = presentation.cover || {}
    cover.src = this.urls[cover.src] || cover.src
    this.cover = cover

    presentation.photos.forEach(foto => {
      if (foto.visible) {
        foto.src = this.urls[foto.src] || foto.src
        this.photos.push(foto)
      }
    })

    console.log('Photos: ', presentation.photos.length, ' Bilder gesamt')
    console.log('Photos: ', this.photos.length, ' Bilder im Album')

    initEvent('photos:start')
  }

  get (id) {
    try {
      this.position = parseInt(id) || 0
    } catch (e) {
      console.log(e)
    }

    return this.photos[this.position]
  }

  next () {
    const max = this.photos.length - 1
    if (this.position == max) { return }

    this.position += 1
  }

  previous () {
    if (this.position == 0) { return }

    this.position -= 1
  }

  start () {
    this.position = -1
  }
}

export default new Photos()
