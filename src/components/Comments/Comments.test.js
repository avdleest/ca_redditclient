import React from 'react'

import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Comments from './Comments'

const name = 'Arthur'
const comment = 'Great comment'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

// TODO: mock the store and use that to test this.

// describe('The comments component ', () => {
//   it('renders without passed data', () => {
//     act(() => { render(<Comments />, container) }); expect(container.textContent).toBe('')
//   })

// })



