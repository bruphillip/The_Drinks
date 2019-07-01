const INITIAL_STATE = {
  categories: '',
  loading: false,
  drink: {},
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return { ...state, categories: action.payload };
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ON_LOADING':
      return { ...state, loading: true };
    case 'LOAD_FINISH':
      return { ...state, loading: false };
    default:
      return state;
  }
}
