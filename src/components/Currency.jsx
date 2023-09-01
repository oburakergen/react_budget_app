import styled from "styled-components";
import {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContext";
import { useRef } from 'react';


const Select = styled.select`
    width: 100%;
    height: 100%;
    padding: 0.5rem 1.5rem;
    border: none;
    outline: none;
    background: lightgreen;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
  border-radius: 0.5rem;
  option{
    &:hover{
        background-color: lightgreen;
    }
  }
`;

export const Currency = () => {
    const { currency,dispatch } = useContext(AppContext);
    const currencySelect = useRef(null);

    useEffect(() => {
         currencySelect.current.value = "";
    },[currency]);
    const getCurrency = () => {
        switch (currency) {
            case "£":
                return "£ Pound";
            case "€":
                return "€ Euro";
            case "₹":
                return "₹ Ruppee";
            default:
                return "$ Dollar";
        }
    }

    const onChangeCurrency = (e) => {
        dispatch({
            type:"CHG_CURRENCY",
            payload: e.target?.value || "$"
        })
    }

    return (
        <div>
            <Select ref={currencySelect} name="currency" onChange={onChangeCurrency} defaultValue={currency}>
                <option value="" style={{display: "none"}}>Currency ({getCurrency(currency)})</option>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </Select>
        </div>
    )
}
