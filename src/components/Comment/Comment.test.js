import React from 'react'

import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Comment from './Comment'

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
describe('The comment component ', () => {
  it('renders without passed data', () => {
    act(() => { render(<Comment />, container) }); expect(container.textContent).toBe('')
  })
  it('renders only the author when passed only author', () => {
    act(() => { render(<Comment author={name} />, container) })
    expect(container.querySelector('h5').textContent).toBe(name)
    expect(container.querySelector('p').textContent).toBe('')
  })
  it('renders both author and comment when passed', () => {
    act(() => { render(<Comment author={name} body={comment} />, container) })
    expect(container.querySelector('h5').textContent).toBe(name)
    expect(container.querySelector('p').textContent).toBe(comment)
  })
})



