import {SubmitContainer, SubmitButton, Container} from './styled';
import {isFirstLetterUpperCase} from '../../utils/string';
import {MIN_FILM_TITLE_LENGTH} from '../../constants';
import {addCustomFilm} from '../../utils/customFilms';
import {useDebouncedState} from '../../utils/hooks';
import PlanetsSelector from './PlanetsSelector';
import React, {useState, useMemo} from 'react';
import {GET_PLANETS_LIST} from '../../api';
import {Planet, Root} from '../../types';
import {useQuery} from '@apollo/client';
import Input from '../Input';

const FIRST_LETTER_UPPER_CASE_MSG =
  'Movie title name must start with a capital letter';
const TITLE_LENGTH_TOO_SHORT_MSG =
  'The title of the movie must be at least 3 characters long';

const FilmAdderForm: React.FC = () => {
  const {
    value: title,
    debounced: dbTitle,
    setValues: setTitles,
    isLoading: isTitleChecking
  } = useDebouncedState('');
  const [planetsSearchText, setPlanetsSearchText] = useState('');

  const [selectedPlanets, setSelectedPlanets] = useState<Planet[]>([]);
  const {data: responseData} = useQuery<Root>(GET_PLANETS_LIST);
  const {planets} = responseData?.allPlanets || {};

  const fetchedPlanets: Planet[] = useMemo(() => {
    if (!planets) return [];
    return planets.filter(Boolean) as Planet[];
  }, [planets]);

  const availablePlanets: Planet[] = useMemo(() => {
    return fetchedPlanets.filter(
      fetchedPlanet =>
        !selectedPlanets.find(
          selectedPlanet => selectedPlanet === fetchedPlanet
        )
    );
  }, [fetchedPlanets, selectedPlanets]);

  const errorText = [
    !isFirstLetterUpperCase(dbTitle) && FIRST_LETTER_UPPER_CASE_MSG,
    dbTitle.length <= MIN_FILM_TITLE_LENGTH && TITLE_LENGTH_TOO_SHORT_MSG
  ].find(Boolean);

  const handleFormSubmit = () => {
    addCustomFilm(title, selectedPlanets);

    setTitles('');
    setPlanetsSearchText('');
    setSelectedPlanets([]);
  };

  return (
    <Container>
      <Input
        id="movieTitle"
        label="Movie title"
        placeholder="Please enter the tittle of the movie"
        value={title}
        onChangeValue={setTitles}
        isError={!!dbTitle.length && !!errorText}
        errorText={errorText}
      />
      <PlanetsSelector
        searchText={planetsSearchText}
        onSearchTextChange={setPlanetsSearchText}
        selectedPlanets={selectedPlanets}
        availablePlanets={availablePlanets}
        onChangePlanets={setSelectedPlanets}
      />
      <SubmitContainer>
        <SubmitButton
          disabled={!dbTitle.length || !!errorText || isTitleChecking}
          onClick={handleFormSubmit}
        >
          ADD FILM
        </SubmitButton>
      </SubmitContainer>
    </Container>
  );
};

export default FilmAdderForm;
