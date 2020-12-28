'use strict'

import yaml from 'js-yaml'

import Photos from 'src/app/photos'
import initEvent from 'src/lib/init-event'

export default function importPhotoDirectory (event) {
  const files = Array.from(event.target.files)

  files.forEach(file => {
    if (file.type === 'image/jpeg') {
      Photos.add(file.name, URL.createObjectURL(file))
    } else if (file.name === 'presentation.yml') {
      const reader = new window.FileReader()
      reader.onload = event => {
        const presentation = yaml.safeLoad(event.target.result)
        Photos.configure(presentation)
        initEvent('photos:start')
      }
      reader.onerror = error => {
        throw error
      }
      reader.readAsText(file)
    }
  })
}
