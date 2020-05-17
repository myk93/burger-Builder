import React from 'react'
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>the price is <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map((item) => (
                <BuildControl
                    key={item.label}
                    label={item.label}
                    add={() => props.add(item.type)}
                    remove={() => props.remove(item.type)}
                    disable={props.disable[item.type]}
                />
            ))}
            <button className={classes.OrderButton} disabled={!props.isPurches}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls
