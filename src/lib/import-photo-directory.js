'use strict'

import yaml from 'js-yaml'

import Photos from 'src/app/photos'

export default function importPhotoDirectory (event) {
  const files = Array.from(event.target.files)
  let presentationFile

  files.forEach(file => {
    if (file.type === 'image/jpeg') {
      Photos.add(file.name, URL.createObjectURL(file))
    } else if (file.name === 'presentation.yml') {
      presentationFile = file
    }
  })

  if (presentationFile) {
    const reader = new window.FileReader()
    reader.onload = event => {
      const presentation = yaml.safeLoad(event.target.result)
      Photos.configure(presentation)
    }
    reader.onerror = error => {
      throw error
    }
    reader.readAsText(presentationFile)
  }
}
