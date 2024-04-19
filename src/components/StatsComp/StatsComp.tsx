import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {AppText, FlexView} from '../../util/baseStyles';
import {capitalizeFormatter} from '../../util/formatters/textFormatter';

const Wrapper = styled.View``;

const StatbarWrap = styled.View`
  border: 1px solid ${props => props.theme.SECONDARY_COLOR};
  transform: skewX(-45deg);
  width: 80px;
`;

const StatBar = styled.View<StatBarStyleProps>`
  width: ${props => props.stat?.toString() + '%'};
  background-color: ${props =>
    props.levelUp ? props.theme.SECONDARY_COLOR : props.theme.PRIMARY_COLOR};
  height: 5px;
`;

export const StatsComp = ({
  width = '50%',
  stat = 0,
  statName,
}: StatsCompProps) => {
  console.log({stat, statName});
  return (
    <Wrapper>
      <FlexView>
        <AppText small>{capitalizeFormatter(statName)}</AppText>
        <StatbarWrap>
          <StatBar levelUp={stat >= 100} stat={stat >= 100 ? stat / 2 : stat} />
        </StatbarWrap>
      </FlexView>
    </Wrapper>
  );
};

type StatsCompProps = {
  width: string;
  statName: string;
  stat: number;
};

type StatBarStyleProps = {
  stat: string;
  levelUp: boolean;
};