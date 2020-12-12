import React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import PropTypes from 'prop-types';
import { colors, strings } from '../constants';
import { dummyStory } from '../dummy';

const Container = styled.div`
  width: 100%;
`;

const Tag = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${colors.white};
  font-weight: 500;
  width: fit-content;
  height: fit-content;
  padding: 4px 6px;
  font-size: 12px;
  text-align: center;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin: 0px 3px;
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

const Body = styled.div`
  color: ${colors.textPrimary};
  font-size: 14px;
  margin-top: 20px;
  border: 1px solid #DFE1E6;
  border-radius: 5px;
  padding: 15px 20px;
  overflow: auto;
  line-height: 1.5;
`;

const Story = ({ onViewClick, onEditClick, onDeleteClick }) => {
  const [story] = React.useState(dummyStory);

  return (
    <Container>
      <Breadcrumbs>
        Ji-Hyo Kim / Notebook / Stories
      </Breadcrumbs>
      <TitleRow>
        <Title>{story.title}</Title>
        {
          story.tags.map((tag) => <Tag backgroundColor={tag.backgroundColor}>{tag.name}</Tag>)
        }
      </TitleRow>
      <CreatedAt>
        Created at
        {' '}
        {story.createdAt}
      </CreatedAt>
      <ActionRow>
        <ActionButton selected onClick={onViewClick}>
          View
        </ActionButton>
        <ActionButton onClick={onEditClick}>
          Edit
        </ActionButton>
        <ActionButton onClick={onDeleteClick}>
          Delete
        </ActionButton>
      </ActionRow>
      <Body dangerouslySetInnerHTML={{ __html: marked(story.body) }} />
    </Container>
  );
};

Story.propTypes = {
  onViewClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default Story;
