import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoadingPage } from '../../../pages';

describe('LoadingPage component', () => {
    test('renders loading spinner', () => {
        render(<LoadingPage />);
        const loadingSpinner = screen.getByTestId('loading-spinner');
        expect(loadingSpinner).toBeInTheDocument();
        expect(loadingSpinner).toHaveClass('ldsSpinner');
    });
});
