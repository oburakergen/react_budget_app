
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { totalExpenses, budget, currency } = useContext(AppContext);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`} style={{padding : "19px"}}>
            <span>Remaining: {currency + " " + (budget - totalExpenses)}</span>
        </div>
    );
};
export default Remaining;
