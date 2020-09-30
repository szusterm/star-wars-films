import {GET_PLANETS_FROM_FILM, PlanetsFromFilmData} from '../../api';
import {useLazyQuery} from '@apollo/client';
import CollapsedBox from '../CollapsedBox';
import {Root} from '../../types';
import React from 'react';

type FilmStatisticsProps = {
  filmId: string;
  filmTitle: string;
};

const FilmStatistics: React.FC<FilmStatisticsProps> = ({filmId, filmTitle}) => {
  const [
    fetchPlanets,
    {data: responseData, error: isLoadingError, loading: arePlanetsLoading}
  ] = useLazyQuery<Root, PlanetsFromFilmData>(GET_PLANETS_FROM_FILM, {
    variables: {filmId}
  });

  const {planets} = responseData?.film?.planetConnection || {};

  const renderedFilms = planets?.map(planet => {
    if (!planet) return;
    return Object.entries(planet).map(([key, value]) => `${key}: ${value}`);
  });

  const renderedContent = [
    arePlanetsLoading && <div>Loading</div>,
    (!planets || isLoadingError) && <div>Error</div>,
    renderedFilms
  ].find(Boolean);

  return (
    <CollapsedBox title={filmTitle} onOpen={fetchPlanets}>
      {renderedContent}
    </CollapsedBox>
  );
};

export default FilmStatistics;
