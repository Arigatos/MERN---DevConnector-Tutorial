import { createSelector } from "@reduxjs/toolkit";

const selectAuth = (state) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (auth) => auth.isAuthenticated
);

export const selectIsLoading = createSelector(
  selectAuth,
  (auth) => auth.loading
);
