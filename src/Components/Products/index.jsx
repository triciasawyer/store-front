import { useDispatch, useSelector } from "react-redux";
import { When } from 'react-if';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { addToCart } from '../../store/cart';
import { addProduct } from '../../store/products';

function Products() {
    const { activeCategory } = useSelector((state) => state.categories)
    const { products } = useSelector((state) => state)
    // console.log('Productsss', products);
    const dispatch = useDispatch();
    const addDispatcher = (product) => {
        dispatch(addToCart(product));
        dispatch(addProduct(product));
    }

    return (
        <>
            <When condition={activeCategory}>
                <h2>{activeCategory.displayName}</h2>
                <h4 style={{ marginBottom: '10px', textAlign: 'center' }}>Category Description Goes Here</h4>
                <Grid container spacing={2} width="80%" marging="auto">
                    {
                        products.map((product, index) => (
                            <Grid key={`products${index}`} item xs={12} md={6} lg={4} >
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }} image={`https://source.unsplash.com/random?${product.name}`}
                                        title={product.name} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button onClick={() => dispatch(add(product))} size="small">ADD TO CART</Button>
                                        <Button size="small">VIEW DETAILS</Button>
                                    </CardActions> */}
                                    <CardActions>
                                        {product.inStock > 0 ? (
                                            <Button onClick={() => addDispatcher(product)} size="small">ADD TO CART</Button>
                                        ) : (
                                            <Button size="small" disabled>ADD TO CART</Button>
                                        )}
                                        <Button size="small">VIEW DETAILS</Button>
                                    </CardActions>

                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </When>
        </>
    )

}

export default Products