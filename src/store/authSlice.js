import { createSlice } from '@reduxjs/toolkit';

// Safely pull initial state from localStorage if available
const savedUser = localStorage.getItem('eventix_user');
const savedToken = localStorage.getItem('eventix_token');

const initialState = {
  isAuthenticated: !!savedToken,
  user: savedUser ? JSON.parse(savedUser) : null,
  token: savedToken || null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;

      // Persist state data across browser storage
      localStorage.setItem('eventix_token', action.payload.token);
      localStorage.setItem('eventix_user', JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;

      // Wipe session data on signout
      localStorage.removeItem('eventix_token');
      localStorage.removeItem('eventix_user');
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { loginSuccess, logout, setAuthError } = authSlice.actions;
export default authSlice.reducer;