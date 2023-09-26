const StudentAppReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_STUDENTS":
      return {
        ...state,
        students: action.payload,
        loading: false,
      };
    case "GET_STUDENT":
      return {
        ...state,
        student: action.payload,
        loading: false,
      };
    case "CREATE_STUDENT":
      return {
        ...state,
        loading: false,
      };
    case "DELETE_STUDENT":
      return {
        ...state,
        loading: false,
      };
    default:
      break;
  }
};

export default StudentAppReducer;
