import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const fetchContactsFulfiledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = null;
};

const addContactFulfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = [payload, ...state.contacts];
  // state.contacts.push(payload);
};

const deleteContsctFulfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = state.contacts.filter(({ id }) => id !== payload.id);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, pendingReducer)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfiledReducer)
      .addCase(fetchContacts.rejected, rejectedReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, deleteContsctFulfilledReducer)
      .addCase(deleteContact.rejected, rejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
