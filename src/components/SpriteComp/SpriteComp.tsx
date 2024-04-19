import React from 'react';
import styled from 'styled-components/native';
import {AppText, Card} from '../../util/baseStyles';
import {capitalizeFormatter} from '../../util/formatters/textFormatter';

const Wrapper = styled(Card)`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  width: 160px;
  height: 160px;
  margin: auto;
  border-radius: 10px;
`;

const SpriteImage = styled.Image`
  width: 120px;
  height: 100px;
`;

export const SpriteComp = ({link, name}: SpriteCompProps) => {
  return (
    <Wrapper>
      <AppText bold small right>
        {capitalizeFormatter(name)}
      </AppText>
      <SpriteImage src={link} />
    </Wrapper>
  );
};

type SpriteCompProps = {
  link: string;
  name: string;
};
