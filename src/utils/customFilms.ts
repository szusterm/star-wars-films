import {makeVar, useReactiveVar} from '@apollo/client';
import {Film, Planet} from '../types';

export const CUSTOM_FILMS_STORAGE_KEY = 'CUSTOM_FILMS';

const customFilms = makeVar<Film[]>([]);

export const useCustomFilms = () => useReactiveVar(customFilms);

export const loadCustomFilms = () => {
  const storageData = localStorage.getItem(CUSTOM_FILMS_STORAGE_KEY);
  const loadedFilms: Film[] = storageData ? JSON.parse(storageData) : [];
  customFilms(loadedFilms);
};

export const addCustomFilm = (title: string, planets: Planet[] = []) => {
  const newFilm: Film = {
    id: title,
    title,
    planetConnection: {
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: false
      },
      planets
    }
  };

  const updatedFilms = [...customFilms(), newFilm];

  localStorage.setItem(CUSTOM_FILMS_STORAGE_KEY, JSON.stringify(updatedFilms));
  customFilms(updatedFilms);
};
