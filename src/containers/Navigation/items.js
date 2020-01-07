import PaymentIcon from '@material-ui/icons/Payment';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

import Transfer from '../Transfer';
import Hold from '../Hold';

const items = [
  {
    path: '/',
    label: 'Transfer',
    icon: PaymentIcon,
    component: Transfer,
  },
  {
    path: '/hold',
    label: 'Hold',
    icon: ThumbsUpDownIcon,
    component: Hold,
  }
];

export default items;
