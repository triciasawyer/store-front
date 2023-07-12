import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card, CardActions, CardMedia, CardContent, Typography } from '@mui/material';
import { addToCart } from "../../store/cart";
import { decrementInventoryOnAdd } from "../../store/products";

function ProductDetails() {

    const products = useSelector(state => state.products);
    const { id } = useParams();
    const selectedProduct = products.find(product => product._id === id);
    console.log('Selected product', selectedProduct);


    const addDispatcher = (product) => {
        dispatch(addToCart(product));
        dispatch(decrementInventoryOnAdd(product));
    };


    return (
        <div style={{ margin: "auto", marginTop: '70px' }}>
            <Card sx={{ maxWidth: '80%' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        {product.name}
                    </Typography>
                </CardContent>
                <CardMedia
                    sx={{ height: 200 }} image={`https://source.unsplash.com/random?${product.name}`}
                    title={product.name} />
                <CardActions>
                    {product.inStock > 0 ? (
                        <Button onClick={() => addDispatcher(product)} size="small">ADD TO CART</Button>
                    ) : (
                        <Button size="small" disabled>ADD TO CART</Button>
                    )}
                    <Button component={Link} to={`/productDetails/${product._id}`} size="small">VIEW DETAILS</Button>
                </CardActions>

            </Card>
        </div>
    )
}

export default ProductDetails;