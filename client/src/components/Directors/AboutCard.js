import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class AboutCard extends Component {
    constructor(){
        super()
        this.state={

        }
    }

  render() {
    const x= this.props;
    return (
      <Card className={styles.card}>
      <CardActionArea>
        <img src={x.img} alt={x.name}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {x.name}
          </Typography>
          <Typography component="p">
           {x.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

      );  }
}

export default AboutCard;
