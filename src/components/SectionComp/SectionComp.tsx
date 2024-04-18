import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {AppText, Card} from '../../util/baseStyles';
import styled from 'styled-components/native';

const Wrapper = styled(Card)`
  border: 2px solid ${props => props.theme.PRIMARY_COLOR};
  padding: 15px;
  position: relative;
`;

const Title = styled(AppText)`
  padding: 10px 15px;
  border: 2px solid ${props => props.theme.PRIMARY_COLOR};
  border-left-width: 0px;
  border-top-width: 0px;
  color: ${props => props.theme.SECONDARY_COLOR};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 0;
`;

const Content = styled.View`
  margin-top: 40px;
`;

export const SectionComp = ({title, children}: SectionCompProps) => {
  return (
    <Wrapper>
      <Title>{title.toUpperCase()}</Title>
      <Content>{children}</Content>
    </Wrapper>
  );
};

type SectionCompProps = {
  title: string;
  children: ReactNode;
};
