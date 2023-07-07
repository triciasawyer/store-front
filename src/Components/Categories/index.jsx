import { useSelector, useDispatch } from 'react-redux';
import { set } from '../../store/reducer';

//Weird behavior with importing these, crashing page
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Categories() {
  const { categories } = useSelector((state) => state.store)
  // console.log('Categories', categories);
  const dispatch = useDispatch();


  return (
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup variant="text" aria-label="text button group">
        {
          categories.map((category, index) => {
            <Button key={`categories-${index}`} onClick={() => dispatch(set(category))}>
              {category.displayName}
            </Button>
          })
        }
      </ButtonGroup>
    </>
  )
}

export default Categories
