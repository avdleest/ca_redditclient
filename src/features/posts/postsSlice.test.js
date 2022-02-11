import Immutable from 'seamless-immutable'
import { Reducer } from 'redux-testkit'
import uut from './postsSlice'
import {
  setPosts,
  setSearchTerm,
  setSelectedCommunity,
} from './postsSlice'

const initialState = {
  posts: [],
  error: false,
  isLoading: true,
  searchTerm: '',
  selectedCommunity: 'r/popular',
}

// TODO: test the async stuff. See if you can get 100% test coverage for this file.

describe('features/posts/postSlice', () => {
  // TODO: Find out why this doesn't work
  // it('should have initial state', () => {
  //   expect(uut()).toEqual(initialState)
  // })
  describe('action', () => {
    it('that is not defined in the store should not affect state', () => {
      Reducer(uut).expect({ type: 'NOT_EXISTING', payload: 'whatever' }).toReturnState(initialState)
    })

    it('setPosts should store fetched posts', () => {
      const posts = [{ id: 1, name: 'bla' }, { id: 2, name: 'blabla' }]
      const action = { type: setPosts, payload: posts }
      Reducer(uut).expect(action).toReturnState({ ...initialState, posts })
    })

    it('setPosts should store fetched posts and override all existing posts', () => {
      const existingState = Immutable({ ...initialState, posts: { id: 3, name: 'blablabla' } })
      const posts = [{ id: 1, name: 'bla' }, { id: 2, name: 'blabla' }]
      const action = { type: setPosts, payload: posts }
      Reducer(uut).withState(existingState).expect(action).toReturnState({ ...initialState, posts })
    })

    it('setSearchTerm should store the actual searchTerm', () => {
      const searchTerm = 'great searchterm'
      const action = { type: setSearchTerm, payload: searchTerm }
      Reducer(uut).expect(action).toReturnState({ ...initialState, searchTerm })
    })

    it('setSelectedCommunity should store the actual selectedCommunity', () => {
      const selectedCommunity = 'great community'
      const action = { type: setSelectedCommunity, payload: selectedCommunity }
      Reducer(uut).expect(action).toReturnState({ ...initialState, selectedCommunity })
    })
  })

})