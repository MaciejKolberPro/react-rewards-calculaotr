import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorPage } from '../../../pages';

describe('ErrorPage component', () => {
    it('renders with error message', () => {
        const errorMessage = 'An error occurred!';
        render(<ErrorPage error={errorMessage} />);
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
});
