import { getTotalRewards } from '../../../utils';
import { calculateRewardsFromTransactionAmount } from '../../../utils/functions';

jest.mock('../../../utils/functions', () => ({
    calculateRewardsFromTransactionAmount: jest.fn(),
}));

describe('getTotalRewards', () => {
    beforeEach(() => {
        calculateRewardsFromTransactionAmount.mockClear();
    });

    it('returns total rewards correctly', () => {
        const mockTransactions = [
            { amount: 50 },
            { amount: 100 },
            { amount: 150 },
        ];

        calculateRewardsFromTransactionAmount.mockReturnValueOnce(0);
        calculateRewardsFromTransactionAmount.mockReturnValueOnce(50);
        calculateRewardsFromTransactionAmount.mockReturnValueOnce(150);

        const totalRewards = getTotalRewards(mockTransactions);

        expect(totalRewards).toBe(200);

        expect(calculateRewardsFromTransactionAmount).toHaveBeenCalledWith(50);
        expect(calculateRewardsFromTransactionAmount).toHaveBeenCalledWith(100);
        expect(calculateRewardsFromTransactionAmount).toHaveBeenCalledWith(150);
    });

    it('returns 0 rewards when no transactions are provided', () => {
        const totalRewards = getTotalRewards([]);
        expect(totalRewards).toBe(0);
        expect(calculateRewardsFromTransactionAmount).not.toHaveBeenCalled();
    });
});
