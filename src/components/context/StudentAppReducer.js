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
    default:
      break;
  }
};

export default StudentAppReducer;
