import {View, Text} from 'react-native';
import React, {PropsWithChildren, ReactNode} from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native-virtualized-view';

type BaseScreenProps = {
  title?: string;
  backBtn?: boolean;
  children: ReactNode;
  header?: boolean;
};

const BaseScreen = ({children, title, backBtn, header}: BaseScreenProps) => {
  return (
    <Wrapper>
      {header && (
        <Header>
          <Title>{title}</Title>
          {backBtn && <BackButton />}
        </Header>
      )}

      <ScrollView centerContent={true}>{children}</ScrollView>
    </Wrapper>
  );
};

export {BaseScreen};

const Wrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  padding: 15px;
`;

const Header = styled.View``;

const Title = styled.Text``;

const BackButton = styled.Text``;
