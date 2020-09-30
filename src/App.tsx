import AppContainer from './components/AppContainer';
import CollapsedBox from './components/CollapsedBox';
import {useQuery} from '@apollo/client';
import {GET_FILMS_LIST} from './api';
import {Root} from './types';
import React from 'react';

const App = () => {
  const {
    data: responseData,
    error: isLoadingError,
    loading: areFilmsLoading
  } = useQuery<Root>(GET_FILMS_LIST);

  const {films} = responseData?.allFilms || {};

  const renderedFilms = films?.filter(Boolean).map(film => (
    <CollapsedBox key={film?.title} title={film?.title}>
      ss
    </CollapsedBox>
  ));

  const renderedContent = [
    areFilmsLoading && <div>Loading</div>,
    isLoadingError && <div>Error</div>,
    renderedFilms
  ].filter(Boolean);

  return <AppContainer>{renderedContent}</AppContainer>;
};

export default App;
