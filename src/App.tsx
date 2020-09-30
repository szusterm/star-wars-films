import CustomFilmStatistics from './components/CustomFilmStatistics';
import FilmStatistics from './components/FilmStatistics';
import DashedDivider from './components/DashedDivider';
import FilmAdderForm from './components/FilmAdderForm';
import AppContainer from './components/AppContainer';
import CollapsedBox from './components/CollapsedBox';
import {useCustomFilms} from './utils/customFilms';
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

  const customFilms = useCustomFilms();

  const renderedFilms = films?.map(film => {
    if (!film?.title) return;

    return (
      <FilmStatistics key={film.id} filmId={film.id} filmTitle={film.title} />
    );
  });

  const renderedContent = [
    areFilmsLoading && <div>Loading</div>,
    (!films || isLoadingError) && <div>Error</div>,
    renderedFilms
  ].find(Boolean);

  return (
    <AppContainer>
      {renderedContent}
      {customFilms.map(film => (
        <CustomFilmStatistics key={film.id} film={film} />
      ))}
      <DashedDivider />
      <CollapsedBox title="Add movie">
        <FilmAdderForm />
      </CollapsedBox>
    </AppContainer>
  );
};

export default App;
