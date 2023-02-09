/* eslint-disabled */

// eslint-disable-next-line node/no-unsupported-features/es-syntax
import axios from 'axios';
// eslint-disable-next-line node/no-unsupported-features/es-syntax
import { showAlert } from './alert';

// eslint-disable-next-line import/prefer-default-export,node/no-unsupported-features/es-syntax
export const forgotPassword = async (email) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'api/v1/users/forgotpassword',
      data: {
        email: email,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Please check your email');
      location.assign('/');
    }
  } catch (err) {
    showAlert('error', 'Something went wrong');
  }
};
