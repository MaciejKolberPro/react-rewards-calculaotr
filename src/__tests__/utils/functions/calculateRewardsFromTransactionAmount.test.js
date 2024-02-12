import { calculateRewardsFromTransactionAmount } from '../../../utils/functions';
import {
    REWARD_LOWER_LIMIT,
    REWARD_UPPER_LIMIT,
    LOWER_LIMIT_MULTIPLIER,
    UPPER_LIMIT_MULTIPLIER
} from '../../../constants';

describe('calculateRewardsFromTransactionAmount', () => {
    it('returns 0 for transaction amounts less than or equal to the lower limit', () => {
        const amount = REWARD_LOWER_LIMIT;
        expect(calculateRewardsFromTransactionAmount(amount)).toEqual(0);
    });

    it('calculates rewards correctly for transaction amounts between lower and upper limits', () => {
        const amount = REWARD_LOWER_LIMIT + 10;
        const expectedRewards = 10 * LOWER_LIMIT_MULTIPLIER;
        expect(calculateRewardsFromTransactionAmount(amount)).toEqual(expectedRewards);
    });

    it('calculates rewards correctly for transaction amounts greater than the upper limit', () => {
        const amount = REWARD_UPPER_LIMIT + 20;
        const lowerPoints = (REWARD_UPPER_LIMIT - REWARD_LOWER_LIMIT) * LOWER_LIMIT_MULTIPLIER;
        const upperPoints = 20 * UPPER_LIMIT_MULTIPLIER;
        const expectedRewards = lowerPoints + upperPoints;
        expect(calculateRewardsFromTransactionAmount(amount)).toEqual(expectedRewards);
    });
});
