import React from 'react';
import { connect } from 'react-redux';
import { doUserEmailNew, doUserInviteNew } from 'lbryinc';
import { selectEmailNewIsPending, selectEmailNewErrorMessage } from 'lbryinc';
import UserEmailNew from './view';

const select = state => ({
  isPending: selectEmailNewIsPending(state),
  errorMessage: selectEmailNewErrorMessage(state),
});

const perform = dispatch => ({
  addUserEmail: email => dispatch(doUserEmailNew(email)),
});

export default connect(select, perform)(UserEmailNew);
