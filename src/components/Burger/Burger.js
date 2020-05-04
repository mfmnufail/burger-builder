import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './ingrideant';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i) =>
            <BurgerIngredient type={igkey} keys={igkey + i} />
        )
    });
    return (

        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            { transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};
export default burger;