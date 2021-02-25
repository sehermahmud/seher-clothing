import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { HeaderContainer, OptionsContainer, OptionLink } from './header.styles';

import { useTheme, useMediaQuery } from '@material-ui/core';

import './header.css';

const Header = ({ currentUser, hidden, signOutStart }) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <HeaderContainer style={{ marginBottom: matchesXS ? '1rem' : '2.5rem' }}>
      <a href="/">
        <img
          src="https://i.imgur.com/L9QUhpr.png"
          className="logo"
          alt="Company Logo"
          style={{
            width: matchesXS ? '5.1rem' : '7rem',
            height: matchesXS ? '5.1rem' : '7rem',
          }}
        />
      </a>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
