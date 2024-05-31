import React from 'react';

export interface TabsProps {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}
