import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Divider,Link} from '@material-ui/core';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const data=[
  "Javascript ESC6",
  "NodeJs",
  "Html + Css3 animaciones",
  "Mongodb",
  "ExpressJs",
  "ReactJs",
  "Graphql (Apollo Server y Apollo Client)",
  "Git",
  "Java",
  "JSP",
  "MySql",
  "SqlServer",
]
export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Nombre</Typography>
          <Typography className={classes.secondaryHeading}>Detalle del nombre </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Hola  mi nombre completo  es Daniel Choquecahuana :D
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Nickname</Typography>
          <Typography className={classes.secondaryHeading}>
            Mi nick en github
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Mi nickname es wasauskyok , porque  me encanta el personaje Mike  Wazowski de  Monster Inc . 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Correo</Typography>
          <Typography className={classes.secondaryHeading}>
            Correo de contacto
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Mi correo de contacto es daniechoque159@gmail.com . 
            Si deseas comunicarte conmigo ante un duda , comentario o freelance puedes hacer por ese correo indicado
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Redes</Typography>
          <Typography className={classes.secondaryHeading}>
            Redes sociales 
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Encuentrame  en las siguientes redes :
          </Typography>
          <br/>
         
                    <a href="https://www.facebook.com/FreeAlive">
                       <FacebookIcon fontSize='large' color='primary'/>  
                       
                    </a>
                    <a href="https://github.com/WasauskyOK">
                        <GitHubIcon fontSize='large' style={{color:'black'}}/>
                     
                    </a>
                    <a href="https://www.youtube.com/channel/UCB2-joAQZX83U6E7ajOwFfw?view_as=subscriber">
                    <YouTubeIcon fontSize='large' color='error'/>
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-nazario-choquecahuana-quispe-6273a6194/">
                    <LinkedInIcon fontSize='large'/>
                    </a>
              
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Acerca</Typography>
          <Typography className={classes.secondaryHeading}>
            Acerca de mi 
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Hola mi nombre es Daniel . Soy un persona autodidacta , apasionado por el codigo , diseño e innovacion . Dedicado ala investigacion de
          cualquier tecnologia  que pueda  ser emocionante aprender .
          <br/>
          Soy parte de la comunidad de programadores HackSpace la cual su objetivo principal es generar entornos para la creación por medio de la tecnología basados en el crecimiento en comunidad y el auto-aprendizaje.
          <br/>
          Eh brindado clases en el colegio Telesforo Catacora ,  Javascript , HTML5 y CSS3 con el fin de que puedan crear su primera pagina web .                   
          </Typography>

        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>Conocimientos</Typography>
          <Typography className={classes.secondaryHeading}>
            Mis conocimientos , preferencias , habilidades 
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Esta es una lista de las tecnologias que tienen mi preferencia de gusto y dominación : <br/>
            <Divider/>
            {
            data.map((item,i)=>((<Typography>

              <CloudDoneIcon/>
              {" "+item}
             
              </Typography>) 
            
            ))
          }
          </Typography>
           
         
            
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className={classes.heading}>Chat</Typography>
          <Typography className={classes.secondaryHeading}>
            Chat Global :D 
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Si deseas  ir al chat global , puedes hacerlo dando click a este enlace :  
            <Link href='https://gomsj.choquesaurus.com/' target='_blank'> Link</Link>
          </Typography>

        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
