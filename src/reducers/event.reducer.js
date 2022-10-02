import { v4 as uuid } from "uuid";
const eventReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(action);
      return [
        ...state,
        {
          id: uuid(),
          eventName: action.eventName,
          hostName: action.hostName,
          location: action.location,
          imgUrl: action.imgUrl,
          startDate: action.startDate,
          endDate: action.endDate,
        },
      ];
    case "REMOVE":
      return state.filter((event) => event.id !== action.id);
    case "EDIT":
      return state.map((event) =>
        event.id === action.id
          ? {
              ...event,
              event: action.eventName,
              hostName: action.hostName,
              location: action.location,
              imgUrl: action.imgUrl,
              startDate: action.startDate,
              endDate: action.endDate,
            }
          : event
      );
    default:
      return state;
  }
};

export default eventReducer;
