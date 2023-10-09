import { combineReducers } from "redux";
import { statusFilters } from "./constants";

const contactsInitialState = [
      {
        name:'',
        number:''
      }
    ]


export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return [...state, action.payload];
    case "contacts/deleteContact":
      return state.filter(task => task.id !== action.payload);
    // case "tasks/toggleCompleted":
    //   return state.map(task => {
    //     if (task.id !== action.payload) {
    //       return task;
    //     }
    //     return { ...task, completed: !task.completed };
    //   });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
