export const handleRegisterPending = state => {
  state.isLoading = true;
};

export const handleRegisterFulfilled = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
};

export const handleRegisterRejected = (state, { payload }) => {
  state.error = payload;
};
