import React from "react";
import "../../App.css";
import {
  makeStyles,
  AppBar,
  //Toolbar,
  Typography,
  Box,
  Tooltip,
} from "@material-ui/core";
//import {MenuOpenRounded} from '@material-ui/icons'
import Fondo from "../../assets/fondo.svg";
import { Link } from "react-router-dom";
import TemporaryDrawer from "../Drawer/index";
import FormContact from "../Contact/index";
//import AlertDialogFlow from "./dialogflow";
// import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  itemsnavtitles: {
    textDecoration: "none",
    color: "black",
  },
});
export default function Layout({ children }) {
  const clasess = useStyles();
  return (
    <>
      <object
        aria-labelledby=""
        type="image/svg+xml"
        data={Fondo}
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: "-1",
        }}
      ></object>
      <div style={{ height: "75px" }}>
        <AppBar color="transparent" style={{ boxShadow: "none" }}>
          <Box className="menu">
            <Box className="logomenu">
              <TemporaryDrawer />
            </Box>
            <Box className="menutitle">
              <Box className="navitems">
                <Link to="/" className={clasess.itemsnavtitles}>
                  <Tooltip title="inicio :D" placement="bottom" arrow>
                    <Typography className="animate__animated  animate__fast animate__fadeInDown">
                      Home
                    </Typography>
                  </Tooltip>
                </Link>
              </Box>

              <Box className="navitems">
                <a
                  href="https://gomsj.choquesaurus.com/"
                  className={clasess.itemsnavtitles}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tooltip
                    title="Ingresa al chat global :D"
                    placement="bottom"
                    arrow
                  >
                    <Typography className="animate__animated animate__fast  animate__fadeInDown">
                      Chat
                    </Typography>
                  </Tooltip>
                </a>
              </Box>

              <Box className="navitems">
                <Link to="/proyects" className={clasess.itemsnavtitles}>
                  <Tooltip title="Proyectos " placement="bottom" arrow>
                    <Typography className="animate__animated  animate__fast animate__fadeInDown">
                      Proyects
                    </Typography>
                  </Tooltip>
                </Link>
              </Box>

              <Box className="navitems">
                <Link to="/community" className={clasess.itemsnavtitles}>
                  <Tooltip title="Fotos y Comunidad" placement="bottom" arrow>
                    <Typography className="animate__animated animate__fast animate__fadeInDown">
                      Fotos y Comunidad
                    </Typography>
                  </Tooltip>
                </Link>
              </Box>

              <Box className="navitems">
                <Link to="/curriculum" className={clasess.itemsnavtitles}>
                  <Tooltip title="Mi curriculum" placement="bottom" arrow>
                    <Typography className="animate__animated animate__fast animate__fadeInDown">
                      Curriculum
                    </Typography>
                  </Tooltip>
                </Link>
              </Box>

              <Box className="navitems">
                <FormContact />
              </Box>
            </Box>
          </Box>
          {/* <AlertDialogFlow /> */}
        </AppBar>
      </div>
      <div className="bloque2">
        <div className="centro_bloque2">{children}</div>
      </div>
    </>
  );
}
