import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {AppText, Card} from '../../util/baseStyles';

const Wrapper = styled.View`
  padding: 15px;
  flex: 1;
  justify-content: center;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const WarningText = styled(AppText)`
  padding: 30px 20px;
  font-size: 25px;
`;

export const FallBackComp = () => {
  return (
    <Wrapper>
      <Card>
        <WarningText center>
          Something Went Wrong! Please restart the App
        </WarningText>
      </Card>
    </Wrapper>
  );
};
