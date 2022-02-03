const githubReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_USERS':
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
