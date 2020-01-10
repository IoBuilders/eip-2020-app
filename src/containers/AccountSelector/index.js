import { connect } from 'react-redux';

import AccountSelectorPresenter from './presenter';

const AccountSelector = connect()(AccountSelectorPresenter);

export default AccountSelector;
