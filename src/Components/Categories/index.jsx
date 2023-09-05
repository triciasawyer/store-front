import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { getCategories, setCategory } from '../../store/categories';

function Categories() {

  const categories = useSelector((state) => state.categories.categories);
  // console.log('Categories', categories);
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  // console.log('Active Category:', activeCategory);
  const dispatch = useDispatch();

  const setDispatcher = (category) => {
    dispatch(setCategory(category));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);


  return (
    <>
      <h2 style={{ marginTop: '100px', textAlign: 'center' }}>Browse our Categories</h2>
      {categories.map((category, index) => (
        <Button
          key={`categories-${index}`}
          onClick={() => setDispatcher(category)}
          style={{
            fontWeight: activeCategory && activeCategory.name === category.name ? 'bold' : 'normal',
            color: activeCategory && activeCategory.name === category.name ? '#007bff' : 'inherit',
          }}
        >
          {category.name}
        </Button>
      ))}
    </>
  );

}

export default Categories;