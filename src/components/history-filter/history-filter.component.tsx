import React, { useState } from 'react';
import { Filter, FilterContainer, TextFilter } from './styles';
import { useTranslation } from 'react-i18next';

const HistoryFilter = ({ onSelectFilter }: any) => {
  const { t } = useTranslation('history');
  const [activeFilter, setActiveFilter] = useState<string>('Hoje');

  const handleFilterClick = (filterType: string) => {
    setActiveFilter(filterType);
    onSelectFilter(filterType);
  };

  return (
    <FilterContainer>
      {[t('today'), t('weekly'), t('monthly'), t('all')].map((item) => (
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
