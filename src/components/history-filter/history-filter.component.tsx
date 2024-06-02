import React from 'react';
import { Filter, FilterContainer, TextFilter } from './styles';
const HistoryFilter = () => {
  const filterList = ['Hoje', 'Semanal', 'Mensal', 'Todos'];
  return (
    <FilterContainer>
      {filterList.map((item) => (
        <Filter key={item}>
          <TextFilter>{item}</TextFilter>
        </Filter>
      ))}
    </FilterContainer>
  );
};

export default React.memo(HistoryFilter);
