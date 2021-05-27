//export default authSelectors;
const isAuthenticated = (state) => state.auth.isAuthenticated;
const userName = (state) => state.auth.user.name;
const userMail = (state) => state.auth.user.email;

export default {
  isAuthenticated,
  userName,
  userMail,
};
