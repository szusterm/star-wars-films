import FilmStatistics from './components/FilmStatistics';
import AppContainer from './components/AppContainer';
import {useQuery} from '@apollo/client';
import {GET_FILMS_LIST} from './api';
import {Root} from './types';
import React from 'react';

const App: React.FC = () => {
  const {
    data: responseData,
    error: isLoadingError,
    loading: areFilmsLoading
  } = useQuery<Root>(GET_FILMS_LIST);

  const {films} = responseData?.allFilms || {};

  const renderedFilms = films?.map(film => {
    if (!film || !film.title) return;

    return (
      <FilmStatistics key={film.id} filmId={film.id} filmTitle={film.title} />
    );
  });

  const renderedContent = [
    areFilmsLoading && <div>Loading</div>,
    (!films || isLoadingError) && <div>Error</div>,
    renderedFilms
  ].filter(Boolean);

  return <AppContainer>{renderedContent}</AppContainer>;
};

export default App;
