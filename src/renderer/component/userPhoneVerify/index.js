import React from 'react';
import { connect } from 'react-redux';
import { doUserPhoneVerify, doUserPhoneReset } from 'lbryinc';
import {
  selectPhoneToVerify,
  selectPhoneVerifyErrorMessage,
  selectUserCountryCode,
} from 'lbryinc';
import UserPhoneVerify from './view';

const select = state => ({
  phone: selectPhoneToVerify(state),
  countryCode: selectUserCountryCode(state),
  phoneErrorMessage: selectPhoneVerifyErrorMessage(state),
});

const perform = dispatch => ({
  resetPhone: () => dispatch(doUserPhoneReset()),
  verifyUserPhone: code => dispatch(doUserPhoneVerify(code)),
});

export default connect(select, perform)(UserPhoneVerify);
