import React, { useState } from 'react';
import { Filter, FilterContainer, TextFilter } from './styles';

const HistoryFilter = ({ onSelectFilter }: any) => {
  const [activeFilter, setActiveFilter] = useState<string>('Hoje');

  const handleFilterClick = (filterType: string) => {
    setActiveFilter(filterType);
    onSelectFilter(filterType);
  };

  return (
    <FilterContainer>
      {['Hoje', 'Semanal', 'Mensal', 'Todos'].map((item) => (
        <Filter
          key={item}
          isActive={activeFilter === item}
          onPress={() => handleFilterClick(item)}
        >
          <TextFilter isActive={activeFilter === item}>{item}</TextFilter>
        </Filter>
      ))}
    </FilterContainer>
  );
};

export default HistoryFilter;
