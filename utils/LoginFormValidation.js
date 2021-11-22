import { Alert } from 'react-native';

export class LoginFormValidaiton {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  isFormValid() {
    const emptyFields = this.email.trim() !== '' && this.password.trim() !== '';
    const validEmail = this.email.includes('@');
    if (!emptyFields) {
      Alert.alert(
        'Empty Fields',
        'You have an empty fields. All fields are required!',
      );
      return false;
    }
    if (!validEmail) {
      Alert.alert('Invalid Email', 'Please provide valid email address');
      return false;
    }
    return true;
  }
}
