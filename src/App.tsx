import CustomFilmStatistics from './containers/CustomFilmStatistics';
import LoadingBox from './components/LoadingBox/LoadingBox';
import FilmStatistics from './containers/FilmStatistics';
import FilmAdderForm from './containers/FilmAdderForm';
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

  return (
    <AppContainer>
      <AppContainer.Section>
        {areFilmsLoading && <LoadingBox bigger />}
        {isLoadingError && <div>Error</div>}

        {films?.map(film => {
          if (!film?.title) return;

          return (
            <FilmStatistics
              key={film.id}
              filmId={film.id}
              filmTitle={film.title}
            />
          );
        })}
        {customFilms.map(film => (
          <CustomFilmStatistics key={film.id} film={film} />
        ))}
      </AppContainer.Section>

      <AppContainer.Section>
        <CollapsedBox title="Add movie">
          <FilmAdderForm />
        </CollapsedBox>
      </AppContainer.Section>
    </AppContainer>
  );
};

export default App;
