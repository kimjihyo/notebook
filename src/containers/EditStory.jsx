import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../constants';
import { RichTextEditor } from '../components';

const Container = styled.div`
  width: 100%;
`;

const Breadcrumbs = styled.div`
  font-size: 14px;
  color: ${colors.textLight};
`;

const TitleRow = styled.div`
  display: flex;
  padding: 12px 0px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.textPrimary};
  margin-right: 12px;
`;

const CreatedAt = styled.div`
  font-size: 14px;
  color: ${colors.textSecondary};
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

const ActionButton = styled.div`
  background-color: ${(props) => (props.selected ? colors.buttonHighlighted : colors.lightGray)};
  color: ${(props) => (props.selected ? colors.white : colors.textSecondary)};
  padding: 8px 13px;
  font-size: 14px;
  margin: 0px 2px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.buttonHighlighted};
    color: white;
  }
`;

const Editor = styled.div`
  border-top: 1px solid #DFE1E6;
  border-bottom: 1px solid #DFE1E6;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
`;

const FieldGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 12px;
  align-items: ${(props) => (props.center ? 'center' : 'stretch')};
`;

const FieldLabel = styled.label`
  font-size: 14px;
  color: ${colors.textLight};
  margin-right: 12px;
`;

const TextInput = styled.input`
  height: 32px;
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
`;

const EditStory = ({ onViewClick, onEditClick, onDeleteClick }) => (
  <Container>
    <Breadcrumbs>
      Ji-Hyo Kim / Notebook / Stories
    </Breadcrumbs>
    <TitleRow>
      <Title>
        Discover AR
      </Title>
    </TitleRow>
    <CreatedAt>
      Created at
      {' '}
      December 6th, 2020
    </CreatedAt>
    <ActionRow>
      <ActionButton onClick={onViewClick}>
        View
      </ActionButton>
      <ActionButton selected onClick={onEditClick}>
        Edit
      </ActionButton>
      <ActionButton onClick={onDeleteClick}>
        Delete
      </ActionButton>
    </ActionRow>
    <Editor>
      <FieldGroup cetner>
        <FieldLabel>Title</FieldLabel>
        <TextInput type="text" />
      </FieldGroup>
      <FieldGroup>
        <FieldLabel style={{ marginTop: '6px' }}>Content</FieldLabel>
        <RichTextEditor />
      </FieldGroup>
      <FieldGroup center>
        <FieldLabel>Commit message</FieldLabel>
        <TextInput type="text" placeholder="Add an optional message" />
      </FieldGroup>
    </Editor>
  </Container>
);

EditStory.propTypes = {
  onViewClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default EditStory;
