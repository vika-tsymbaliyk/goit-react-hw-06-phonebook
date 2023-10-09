import { contactsReducer, filtersReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer
    }}); 