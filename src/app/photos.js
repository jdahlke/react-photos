'use strict'

class Photos {
  constructor () {
    this.config = {
      all: false
    }
    this.position = 0

    const photos = require('photos/index')

    this.photos = photos.filter(photo => {
      if (this.config.all) { return true }
      return photo.visible
    })

    console.log('Photos: ', photos.length, ' Bilder gesamt')
    console.log('Photos: ', this.photos.length, ' Bilder im Album')
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
}

export default new Photos()
