import React, { Component } from 'react'
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSum from '../../components/Burger/OrderSummery/OrderSummery';

const INGRIDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
}

export class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        isPurches: false,
        totalPrice: 4,
        visable: false
    }

    addIngredientHandler = (name) => {
        const oldCount = this.state.ingredients[name] + 1;
        const updatedIngredient = { ...this.state.ingredients }
        updatedIngredient[name] = oldCount;
        const newPrice = this.state.totalPrice + INGRIDIENT_PRICES[name];
        this.setState({ ingredients: updatedIngredient, totalPrice: newPrice })
        this.updatePurcheseState(updatedIngredient)
    }

    removeIngredientHandler = (name) => {
        let oldCount = this.state.ingredients[name];
        if (oldCount === 0) {
            return;
        } else {
            oldCount -= 1;
        }
        const updatedIngredient = { ...this.state.ingredients }
        updatedIngredient[name] = oldCount;
        const newPrice = this.state.totalPrice - INGRIDIENT_PRICES[name];
        this.setState({ ingredients: updatedIngredient, totalPrice: newPrice })
        this.updatePurcheseState(updatedIngredient)
    }

    ModalViewHandler = () => {
        this.setState({ visable: true })
    }
    updatePurcheseState(updated) {
        const ingredients = { ...updated }
        const sum = Object.keys(ingredients).map(ingrediant => {
            return ingredients[ingrediant];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({ isPurches: sum !== 0 })
    }

    purchesCancelHandler = () => {
        this.setState({ visable: !true })
    }

    render() {
        const disableList = {
            ...this.state.ingredients
        }
        for (let key in disableList) {
            disableList[key] = disableList[key] === 0
        }
        return (
            <Aux>
                <Modal visable={this.state.visable} modalClosed={this.purchesCancelHandler}>
                    <OrderSum price={this.state.totalPrice}
                        ingredient={this.state.ingredients} /></Modal>
                <Burger ingredient={this.state.ingredients} />
                <BuildControls
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                    disable={disableList}
                    isPurches={this.state.isPurches}
                    price={this.state.totalPrice}
                    ModalViewHandler={this.ModalViewHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder
