import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from './index';
import store from '../../store';

describe('Header component', () => {
  test('renders the app title', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const titleElement = getByText('Our Store');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the cart count', () => {
    const mockCart = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    const { getByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    // Regular expression to match "CART (number)"
    const cartCountElement = getByText(/CART \(\d+\)/);
    expect(cartCountElement).toBeInTheDocument();
  });
});
