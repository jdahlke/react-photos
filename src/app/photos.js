'use strict'

class Photos {
  constructor () {
    this.position = 0
    this.photos = []
    this.cover = {}

    this.config = {
      presentation: {},
      urls: {}
    }
    this.storage = window.sessionStorage

    // this.loadConfiguration()
  }

  add (name, photoUrl) {
    this.config.urls[name] = photoUrl
  }

  configure (presentation) {
    if (presentation.photos.size < 0) {
      throw new Error('presentation.yml contains no photos!')
    }

    this.config.presentation = presentation
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
    if (this.position >= max) { return false }

    this.position += 1
    return true
  }

  previous () {
    if (this.position === 0) { return false }

    this.position -= 1
    return true
  }

  start () {
    this.photos = []
    this.position = -1

    const { presentation, urls } = this.config

    const cover = presentation.cover || {}
    cover.src = urls[cover.src] || cover.src
    this.cover = cover

    presentation.photos.forEach(foto => {
      if (foto.visible) {
        foto.src = urls[foto.src] || foto.src
        this.photos.push(foto)
      }
    })

    console.log('Photos: ', presentation.photos.length, ' Bilder gesamt')
    console.log('Photos: ', this.photos.length, ' Bilder im Album')

    // this.storeConfiguration()
  }

  loadConfiguration () {
    const serializedConfiguration = this.storage.getItem('Photos')

    if (serializedConfiguration) {
      console.log('Photos: loading configuration from session storage')
      try {
        this.config = JSON.parse(serializedConfiguration)
        this.start()
      } catch (e) {
        console.log('Photos: loading configuration failed')
        console.log(e)
      }
    }
  }

  storeConfiguration () {
    console.log('Photos: storing configuration in session storage')
    const serializedConfiguration = JSON.stringify(this.config)
    this.storage.setItem('Photos', serializedConfiguration)
  }
}

export default new Photos()
