import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import styled from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 50px;
  font-weight: bolder;
  padding: 0px;
  color: white;
  font-size: 2rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  position: relative;
  
`;

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><Button className="btn btn-success rounded-circle" onClick={event=> increaseAllocation(props.name)}>+</Button></td>
            <td><Button className="btn btn-danger rounded-circle" onClick={event=> decreaseAllocation(props.name)}>-</Button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
