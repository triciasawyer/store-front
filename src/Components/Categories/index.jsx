import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { set } from '../../store/actions';


function Categories() {
  const { categories } = useSelector((state) => state.categories)
  // console.log('Categories', categories);
  const dispatch = useDispatch();


  return (
    <>
      <h2>Browse our Categories</h2>
      {categories.map((category, index) => (
        <Button key={`categories-${index}`} onClick={() => dispatch(set(category))}>
          {category.displayName}
        </Button>
      ))}
    </>
  );
}

export default Categories
