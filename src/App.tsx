import CustomFilmStatistics from './containers/CustomFilmStatistics';
import FilmStatistics from './containers/FilmStatistics';
import FilmAdderForm from './containers/FilmAdderForm';
import {useCustomFilms} from './services/customFilms';
import AppContainer from './components/AppContainer';
import CollapsedBox from './components/CollapsedBox';
import LoadingBox from './components/LoadingBox';
import {GET_FILMS_LIST} from './services/api';
import InfoBox from './components/InfoBox';
import {useQuery} from '@apollo/client';
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
        {isLoadingError && <InfoBox>Movie loading error</InfoBox>}

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

        {customFilms.map((film, index) => (
          <CustomFilmStatistics key={`${index}${film?.title}`} film={film} />
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
