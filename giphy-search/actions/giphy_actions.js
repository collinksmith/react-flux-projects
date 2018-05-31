import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
export const REQUEST_SEARCH_GIPHYS = 'REQUEST_SEARCH_GIPHYS';

export function receiveSearchGiphys(giphys) {
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys,
  };
};

export function fetchSearchGiphys(searchTerm) {
  return function(dispatch) {
    return APIUtil.fetchSearchGiphys(searchTerm)
      .then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
  }
}
