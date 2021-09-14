import React from 'react'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import  {Badge}  from 'ui-neumorphism'
import './cart-icon.styles.scss'


const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <Badge overlap content={0} bgColor={'#d2691e'}>
        <ShoppingIcon className= 'shopping-icon'/>
        </Badge>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
null,
mapDispatchToProps
)(CartIcon) ;