import {gql} from '@apollo/client';

export const GET_FILMS_LIST = gql`
  query GetFilmsList {
    allFilms {
      films {
        id
        title
      }
    }
  }
`;

export const GET_PLANETS_FROM_FILM = gql`
  query GetPlanetsFromFilm($filmId: ID!) {
    film(id: $filmId) {
      planetConnection {
        planets {
          id
          name
          rotationPeriod
          orbitalPeriod
          diameter
          climates
          surfaceWater
          population
        }
      }
    }
  }
`;

export const GET_PLANETS_LIST = gql`
  query GetPlanetsList {
    allPlanets {
      planets {
        name
      }
    }
  }
`;
