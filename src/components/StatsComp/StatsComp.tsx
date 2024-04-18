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

const StatBar = styled.View<StatsCompStyleProps>`
  width: ${props => props.width};
  background-color: ${props => props.theme.SECONDARY_COLOR};
  height: 5px;
`;

export const StatsComp = ({width = '50%', statName}: StatsCompProps) => {
  return (
    <Wrapper>
      <FlexView>
        <AppText small>{capitalizeFormatter(statName)}</AppText>
        <StatbarWrap>
          <StatBar width={width} />
        </StatbarWrap>
      </FlexView>
    </Wrapper>
  );
};

type StatsCompProps = {
  width: string;
  statName: string;
};

type StatsCompStyleProps = {
  width?: string;
};
