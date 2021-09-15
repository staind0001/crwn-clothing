import React from 'react'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect' 
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import  {Badge}  from 'ui-neumorphism'
import './cart-icon.styles.scss'


const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <Badge overlap content={itemCount} bgColor={'#d2691e'}>
        <ShoppingIcon className= 'shopping-icon'/>
        </Badge>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
itemCount:selectCartItemsCount
})

export default connect(
mapStateToProps,
mapDispatchToProps
)(CartIcon) ;