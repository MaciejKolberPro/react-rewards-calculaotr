import { getKeyArrayToDisplay } from '../../../utils/functions';

describe('getKeyArrayToDisplay', () => {
    it('returns an array of unique keys extracted from transactions', () => {       
        
        const transactions = [
            { date: '2024-01-01', amount: 100 },
            { date: '2024-01-05', amount: 150 },
            { date: '2024-02-01', amount: 200 },
            { date: '2024-02-05', amount: 250 },
            { date: '2024-03-01', amount: 300 },
        ];
        
        const expectedResult = ['2024-01', '2024-02', '2024-03'];

        const result = getKeyArrayToDisplay(transactions);
        expect(result).toEqual(expectedResult);
    });

    it('returns an empty array if transactions is empty', () => {
        
        const transactions = [];
        const expectedResult = [];

        const result = getKeyArrayToDisplay(transactions);
        expect(result).toEqual(expectedResult);
    });

    it('returns an array with a single key if all transactions have the same key', () => {
        
        const transactions = [
            { date: '2024-01-01', amount: 100 },
            { date: '2024-01-05', amount: 150 },
            { date: '2024-01-10', amount: 200 },
        ];

        const expectedResult = ['2024-01'];

        const result = getKeyArrayToDisplay(transactions);
        expect(result).toEqual(expectedResult);
    });
});
