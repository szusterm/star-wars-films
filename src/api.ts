import {gql} from '@apollo/client';

export const GET_FILMS_LIST = gql`
  query GetFilmsList {
    allFilms {
      films {
        title
      }
    }
  }
`;
