import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native-virtualized-view';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppText} from '../../util/baseStyles';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
const Header = styled.View`
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
  padding: 10px;
  position: relative;
`;

const Title = styled.Text`
  color: ${props => props.theme.SECONDARY_COLOR};
  font-weight: 900;
  align-self: center;
  font-size: 20px;
  letter-spacing: 1px;
`;

const BackButton = styled(Title)`
  position: absolute;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-size: 18px;
  left: 15px;
  top: 12px;
  font-weight: 500;
  letter-spacing: 0;
`;

const BigBackgroundImage = styled.Image`
  width: 500px;
  height: 500px;
  transform: rotate(45deg);
  position: absolute;
  right: 30px;
  bottom: 20px;
  opacity: ${props => props.theme.BACKGROUND_OPACITY};
`;

const SmallBackgroundImage = styled(BigBackgroundImage)`
  width: 100px;
  height: 100px;
  top: 0;
  transform: rotate(-45deg);
`;

const Content = styled.View`
  padding: 15px;
`;

const BaseScreen = ({children, title, backBtn, header}: BaseScreenProps) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      {header && (
        <Header>
          <Title>{title}</Title>
          {backBtn && (
            <BackButton onPress={() => navigation.goBack()}>Back</BackButton>
          )}
        </Header>
      )}

      <BigBackgroundImage
        source={require('../../../assets/images/backgroundImg.png')}
      />
      <SmallBackgroundImage
        source={require('../../../assets/images/backgroundImg.png')}
      />
      <Content>
        <ScrollView showsVerticalScrollIndicator={false} centerContent={true}>
          {children}
        </ScrollView>
      </Content>
    </Wrapper>
  );
};

export {BaseScreen};

type BaseScreenProps = {
  title?: string;
  backBtn?: boolean;
  children: ReactNode;
  header?: boolean;
};
