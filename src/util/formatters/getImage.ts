import {apiEndpoints} from '../api/apiEndpoints';

export const getPokemonImgUri = (link: string, usePng?: true) => {
  const pokemonNum = extractPokemonNumber(link);

  if (usePng) return apiEndpoints.POKEMON_PNG_URI + pokemonNum + '.png';

  const imageUri = apiEndpoints.POKEMON_SVG_URI + pokemonNum + '.svg';

  return imageUri;
};

export const extractPokemonNumber = (link: string) =>
  Number(link?.split('/')[6]);
