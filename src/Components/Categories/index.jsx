import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { set } from '../../store/reducer';


function Categories() {
  const { categories } = useSelector((state) => state.store)
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
