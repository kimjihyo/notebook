import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as HamburgerIcon } from '../assets/reorder-24px.svg';
import { colors } from '../constants';

const Wrapper = styled.div`
  background-color: ${colors.lightGray};
  padding: 8px;
  display: flex;
`;

const HamburgerButton = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #00000010;
  }
`;

const Header = ({ onHamburgerButtonClick }) => (
  <Wrapper>
    <HamburgerButton onClick={onHamburgerButtonClick}>
      <HamburgerIcon fill={colors.textSecondary} />
    </HamburgerButton>
  </Wrapper>
);

Header.propTypes = {
  onHamburgerButtonClick: PropTypes.func.isRequired,
};

export default Header;
