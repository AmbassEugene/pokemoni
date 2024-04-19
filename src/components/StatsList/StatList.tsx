import React from 'react';
import {StatsComp} from '../StatsComp/StatsComp';
import styled from 'styled-components/native';
import {FlexView} from '../../util/baseStyles';
import {PokemonItem} from '../../types';

const Wrapper = styled(FlexView)`
  justify-content: space-between;
`;

export const StatList = ({stats}: {stats: PokemonItem['stats']}) => {
  return (
    <Wrapper>
      {stats.map((data, index: number) => (
        <StatsComp
          key={index}
          statName={data.stat.name}
          stat={data.base_stat}
        />
      ))}
    </Wrapper>
  );
};
