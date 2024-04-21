import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import {useHoverAnimations} from '../../util/hooks/useHoverAimation';
import Animated from 'react-native-reanimated';
import {AppText, FlexView} from '../../util/baseStyles';
import {TouchableOpacity} from 'react-native';
import {AppContext} from '../../util/contexts/contexts';

const closedBall = require('../../../assets/images/loadingBall.png');

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const LoadingImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const BackgroundImg = styled.ImageBackground`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

const AnimatedView = styled(Animated.View)`
  /* opacity: 0.7; */
`;

const MenuItemWrap = styled(FlexView)`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const MenuTextItem = styled(AppText)`
  color: ${props => props.theme.SECONDARY_COLOR};
  /* color: ${props => props.theme.PRIMARY_TEXT_COLOR}; */
  font-weight: 900;
`;

const MenuIconItem = styled.View`
  background-color: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
  padding: 2px 3px;
  border-radius: 4px;
`;

export const MenuBtn = () => {
  const {isDarkMode, setIsDarkMode} = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const {animatedStyles} = useHoverAnimations(2);

  const handleDarkmode = () => {
    setIsDarkMode(!isDarkMode);
    setIsOpen(false);
  };
  const handleSearch = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      {isOpen && (
        <>
          <MenuItem
            action={handleDarkmode}
            title={isDarkMode ? 'Light mode?' : 'Dark mode?'}
            icon={isDarkMode ? '🌞' : '🌛'}
          />
          <MenuItem action={handleSearch} title="Search" icon="🔎" />
        </>
      )}

      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <BackgroundImg source={closedBall} blurRadius={30}>
          <AnimatedView style={animatedStyles}>
            <LoadingImage source={closedBall} />
          </AnimatedView>
        </BackgroundImg>
      </TouchableOpacity>
    </Wrapper>
  );
};

const MenuItem = ({title, icon, action}: MenuItemProps) => {
  return (
    <TouchableOpacity onPress={action}>
      <MenuItemWrap>
        <MenuTextItem semiBold>{title}</MenuTextItem>
        <MenuIconItem>
          <AppText fontSize={'14px'}>{icon}</AppText>
        </MenuIconItem>
      </MenuItemWrap>
    </TouchableOpacity>
  );
};

type MenuItemProps = {
  title: string;
  icon: string;
  action: () => void;
};
