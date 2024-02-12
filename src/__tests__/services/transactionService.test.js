import { fetchTransactions } from '../../services/transactionService';

jest.mock('../../services/transactionService');

describe('fetchTransactions', () => {
    it('returns transactions data when successful', async () => {
        const mockData = [
            {
                "customerId": "c001",
                "customerName": "Michelle Miller",
                "transactions": [
                    {
                        "date": "2024-01-01",
                        "amount": 21
                    },
                    {
                        "date": "2024-01-01",
                        "amount": 190
                    }]
            }, {
                "customerId": "c001",
                "customerName": "Michelle Miller",
                "transactions": [
                    {
                        "date": "2024-01-01",
                        "amount": 21
                    },
                    {
                        "date": "2024-01-01",
                        "amount": 190
                    }]
            }];

        fetchTransactions.mockResolvedValueOnce(mockData);
        await expect(fetchTransactions()).resolves.toEqual(mockData);
    });

    it('throws an error when transactions data is empty', async () => {
        fetchTransactions.mockRejectedValueOnce(new Error('404 Not Found'));
        await expect(fetchTransactions()).rejects.toThrow('404 Not Found');
    });
    
});
