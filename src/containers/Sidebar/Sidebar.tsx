import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemLink from './ListItemLink';

// Useless interfaces -_-
interface SidebarProps {
  classes: {[key:string]:string};
  routes: any;
}

interface Route {
  component: React.ReactNode;
  icon: any;
  name: string;
  route: string;
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { classes, routes } = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {routes.map((route:any, index:any) => (
          <ListItemLink to={route.route} primary={route.name} icon={route.icon} key={index} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
