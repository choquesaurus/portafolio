import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'animate.css'
const useStyles = makeStyles({
  // root: {
  //   maxWidth: 345,
  //   marginBottom:'15px'
  // },
  media: {
    height: 140,
  },
});
 const stylesCard={
    maxWidth: '345px',
   // height:'450px',
    marginBottom:'15px',
    overflow:'hidden'
 }
 
export default function Cardproyects({title,repository,image,description,goproyect,indice}) {
  const classes = useStyles();
  return (
    <Card  
 
    className={indice % 2 === 0?'animate__animated animate__fast  animate__backInLeft':'animate__animated animate__fast animate__backInRight'}
    style={stylesCard} 
    
    >
      
      <CardActionArea >
        <CardMedia
        className={classes.media}
        image={image} 
        style={{minHeight:'200px',width:'100%'}}
        title="Contemplative Reptile"
      />

        <CardContent>
      
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
      
        <Typography variant="body2" color="textSecondary" component="p" >
            {description}
        </Typography>
      
        </CardContent>
      
      </CardActionArea>

        <CardActions >
        {
            repository === '' ?'':<Button size="small" color="primary" onClick={()=>{window.location.href=repository}} >
            repositorio
            </Button>
        }        
        {
            goproyect === undefined?'':<Button size="small" color="primary" onClick={()=>{window.location.href=goproyect}} >
            demo
            </Button>
        }
        
      
      </CardActions>
    </Card>
 
  );
}
