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
import {LoadingComp} from '../../components/LoadingComp/LoadingComp';
import {useGetResources} from '../../util/hooks/useGetResources';
import {apiEndpoints} from '../../util/api/apiEndpoints';

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
  const {link, name} = route.params;
  const {resourceData, error, loading} = useGetResources(link);

  const isLoaded =
    resourceData !== undefined && Object.keys(resourceData).length > 1;

  const {animatedStyles} = useHoverAnimations(10);

  return (
    <BaseScreen backBtn header title={capitalizeFormatter(name)}>
      <Wrapper>
        {loading && <LoadingComp />}
        <Animated.View style={animatedStyles}>
          <PokemonImageComp
            link={link}
            width="280px"
            height="480px"
            backgroundWidth="107%"
          />
        </Animated.View>

        {isLoaded && (
          <>
            {/* Start of Details Section */}
            <SectionWrap>
              <SectionComp title="Details">
                <DetailsItemWrap>
                  <DetailsLabelItem semiBold>Name:</DetailsLabelItem>
                  <AppText bold>
                    {capitalizeFormatter(resourceData.name)}
                  </AppText>
                </DetailsItemWrap>
                <DetailsItemWrap>
                  <DetailsLabelItem semiBold>Weight:</DetailsLabelItem>
                  <AppText>{resourceData.weight + 'kg'}</AppText>
                </DetailsItemWrap>
                <DetailsItemWrap>
                  <DetailsLabelItem semiBold>Height:</DetailsLabelItem>
                  <AppText>{resourceData.height + 'm'}</AppText>
                </DetailsItemWrap>

                <DetailsItemWrap>
                  <DetailsLabelItem semiBold>Type:</DetailsLabelItem>
                  <FlexView>
                    {resourceData.types.map((data, index) => (
                      <Tag key={index}>{'#' + data?.type.name}</Tag>
                    ))}
                  </FlexView>
                </DetailsItemWrap>

                <DetailsItemWrap>
                  <DetailsLabelItem semiBold>Abillities:</DetailsLabelItem>
                  <FlexView>
                    {resourceData.abilities.map((data, index) => (
                      <Tag key={index}>{'#' + data?.ability.name}</Tag>
                    ))}
                  </FlexView>
                </DetailsItemWrap>
              </SectionComp>
            </SectionWrap>

            {/* Start of Stat Section */}
            <SectionWrap>
              <SectionComp title="Stats">
                <StatList stats={resourceData.stats} />
              </SectionComp>
            </SectionWrap>

            {/* Start of Sprites Section */}
            <SectionWrap>
              <SectionComp title="Sprites">
                <FlexView>
                  <SpriteComp
                    name="back"
                    link={resourceData.sprites.back_default}
                  />
                  <SpriteComp
                    name="front"
                    link={resourceData.sprites.front_default}
                  />
                  <SpriteComp
                    name="shiny back"
                    link={resourceData.sprites.back_shiny}
                  />

                  <SpriteComp
                    name="shiny front"
                    link={resourceData.sprites.front_shiny}
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
