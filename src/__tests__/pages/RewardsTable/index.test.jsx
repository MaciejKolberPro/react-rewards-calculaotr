import { render, screen } from '@testing-library/react';
import { RewardsTable } from '../../../pages';

const mockTransactions = [
    {
        customerId: 'c01',
        customerName: 'John Doe',
        transactions: [
            { date: '2023-01-01', amount: 70 },
            { date: '2023-02-01', amount: 100 },
            { date: '2023-03-01', amount: 150 }
        ]
    },
    {
        customerId: 'c02',
        customerName: 'Jane Smith',
        transactions: [
            { date: '2023-01-01', amount: 30 },
            { date: '2023-02-01', amount: 80 },
            { date: '2023-03-01', amount: 120 }
        ]
    }
];

describe('RewardsTable', () => {
    it('renders without transactions', () => {
        render(<RewardsTable transactions={[]} />);

        expect(screen.getByText('No transactions available')).toBeInTheDocument();
    });
    
    it('renders the table headers correctly', () => {
        render(<RewardsTable transactions={mockTransactions} />);
        
        expect(screen.getByText('Reward Points during 3 Months')).toBeInTheDocument();
        expect(screen.getByText('ID')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('2023-01')).toBeInTheDocument();
        expect(screen.getByText('2023-02')).toBeInTheDocument();
        expect(screen.getByText('2023-03')).toBeInTheDocument();
        expect(screen.getByText('Total')).toBeInTheDocument();
    });

    it('renders the table rows correctly', () => {
        render(<RewardsTable transactions={mockTransactions} />);

        expect(screen.getByText('c01')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
        expect(screen.getByText('150')).toBeInTheDocument();
        expect(screen.getByText('220')).toBeInTheDocument();

        expect(screen.getByText('c02')).toBeInTheDocument();
        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText('30')).toBeInTheDocument();
        expect(screen.getByText('90')).toBeInTheDocument();
        expect(screen.getByText('120')).toBeInTheDocument();
    });
});
