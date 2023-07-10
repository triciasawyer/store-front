import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Products from './index';
import { add } from '../../store/actions';

jest.mock('react-redux');

describe('Products Component', () => {
  test('should render products of the active category', () => {
    const activeCategory = { name: 'electronics', displayName: 'Electronics' };
    const products = [
      { name: 'TV', price: 699.00 },
      { name: 'Radio', price: 99.00 },
    ];

    useSelector.mockImplementation(selector => selector({
      categories: { activeCategory },
      products: { products },
    }));

    render(<Products />);

    expect(screen.getByText(activeCategory.displayName)).toBeInTheDocument();
    expect(screen.getByText(products[0].name)).toBeInTheDocument();
    expect(screen.getByText(products[1].name)).toBeInTheDocument();
  });

  // failing right now
  test('should dispatch add action when "ADD TO CART" button is clicked', () => {
    const activeCategory = { name: 'electronics', displayName: 'Electronics' };
    const products = [
      { name: 'TV', price: 699.00 },
      { name: 'Radio', price: 99.00 },
    ];

    useSelector.mockImplementation(selector => selector({
      categories: { activeCategory },
      products: { products },
    }));

    const dispatchMock = jest.fn();
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(dispatchMock);

    render(<Products />);

    const addToCartButtons = screen.getAllByText('ADD TO CART');
    addToCartButtons.forEach(button => {
      userEvent.click(button);
    });

    expect(dispatchMock).toHaveBeenCalledTimes(products.length);
    products.forEach(product => {
      expect(dispatchMock).toHaveBeenCalledWith(add(product));
    });
  });


  test('should not render products if no active category', () => {
    useSelector.mockImplementation(selector => selector({
      categories: { activeCategory: '' },
      products: { products: [] },
    }));

    render(<Products />);

    expect(screen.queryByText('Electronics')).not.toBeInTheDocument();
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
  });

});
