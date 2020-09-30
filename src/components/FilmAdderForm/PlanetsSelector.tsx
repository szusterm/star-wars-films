import {SelectedPlanetsContainer} from './styled';
import SuggestionInput from '../SuggestionInput';
import SelectedItem from '../SelectedItem';
import {Planet} from '../../types';
import React from 'react';

type PlanetsSelectorProps = {
  searchText?: string;
  onSearchTextChange?: (newText: string) => void;
  selectedPlanets: Planet[];
  availablePlanets: Planet[];
  onChangePlanets: (planets: Planet[]) => void;
};

const PlanetsSelector: React.FC<PlanetsSelectorProps> = ({
  searchText,
  onSearchTextChange,
  selectedPlanets,
  availablePlanets,
  onChangePlanets
}) => {
  const addSelectedPlanet = (newPlanet: Planet) =>
    onChangePlanets && onChangePlanets([...selectedPlanets, newPlanet]);
  const removeSelectedTag = (planetToRemove: Planet) =>
    onChangePlanets &&
    onChangePlanets(
      selectedPlanets.filter(planet => planet !== planetToRemove)
    );

  return (
    <>
      <SelectedPlanetsContainer>
        {selectedPlanets.map(planet => (
          <SelectedItem
            key={planet.id}
            onRemoveRequest={() => removeSelectedTag(planet)}
          >
            {planet.name}
          </SelectedItem>
        ))}
      </SelectedPlanetsContainer>

      <SuggestionInput
        value={searchText}
        onValueChange={onSearchTextChange}
        suggestions={availablePlanets}
        onSelectSuggestion={addSelectedPlanet}
        mapSuggestionValue={mapPlanetName}
        inputProps={{
          label: 'Add planet',
          placeholder: 'Search for the the planet in database'
        }}
      />
    </>
  );
};

const mapPlanetName = (planet: Planet): string => planet.name || '';

export default PlanetsSelector;
