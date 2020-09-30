import AppContainer from './components/AppContainer';
import CollapsedBox from './components/CollapsedBox';
import {useQuery, gql} from '@apollo/client';
import {Root} from './types';
import React from 'react';

const GET_FILMS_LIST = gql`
  query {
    allFilms {
      films {
        title
      }
    }
  }
`;

const App = () => {
  const {data, error, loading} = useQuery<Root>(GET_FILMS_LIST);

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <AppContainer>
      {data?.allFilms?.films?.map(film => (
        <CollapsedBox key={film?.title} title={film?.title}>
          ss
        </CollapsedBox>
      ))}
    </AppContainer>
  );
};

export default App;
