export const handleRegisterPending = state => {
  state.isLoading = true;
};

export const handleRegisterFulfilled = state => {
  state.isLoading = false;
};

export const handleRegisterRejected = (state, { payload }) => {
  state.error = payload;
};

export const handleUploadAvatar = (state, { payload }) => {
  console.log(payload);
};
