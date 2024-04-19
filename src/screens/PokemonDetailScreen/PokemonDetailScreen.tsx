import React, {useEffect, useState} from 'react';
import Animated from 'react-native-reanimated';
import {BaseScreen} from '../../components/BaseScreen/BaseScreen';
import {getResource} from '../../util/api/apiRequests';
import styled from 'styled-components/native';
import {capitalizeFormatter} from '../../util/formatters/textFormatter';
import {PokemonImageComp} from '../../components/PokemonImage/PokemonImage';
import {AppText, Tag, FlexView} from '../../util/baseStyles';
import {SectionComp} from '../../components/SectionComp/SectionComp';
import {StatList} from '../../components/StatsList/StatList';
import {SpriteComp} from '../../components/SpriteComp/SpriteComp';
import {useHoverAnimations} from '../../util/hooks/useHoverAimation';

const Wrapper = styled.View`
  position: relative;
  padding-bottom: 30px;
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

const CollectBtn = styled.TouchableOpacity`
  background-color: ${props => props.theme.SECONDARY_COLOR};
  margin-bottom: 30px;
  justify-content: center;
  padding: 20px;
  border-radius: 15px;
`;

const CollectBtnText = styled(AppText)`
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  elevation: 1;
`;

export const PokemonDetailScreen = ({route}) => {
  const [pokemonDets, setPokemon] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const {animatedStyles} = useHoverAnimations(10);

  const {link, name} = route.params;

  // TODO: move to custom hooks
  useEffect(() => {
    getPokemonDetails();
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
                  <AppText>{pokemonDets.weight + 'kg'}</AppText>
                </DetailsItemWrap>
                <DetailsItemWrap>
                  <DetailsLabelItem>Height:</DetailsLabelItem>
                  <AppText>{pokemonDets.height + 'm'}</AppText>
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
                <FlexView>
                  <SpriteComp
                    name="back"
                    link={pokemonDets.sprites.back_default}
                  />
                  <SpriteComp
                    name="front"
                    link={pokemonDets.sprites.front_default}
                  />
                  <SpriteComp
                    name="shiny back"
                    link={pokemonDets.sprites.back_shiny}
                  />

                  <SpriteComp
                    name="shiny front"
                    link={pokemonDets.sprites.front_shiny}
                  />
                </FlexView>
              </SectionComp>
            </SectionWrap>
          </>
        )}
        <CollectBtn>
          <CollectBtnText>Collect</CollectBtnText>
        </CollectBtn>
      </Wrapper>
    </BaseScreen>
  );
};
