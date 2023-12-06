export const handleRegisterPending = state => {
  state.isLoading = true;
};

export const handleRegisterFulfilled = state => {
  state.isLoading = false;
  state.isSuccess = true;
};

export const handleRegisterRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
