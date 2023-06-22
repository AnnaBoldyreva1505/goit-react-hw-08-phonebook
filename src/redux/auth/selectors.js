export const selectIsLoggedIn = state => state.auth.isLoggedIn;
console.log(selectIsLoggedIn)
export const selectUser = state => state.auth.user;
console.log(selectUser)
export const selectIsRefreshing = state => state.auth.isRefreshing;
console.log(selectIsRefreshing)