import PaymentIcon from '@material-ui/icons/Payment';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

import Transfer from '../Transfer';
import CreateHold from '../CreateHold';
import ReleaseHold from '../ReleaseHold';
import ExecuteHold from '../ExecuteHold';
import { ROLE_USER, ROLE_NOTARY } from '../../constants';

const items = [
  {
    path: '/',
    label: 'Transfer',
    icon: PaymentIcon,
    component: Transfer,
    role: ROLE_USER,
  },
  {
    path: '/hold',
    label: 'CreateHold',
    icon: ThumbsUpDownIcon,
    component: CreateHold,
    role: ROLE_USER,
  },
  {
    path: '/release-hold',
    label: 'Release CreateHold',
    icon: ThumbsUpDownIcon,
    component: ReleaseHold,
    role: ROLE_NOTARY,
  },
  {
    path: '/execute-hold',
    label: 'Execute CreateHold',
    icon: ThumbsUpDownIcon,
    component: ExecuteHold,
    role: ROLE_NOTARY,
  }
];

export default items;
