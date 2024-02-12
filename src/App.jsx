import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchTransactions } from './services/transactionService';
import {
    ErrorPage,
    LoadingPage,
    RewardsTable
} from './pages';


function App() {
    const [transactions, setTransactions] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchTransactions()
            .then(transactions => {
                setTransactions(transactions);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    } else if (error) {
        return <ErrorPage error={error} />;
    } else {
        return <RewardsTable transactions={transactions} />;
    }
}

export default App;