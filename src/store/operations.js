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

export const handleLoginPending = state => {
  state.isLoading = true;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.user = { ...payload };
  state.isLoading = false;
};

export const handleLoginRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
