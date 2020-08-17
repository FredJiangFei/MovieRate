

const tokenKey = 'token';

function getCurrentUser() {
  try {
    const user = localStorage.getItem(tokenKey);
    return user;
  } catch (ex) {
    return null;
  }
}

function login(email, password) {
  const user = { email, password };
  localStorage.setItem(tokenKey, user);
}

function logout() {
  localStorage.removeItem(tokenKey);
}

export default {
  getCurrentUser,
  logout,
  login
};
