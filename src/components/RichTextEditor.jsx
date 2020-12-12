import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Wrapper = styled.div`
  color: ${colors.textPrimary};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  background-color: #FAFBFC;
  outline: 0;
  max-width: 500px;
  padding: 4px 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 0;
  vertical-align: baseline;
  width: 100%;
  display: flex;
`;

const CustomTextArea = styled.textarea`
  flex: 1;
  padding: 5px;
  height: 320px;
  border: none;
  background-color: transparent;
  outline: 0;
  resize: none;
  font-family: Consolas,Menlo,"Liberation Mono",Courier,monospace;
`;

const RichTextEditor = () => (
  <Wrapper>
    <CustomTextArea />
  </Wrapper>
);

export default RichTextEditor;
