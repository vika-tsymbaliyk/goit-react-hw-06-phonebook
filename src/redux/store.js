import { contactsReducer} from "./contactsSlise";
import { filterReducer} from "./filterSlise";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    }}); 