import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer components', () => {
    test('renders content', () => {
        render(<Footer />);
        const footer = screen.getByTestId('footer');

        expect(footer).toHaveTextContent('Tricia Sawyer');
    })
})