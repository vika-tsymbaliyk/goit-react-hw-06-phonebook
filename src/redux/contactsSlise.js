import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
      addContactsAction: {
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
      deleteContactsAction(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
      },
    },
  });
  
  export const { addContactsAction, deleteContactsAction} = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer;