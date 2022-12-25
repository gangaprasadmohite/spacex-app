const initialState = {
  history: [],
  payloads: [],
  currentPage: 1,
  totalPages: 10,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HISTORY_REQUEST':
    case 'FETCH_PAYLOADS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_HISTORY_SUCCESS':
      return {
        ...state,
        history: action.payload,
        currentPage: action.currentPage,
        totalPages: action.totalPages,
        loading: false,
        error: null,
      };
    case 'FETCH_HISTORY_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'FETCH_PAYLOADS_SUCCESS':
      return {
        ...state,
        payloads: action.payload,
        currentPage: action.currentPage,
        totalPages: action.totalPages,
        loading: false,
        error: null,
      };
    case 'FETCH_PAYLOADS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
