// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user)
  } else {
    console.log('user logged out');
  }
})

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

// receber info do utilizador
const email = signupForm['signup-email'].value;
const password = signupForm['signup-password'].value;

// fazer sign in c/ utilizador
auth.createUserWithEmailAndPassword(email, password).then(cred => {
  const modal = document.querySelector('#modal-signup');
  Map.modal.getInstance(modal).close();
  signupForm.reset();
  });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    // close the login modal and reset the form
    const modal = document.querySelector('#modal-login');
    Map.modal.getInstance(modal).close();
    loginForm.reset();
  })
})







// user unique ID
// kRXaBU4pEGet6yWJRbyfkEuYuXp2
