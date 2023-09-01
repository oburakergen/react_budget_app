import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { currency, totalExpenses } = useContext(AppContext);
    return (
        <div className='alert alert-primary' style={{padding : "19px"}}>
            <span>Spent so far: {currency + " " + totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
