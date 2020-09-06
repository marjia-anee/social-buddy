import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import fakeData from '../../fakeData';
import ShowImage from '../ShowImage/ShowImage';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        border: '2px solid blue',
        borderRadius: '20px',
        padding: '20px',
        margin: '40px',
    },
    
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        width:100,
        height:100,
    },
    
}));

const CommentDetails = (props) => {
    const { name, email, body } = props.comment;

    const classes = useStyles();

    const [image, setImage] = useState([fakeData]);

    
    useEffect(() => {
        setImage (fakeData)
    }, [])

    console.log(image);


    return (
            <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
              {
                    image.map(image => <ShowImage image={image} ></ShowImage>)
                }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={email}
      />
      
      <CardContent>
        <Typography variant="body2" color="standard" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
          <ExpandMoreIcon />
      </CardActions>
    </Card>
    );
};

export default CommentDetails;