import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const Burger = (props) => {
    let tIngredient = Object.keys(props.ingredient)
        .map(igKey => {
            return [...Array(props.ingredient[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        });
    if (tIngredient.length === 0) {
        tIngredient = <p>please add ingredient</p>
    }
    console.log(tIngredient);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {tIngredient}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger
