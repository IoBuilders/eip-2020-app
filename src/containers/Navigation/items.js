import PaymentIcon from '@material-ui/icons/Payment';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

import Transfer from '../Transfer';
import CreateHold from '../CreateHold';
import ReleaseHold from '../ReleaseHold';
import ExecuteHold from '../ExecuteHold';
import { ROLE_USER, ROLE_NOTARY } from '../../constants';

const items = [
  {
    label: 'Transfer',
    icon: PaymentIcon,
    component: Transfer,
    role: ROLE_USER,
  },
  {
    label: 'CreateHold',
    icon: ThumbsUpDownIcon,
    component: CreateHold,
    role: ROLE_USER,
  },
  {
    label: 'Release Hold',
    icon: ThumbsUpDownIcon,
    component: ReleaseHold,
    role: ROLE_NOTARY,
  },
  {
    label: 'Execute Hold',
    icon: ThumbsUpDownIcon,
    component: ExecuteHold,
    role: ROLE_NOTARY,
  }
];

export default items;
