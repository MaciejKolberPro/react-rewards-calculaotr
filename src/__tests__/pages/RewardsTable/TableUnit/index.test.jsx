import React from 'react';
import { render, screen } from '@testing-library/react';
import TableUnit from '../../../../pages/RewardsTable/TableUnit';

describe('TableUnit component', () => {
    it('renders table row with correct data', () => {
        const mockTransaction = {
            customerId: "c001",
            customerName: "Michelle Miller",
            transactions: [
                { date: "2024-01-05", amount: 21 },
                { date: "2024-01-09", amount: 200 },
                { date: "2024-01-14", amount: 250 },
                { date: "2024-02-02", amount: 350 },
                { date: "2024-02-07", amount: 90 },
                { date: "2024-02-22", amount: 110 },
                { date: "2024-03-01", amount: 220 },
                { date: "2024-03-02", amount: 210 },
                { date: "2024-03-03", amount: 500 }
            ]
        };

        render(
          <table>
            <tbody>
              <TableUnit transaction={mockTransaction} />
            </tbody>
          </table>
        );

        expect(screen.getByText('c001')).toBeInTheDocument(); // Check customer ID
        expect(screen.getByText('Michelle Miller')).toBeInTheDocument(); // Check customer name
        expect(screen.getByText('600')).toBeInTheDocument(); // Check rewards for Jan
        expect(screen.getByText('660')).toBeInTheDocument(); // Check rewards for Feb
        expect(screen.getByText('1410')).toBeInTheDocument(); // Check total Mar
        expect(screen.getByText('2670')).toBeInTheDocument(); // Check total Total
    });
});