import styled from 'styled-components/native';

type AppTextProps = {
  semiBold?: boolean;
  bold?: boolean;
  small?: boolean;
  large?: boolean;
  fontSize?: number;
  center?: boolean;
  right?: boolean;
  left?: boolean;
};

export const FlexView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const AppText = styled.Text<AppTextProps>`
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
export const Tag = styled(AppText)`
  border: 1px solid ${props => props.theme.SECONDARY_COLOR};
  padding: 5px 8px;
  border-radius: 10px;
`;
