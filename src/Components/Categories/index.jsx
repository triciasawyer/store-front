import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { getCategories, setCategory } from '../../store/categories';
// import { setProducts } from '../../store/products';

function Categories() {
  const categories = useSelector((state) => state.categories.categories)
  // console.log('Categories', categories);
  const dispatch = useDispatch();

  const setDispatcher = (category) => {
    dispatch(setCategory(category));
  };


  return (
    <>
      <h2>Browse our Categories</h2>
      {categories.map((category, index) => (
        <Button key={`categories-${index}`} onClick={() => setDispatcher(category)}>
          {category.name}
        </Button>
      ))}
    </>
  );
}

export default Categories;
