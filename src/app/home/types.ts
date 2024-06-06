import React from 'react';

export interface TabsProps {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}
export type InputProps = {
  onChangeText?: any;
  value?: any;
};
export interface ImageDetails {
  publicId: string;
  url: string;
}

export interface Animal {
  id: number;
  name: string;
  color: string;
  imageDetails: ImageDetails | null;
  healthHistory: any[];
}
