import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 350,
   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

const Post = (props) => {
    const{title, body, id} = props.post;

    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
    <h2>Post: {id}</h2>
        </Typography>
        <Typography variant="h5" component="h2">
    <h3>{title}</h3>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        </Typography>
        <Typography variant="body2" component="p">
    <p>{body}</p>
        </Typography>
      </CardContent>
      <CardActions>
          <Link to = {`/post/${id}`}> 
      <Button variant="contained" color="primary">See more</Button>
      </Link>
      </CardActions>
    </Card>
    );
};

export default Post;