import { 
    calculateRewardsFromTransactionAmount
} from "../functions";

const getTotalRewards = transactions => {
    return transactions.reduce((totalRewards, transaction) => {
        return totalRewards + calculateRewardsFromTransactionAmount(transaction.amount);
    }, 0);
}

export default getTotalRewards;