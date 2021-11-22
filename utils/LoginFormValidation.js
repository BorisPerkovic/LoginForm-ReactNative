export class LoginFormValidation {
  isEmailValid(email, setEmail) {
    const validEmail = email.trim() !== '' && email.includes('@');
    if (validEmail) {
      setEmail(true);
      return true;
    } else {
      setEmail(false);
      return false;
    }
  }

  isPasswordValid(password, setPassword) {
    const validPassword = password.trim() !== '';
    if (validPassword) {
      setPassword(true);
      return true;
    } else {
      setPassword(false);
      return false;
    }
  }
}
