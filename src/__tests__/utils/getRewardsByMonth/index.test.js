import { getRewardsByMonth } from '../../../utils';
import { getKeyFromDate, calculateRewardsFromTransactionAmount } from '../../../utils/functions';

jest.mock('../../../utils/functions', () => ({
    getKeyFromDate: jest.fn(),
    calculateRewardsFromTransactionAmount: jest.fn(),
}));

describe('getRewardsByMonth', () => {
    beforeEach(() => {
        getKeyFromDate.mockClear();
        calculateRewardsFromTransactionAmount.mockClear();
    });

    it('returns rewards by month correctly', () => {
        const mockTransactions = [
            { date: '2024-01-01', amount: 50 },
            { date: '2024-02-01', amount: 100 },
            { date: '2024-02-15', amount: 150 },
            { date: '2024-03-10', amount: 200 },
            { date: '2024-03-15', amount: 300 },
        ];

        getKeyFromDate.mockReturnValueOnce('2024-01');
        getKeyFromDate.mockReturnValueOnce('2024-02');
        getKeyFromDate.mockReturnValueOnce('2024-02');
        getKeyFromDate.mockReturnValueOnce('2024-03');
        getKeyFromDate.mockReturnValueOnce('2024-03');
        calculateRewardsFromTransactionAmount.mockReturnValueOnce(0);
        calculateRewardsFromTransactionAmount.mockReturnValueOnce(50);
        calculateRewardsFromTransactionAmount.mockReturnValueOnce(150);
        calculateRewardsFromTransactionAmount.mockReturnValueOnce(250);
        calculateRewardsFromTransactionAmount.mockReturnValueOnce(450);

        const rewardsByMonth = getRewardsByMonth(mockTransactions);

        expect(rewardsByMonth).toEqual({
            '2024-01': 0,
            '2024-02': 200,
            '2024-03': 700,
        });

        expect(getKeyFromDate).toHaveBeenCalledWith('2024-01-01');
        expect(getKeyFromDate).toHaveBeenCalledWith('2024-02-01');
        expect(getKeyFromDate).toHaveBeenCalledWith('2024-02-15');
        expect(getKeyFromDate).toHaveBeenCalledWith('2024-03-10');
        expect(getKeyFromDate).toHaveBeenCalledWith('2024-03-15');

        expect(calculateRewardsFromTransactionAmount).toHaveBeenCalledWith(50);
        expect(calculateRewardsFromTransactionAmount).toHaveBeenCalledWith(100);
        expect(calculateRewardsFromTransactionAmount).toHaveBeenCalledWith(150);
        expect(calculateRewardsFromTransactionAmount).toHaveBeenCalledWith(200);
        expect(calculateRewardsFromTransactionAmount).toHaveBeenCalledWith(300);
    });
});
