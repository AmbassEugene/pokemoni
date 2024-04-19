import {View, Text} from 'react-native';
import React from 'react';
import {StatsComp} from '../StatsComp/StatsComp';
import styled from 'styled-components/native';
import {FlexView} from '../../util/baseStyles';

const Wrapper = styled(FlexView)`
  justify-content: space-between;
`;

export const StatList = ({stats}: []) => {
  return (
    <Wrapper>
      {stats.map((data, index) => (
        <StatsComp
          key={index}
          statName={data.stat.name}
          width={String(data.base_stat) + '%'}
          stat={data.base_stat}
        />
      ))}
    </Wrapper>
  );
};
