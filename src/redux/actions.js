import { nanoid } from "nanoid";

export const addContactAction = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name: name,
      number: number
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};


export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};
