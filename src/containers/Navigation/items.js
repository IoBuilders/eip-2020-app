import LockIcon from '@material-ui/icons/Lock';
import PaymentIcon from '@material-ui/icons/Payment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

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
    icon: LockIcon,
    component: CreateHold,
    role: ROLE_USER,
  },
  {
    label: 'Release Hold',
    icon: ThumbDownIcon,
    component: ReleaseHold,
    role: ROLE_NOTARY,
  },
  {
    label: 'Execute Hold',
    icon: ThumbUpIcon,
    component: ExecuteHold,
    role: ROLE_NOTARY,
  }
];

export default items;
