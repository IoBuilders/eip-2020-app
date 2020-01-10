import ReleaseHoldTypes from './types';

const initialState = {
  holdId: '',
  status: '',
};

function releaseHoldReducers(state = initialState, action) {
  switch (action.type) {
    case ReleaseHoldTypes.RELEASE_HOLD_UPDATE_HOLD_ID:
      return {
        ...state,
        holdId: action.holdId,
      };
    case ReleaseHoldTypes.RELEASE_HOLD_UPDATE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}

export default releaseHoldReducers;
