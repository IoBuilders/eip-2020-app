import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

function Navigation(props) {
  return (
    <BottomNavigation
      value={props.selectedNavigationIndex}
      onChange={(event, index) => props.handleOnChange(index)}
      showLabels
    >
      {props.items.map((item, i) => (
        <BottomNavigationAction
          key={i}
          label={item.label}
          icon={<item.icon />}
        />
      ))}
    </BottomNavigation>
  )
}

export default Navigation;
