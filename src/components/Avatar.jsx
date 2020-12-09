import React from 'react';
import styled from 'styled-components';
import AvatarImage from '../assets/avatar.jpg';

const Wrapper = styled.img`
  vertical-align: middle;
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;
const Avatar = () => (
  <Wrapper src={AvatarImage} />
);

export default Avatar;
