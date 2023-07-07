import { useSelector } from "react-redux";
import { When } from 'react-if';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

function Products() {
    const { activeCategory, products } = useSelector((state) => state.store)

    return (
        <>
            <When condition={activeCategory}>
                <h2>{activeCategory.displayName}</h2>
                <h4>Category Description Goes Here</h4>
                {
                    products.map((product, index) => (
                        <Card key={`products${index}`} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }} image={`https://source.unsplash.com/random?${product.name}`}
                                title={product.name} />

                            <CardContent>
                                <Typography gutterButtom variant="h5" component="div">
                                    {product.name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">ADD TO CART</Button>
                                <Button size="small">VIEW DETAILS</Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </When>
        </>
    )

}

export default Products