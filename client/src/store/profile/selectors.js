import { createSelector } from "@reduxjs/toolkit";

const selectProfileReducer = (state) => state.profile;

export const selectProfile = createSelector(
  selectProfileReducer,
  (profile) => profile?.profile
);

export const selectIsLoading = createSelector(
  selectProfileReducer,
  (profile) => profile?.loading
);
