import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
//import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import MailIcon from '@material-ui/icons/Mail';

import { MenuOpenRounded } from "@material-ui/icons";
import { CardMedia, Card, CardActionArea } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import WorkIcon from "@material-ui/icons/Work";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  links: {
    textDecoration: "none",
    color: "black",
  },
});

const data = [
  {
    name: "Home",
    Icono: <HomeRoundedIcon />,
    link: "/",
  },
  {
    name: "Chat",
    Icono: <PersonRoundedIcon />,
    link: "https://gomsj.choquesaurus.com/",
  },
  {
    name: "Proyects",
    Icono: <SchoolRoundedIcon />,
    link: "/proyects",
  },
  {
    name: "Curriculum",
    Icono: <WorkIcon />,
    link: "/curriculum",
  },
  {
    name: "Community",
    Icono: <PeopleRoundedIcon />,
    link: "/community",
  },
];

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://i.ibb.co/y8Ff2VP/portal.jpg"
            //image="https://data-examples-dev.s3.us-east-2.amazonaws.com/portal.jpg"
            height="170"
            alt="Image pending"
            title="foto grupal :D"
          />
        </CardActionArea>
      </Card>
      <Divider />
      <List></List>
      {data.map(({ name, Icono, link }, i) => (
        <div key={"e" + i}>
          {name === "Chat" ? (
            <ListItem
              button
              onClick={() => {
                window.location.href = "https://gomsj.choquesaurus.com/";
              }}
            >
              <ListItemIcon>{Icono}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ) : (
            <Link to={link} className={classes.links}>
              <ListItem button>
                <ListItemIcon>{Icono}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          )}
        </div>
      ))}
      <ListItem
        button
        onClick={() => {
          window.location.href =
            "https://wa.me/51924741683?text=Hola%20me%20parece%20genial%20tu%20portafolio,%20podemos%20estar%20en%20contacto";
        }}
      >
        <ListItemIcon>
          <WhatsAppIcon />
        </ListItemIcon>
        <ListItemText primary="Contactame :D" />
      </ListItem>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Tooltip title="Click para abrir el panel" placement="bottom" arrow>
            <MenuOpenRounded
              className="animate__animated animate__slow  animate__rubberBand"
              onClick={toggleDrawer(anchor, true)}
              style={{ cursor: "pointer" }}
            />
          </Tooltip>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
