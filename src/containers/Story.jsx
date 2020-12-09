import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

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
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.textPrimary};
  margin-right: 8px;
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
  background-color: ${colors.lightGray};
  color: ${colors.textSecondary};
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
`;

const Story = () => (
  <Container>
    <Breadcrumbs>
      Ji-Hyo Kim / Notebook / Stories
    </Breadcrumbs>
    <TitleRow>
      <Title>Notebook</Title>
    </TitleRow>
    <CreatedAt>Created at December 6th, 2020</CreatedAt>
    <ActionRow>
      <ActionButton>
        View
      </ActionButton>
      <ActionButton>
        Edit
      </ActionButton>
      <ActionButton>
        Delete
      </ActionButton>
    </ActionRow>
    <Body>
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
      dummy text of the printing Lorem Ipsum is simply dummy text of the printing
      Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
      text of the printing Lorem Ipsum is simply dummy text of the printing Lorem
      Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text
      of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
      is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing
    </Body>
  </Container>
);

export default Story;
