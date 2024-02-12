import transactionsData from '../data/mock-data.json';

export const fetchTransactions = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (transactionsData === undefined || transactionsData === null) {
                reject(new Error('404 Not Found'));
            } else {
                resolve(transactionsData);
            }
        }, 2000);
    });
};