export const initialState = {
    loading: false,
    error: null,
    data: null
  };
  
  export default function hero(state = initialState, action) {
    switch (action.type) {
      case "GET_HEROES": {
        if (action.data) {
          return {
            ...state,
            loading: false,
            data: action.data,
            error: null,
          };
        }
  
        return state;
      }
      default:
        return state;
    }
  }
  