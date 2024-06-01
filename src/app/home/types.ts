import React from 'react';

export interface TabsProps {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}
export type InputProps = {
  onChangeText?: any;
  value?: any;
};
