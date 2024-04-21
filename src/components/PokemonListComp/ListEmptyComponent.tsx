import {View} from 'react-native';
import React from 'react';
import {AppText} from '../../util/baseStyles';

export const ListEmptyComponent = () => {
  return (
    <View>
      <AppText semiBold>
        Sorry, we couldnt find any pokemon from our downloaded pokemons.
      </AppText>
    </View>
  );
};
