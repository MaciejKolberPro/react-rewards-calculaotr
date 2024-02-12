import { 
    getKeyFromDate, 
    calculateRewardsFromTransactionAmount 
} from "../functions";

const getRewardsByMonth = transactions => {
    return transactions.reduce((rewardsByMonth, transaction) => {
        const key = getKeyFromDate(transaction.date);
        rewardsByMonth[key] = (rewardsByMonth[key] || 0) + calculateRewardsFromTransactionAmount(transaction.amount);
        return rewardsByMonth;
    }, {});
}

export default getRewardsByMonth;