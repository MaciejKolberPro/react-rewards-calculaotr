import './index.css';
import React, { useEffect, useState } from 'react';
import TableUnit from './TableUnit';
import { getKeyArrayToDisplay } from '../../utils/functions';

const RewardsTable = ({
    transactions
}) => {
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        if (transactions && transactions.length > 0) {
            setKeys(getKeyArrayToDisplay(transactions[0].transactions));
        }
    }, [transactions]);

    return (
      <div className='rewardsContainer'>
        {!transactions || transactions.length === 0 ? (
          <h2>No transactions available</h2>
        ) : (
          <>
            <h2>Reward Points during 3 Months</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  {keys.map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <TableUnit key={index} transaction={transaction} />
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    );
    
}

export default RewardsTable;
