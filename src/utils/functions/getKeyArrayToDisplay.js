const getKeyArrayToDisplay = transactions => {
    const keyArr = transactions.reduce((accumulator, current) => {
        const newKey = current.date.slice(0, 7);
        if (!accumulator.includes(newKey)) {
            accumulator.push(newKey);
        }
        return accumulator;
    }, []);
    return keyArr;
}

export default getKeyArrayToDisplay;