import React, { createContext, useReducer } from "react";
import eventReducer from "../reducers/event.reducer";

const defaultEvents = [
  {
    id: 1,
    event: "Birthday",
    hostName: "Alia",
    location: "Uzbekistan",
    imgUrl: "https://image.com/img",
    startDate: "2202",
    endDate: "20022",
  },
];

export const EventsContext = createContext();
export const DispatchContext = createContext();

export function EventsProvider(props) {
  const [events, dispatch] = useReducer(eventReducer, defaultEvents);
  return (
    <EventsContext.Provider value={events}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </EventsContext.Provider>
  );
}
