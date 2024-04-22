import React, {useState} from 'react';
import styled from 'styled-components/native';
import {InputBox} from '../../util/baseStyles';
import {colors} from '../../config/theme';

const Wrapper = styled.View`
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
  margin-bottom: 10px;
  padding: 0px 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;

const SearchBox = styled(InputBox)`
  flex: 2;

  &::placeholder {
    font-size: 30px;
  }
`;

export const ListHeaderComponent = ({action}: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnChangeText = (text: string) => {
    setSearchTerm(() => text);
    action(text);
  };
  return (
    <Wrapper>
      <SearchBox
        value={searchTerm}
        onChangeText={handleOnChangeText}
        placeholder="Search..."
        autoCapitalize={'none'}
        autoComplete={'off'}
        placeholderTextColor={colors.SECONDARY_TEXT_COLOR}
      />
    </Wrapper>
  );
};

type HeaderProps = {
  action: (query: string) => void;
};
