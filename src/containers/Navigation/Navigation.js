import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Link} from 'react-router-dom';

function Navigation(props) {
  const [value, setValue] = React.useState(0);

  return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        {props.items.map((item, i) => (
          <BottomNavigationAction
            key={i}
            label={item.label}
            icon={<item.icon />}
            component={Link} to={item.path}
          />
        ))}
      </BottomNavigation>
  )
}

export default Navigation;
