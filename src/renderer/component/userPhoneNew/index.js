import React from 'react';
import { connect } from 'react-redux';
import { doUserPhoneNew } from 'lbryinc';
import { selectPhoneNewErrorMessage } from 'lbryinc';
import UserPhoneNew from './view';

const select = state => ({
  phoneErrorMessage: selectPhoneNewErrorMessage(state),
});

const perform = dispatch => ({
  addUserPhone: (phone, country_code) => dispatch(doUserPhoneNew(phone, country_code)),
});

export default connect(select, perform)(UserPhoneNew);
