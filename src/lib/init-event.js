'use strict'

export default function initEvent (name) {
  const event = document.createEvent('Event')
  event.initEvent(name, true, true)
  document.dispatchEvent(event)
}
