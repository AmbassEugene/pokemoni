import {apiEndpoints} from '../api/apiEndpoints';

export const getPokemonImageUri = (pokemonName: string) => {
  const imageUri =
    apiEndpoints.POKEMON_IMAGE_URI + pokemonName.toLocaleLowerCase() + '.png';

  return imageUri;
};
