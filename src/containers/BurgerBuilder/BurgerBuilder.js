import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{

    state = {
        ingredient: {
            salade: 2,
            bacon: 1,
            cheese: 2,
            meat: 1,
        }
    }

    render() {
        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredient} />
                </div>
                <div>
                    Build Controls
                </div>
            </Aux>
            );
    }
}
export default BurgerBuilder;