import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import makeStyles from './styles.js';

const CartItem = ({ item, onUpdateCartQty, OnRemoveFromCart }) => {
    const classes = makeStyles();
    // console.log(item);
    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={()=>{
                        onUpdateCartQty(item.id, item.quantity - 1)
                    }}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small'onClick={()=>{
                        onUpdateCartQty(item.id, item.quantity + 1)
                    }}>+</Button>
                </div>
                <Button variant='contained' type='button' color='secondary' onClick={()=>{
                    OnRemoveFromCart(item.id)
                }}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem