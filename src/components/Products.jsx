import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import makeStyles from './style';

const Products =({ products }) => {
    const classes = makeStyles();
    return(  
    <main className={classes.content}>
        <div className={classes.toolbar}>
            <Grid container justifyContent="center" spacing = {2}>
                {products.map((product) => (
                    <Grid item key = {product.id} xs = {12} sm={6} md={4} lg={3} >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    </main>
)}

export default Products;

