import React, {useEffect, useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import {BaseScreen} from '../../components/BaseScreen/BaseScreen';
import {getResource} from '../../util/api/apiRequests';
import styled from 'styled-components/native';
import {capitalizeFormatter} from '../../util/formatters/textFormatter';
import {PokemonImageComp} from '../../components/PokemonImage/PokemonImage';
import {AppText, Tag, FlexView} from '../../util/baseStyles';
import {SectionComp} from '../../components/SectionComp/SectionComp';
import {StatList} from '../../components/StatsList/StatList';

const Wrapper = styled.View`
  position: relative;
`;

const SectionWrap = styled.View`
  margin-bottom: 15px;
`;

const DetailsItemWrap = styled(FlexView)`
  margin-bottom: 5px;
`;
const DetailsLabelItem = styled(AppText)`
  width: 80px;
  font-size: 14px;
`;

export const PokemonDetailScreen = ({route}) => {
  const [pokemonDets, setPokemon] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const offset = useSharedValue(10);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}, {translateY: offset.value}],
  }));

  const {link, name} = route.params;

  // TODO: move to custom hooks
  useEffect(() => {
    getPokemonDetails();
  }, []);

  useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, {duration: 1500}),
      -1,
      true,
    );
  }, []);

  const getPokemonDetails = async () => {
    setLoading(true);
    const {responseError, data} = await getResource(link);
    setPokemon(data);
    setError(responseError);
    setLoading(false);
  };

  return (
    <BaseScreen backBtn header title={capitalizeFormatter(name)}>
      <Wrapper>
        <Animated.View style={animatedStyles}>
          <PokemonImageComp
            link={link}
            width="280px"
            height="480px"
            backgroundWidth="107%"
          />
        </Animated.View>

        {Object.keys(pokemonDets).length > 1 && (
          <>
            {/* Start of Details Section */}
            <SectionWrap>
              <SectionComp title="Details">
                <DetailsItemWrap>
                  <DetailsLabelItem>Name:</DetailsLabelItem>
                  <AppText bold>
                    {capitalizeFormatter(pokemonDets.name)}
                  </AppText>
                </DetailsItemWrap>
                <DetailsItemWrap>
                  <DetailsLabelItem>Weight:</DetailsLabelItem>
                  <AppText>{pokemonDets.weight / 10 + 'kg'}</AppText>
                </DetailsItemWrap>
                <DetailsItemWrap>
                  <DetailsLabelItem>Height:</DetailsLabelItem>
                  <AppText>{pokemonDets.height / 10 + 'm'}</AppText>
                </DetailsItemWrap>

                <DetailsItemWrap>
                  <DetailsLabelItem>Type:</DetailsLabelItem>
                  <FlexView>
                    {pokemonDets.types.map((data, index) => (
                      <Tag key={index}>{'#' + data?.type.name}</Tag>
                    ))}
                  </FlexView>
                </DetailsItemWrap>

                <DetailsItemWrap>
                  <DetailsLabelItem>Abillities:</DetailsLabelItem>
                  <FlexView>
                    {pokemonDets.abilities.map((data, index) => (
                      <Tag key={index}>{'#' + data?.ability.name}</Tag>
                    ))}
                  </FlexView>
                </DetailsItemWrap>
              </SectionComp>
            </SectionWrap>

            {/* Start of Stat Section */}
            <SectionWrap>
              <SectionComp title="Stats">
                <StatList stats={pokemonDets.stats} />
              </SectionComp>
            </SectionWrap>

            {/* Start of Sprites Section */}
            <SectionWrap>
              <SectionComp title="Sprites">
                <AppText>Details</AppText>
              </SectionComp>
            </SectionWrap>
          </>
        )}
      </Wrapper>
    </BaseScreen>
  );
};
