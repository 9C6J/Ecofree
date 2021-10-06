import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import { Title } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [aCards,setCardList] = useState([]);

  const getData=()=>{
    fetch('../mockdata/card.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      var newArr = [...myJson.value];

      setCardList(newArr);
    });
  };

  useEffect(()=>{
    getData()
  },[]);

  return (
    <div className={classes.root} style={{display: 'table', padding: '1em'}}>
      { 
        aCards.map(function(oData){
          return (
            <Card 
              title={oData.title}
              subheader={oData.subheader}
              typography={oData.typography}
            />
          )
        }) 
      }
    </div>
  );
}