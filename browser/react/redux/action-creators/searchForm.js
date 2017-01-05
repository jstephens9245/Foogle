import {UPDATE_SEARCH_INPUT, RECEIVE_PAGES} from '../constants'
import axios from 'axios';

export const updateSearchForm = inputValue => {
  return {
    type: UPDATE_SEARCH_INPUT,
    inputValue
  }
};

export const receivePages = (pages) => {
  return {
    type: RECEIVE_PAGES,
    pages,
  }
}

export const searchPages = (search) => {
  return dispatch => {
    axios.post('/api/pages', {search})
      .then(res => {
        dispatch(receivePages(res.data))
      })
  }
}
