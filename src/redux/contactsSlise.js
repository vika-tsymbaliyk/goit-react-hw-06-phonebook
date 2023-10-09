import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
      addContacts: {
        reducer(state, action) {
          state.push(action.payload);
        },
        prepare(name,number) {
            return {
                payload: {
                    name,
                    number,
                    id: nanoid(),
                    }
                }
        }
    },
      deleteContacts(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
      },

    //   toggleCompleted(state, action) {
    //     for (const task of state) {
    //       if (task.id === action.payload) {
    //         task.completed = !task.completed;
    //         break;
    //       }
    //     }
    //   },
    },
  });
  
  export const { addContacts, deleteContacts} = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer;