import React, { useEffect, useState } from 'react';
import {
    getTotalRewards,
    getRewardsByMonth
} from '../../../utils';

const TableUnit = ({
    transaction
}) => {

    const [totalRewards, setTotalRewards] = useState(null);
    const [rewardsByMonth, setRewardsByMonth] = useState({});

    useEffect(() => {
        const total = getTotalRewards(transaction.transactions);
        const byMonth = getRewardsByMonth(transaction.transactions)
        setTotalRewards(total);
        setRewardsByMonth(byMonth);
    }, [transaction.transactions]);

    return (
        <tr>
            <td>{transaction.customerId}</td>
            <td>{transaction.customerName}</td>
            {Object.values(rewardsByMonth).map((item, index) => (
                <td key={index}>{item}</td>
            ))}
            <td>{totalRewards}</td>
        </tr>
    );
}

export default TableUnit;