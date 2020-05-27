import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button'

const OrderSummery = (props) => {
    const ingregientSummery = Object.keys(props.ingredient).map(ingrediant => {
        return <li key={ingrediant}><span style={{ textTransform: 'capitalize' }}>
            {ingrediant}</span>: {props.ingredient[ingrediant]}</li>
    });
    return (
        <Aux>
            <h3>
                Your Order
            </h3>
            <p>
                the burger you ordered contain the following igredients
            </p>
            <ul>
                {ingregientSummery}
            </ul>
            <h4>the price is {props.price.toFixed(2)}$</h4>
            <p>continue to checkout?</p>
            <Button buttonType='Danger' clicked={props.pause}>CANCEL</Button>
            <Button buttonType='Success' clicked={props.countinue}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummery
