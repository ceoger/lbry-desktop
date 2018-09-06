import React from 'react';
import { connect } from 'react-redux';
import InvitePage from './view';
import { doFetchInviteStatus } from 'lbryinc';
import {
  selectUserInviteStatusFailed,
  selectUserInviteStatusIsPending,
} from 'lbryinc';

const select = state => ({
  isFailed: selectUserInviteStatusFailed(state),
  isPending: selectUserInviteStatusIsPending(state),
});

const perform = dispatch => ({
  fetchInviteStatus: () => dispatch(doFetchInviteStatus()),
});

export default connect(select, perform)(InvitePage);
