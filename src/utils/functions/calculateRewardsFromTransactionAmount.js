import {
    REWARD_LOWER_LIMIT,
    REWARD_UPPER_LIMIT,
    LOWER_LIMIT_MULTIPLIER,
    UPPER_LIMIT_MULTIPLIER
} from '../../constants';

const calculateRewardsFromTransactionAmount = amount => {
    if (amount <= REWARD_LOWER_LIMIT) {
        return 0;
    } else if (amount <= REWARD_UPPER_LIMIT) {
        return (amount - REWARD_LOWER_LIMIT) * LOWER_LIMIT_MULTIPLIER;
    } else {
        const lowerPoints = (REWARD_UPPER_LIMIT - REWARD_LOWER_LIMIT) * LOWER_LIMIT_MULTIPLIER;
        const upperPoints = (amount - REWARD_UPPER_LIMIT) * UPPER_LIMIT_MULTIPLIER;
        return lowerPoints + upperPoints;
    }
}

export default calculateRewardsFromTransactionAmount;