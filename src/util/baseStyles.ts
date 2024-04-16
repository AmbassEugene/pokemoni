import styled from 'styled-components/native';

export const AppText = styled.Text`
  font-family: ${props =>
    props.semiBold
      ? 'Mulish-SemiBold'
      : props.bold
      ? 'Mulish-Bold'
      : 'Mulish-Regular'};

  font-size: ${props =>
    props.small
      ? '12px'
      : props.large
      ? '24px'
      : props.fontSize
      ? props.fontSize
      : '14px'};

  color: ${props => props.theme.PRIMARY_TEXT_COLOR};

  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  text-align: ${props =>
    props.center ? 'center' : props.right ? 'right' : 'left'};
`;

export const Card = styled.View`
  elevation: 1;
  padding: 10px;
  border-radius: 2px;
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
  margin-bottom: 10px;
  border-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
  border-width: 0.2px;
`;
