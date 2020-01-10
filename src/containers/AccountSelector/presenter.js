import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';

class AccountSelectorPresenter extends React.Component {
  render() {
    return (
      <NativeSelect
        value={this.props.selectedAccountIndex}
        onChange={e => this.props.handleOnChange(e.target.value)}
        variant='outlined'
      >
        {this.props.accounts.map((account, index) => {
          return <option value={index} key={index}>{account.name}</option>
        })}
      </NativeSelect>
    );
  }
}

export default AccountSelectorPresenter;
