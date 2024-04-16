import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const Header = styled.View``;

const Title = styled.Text``;

const BackButton = styled.Text``;

const BaseScreen = ({children, title, backBtn}) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        {backBtn && <BackButton />}
      </Header>
      {children}
    </Wrapper>
  );
};

export {BaseScreen};
