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
export interface AnimalHistoriesProps {
  dateAnalysis: string;
  animalName: string;
  predictClass: string;
  accuracy: number;
  animalImage: string | null;
  animalId: number;
  color: string;
  hasSkeleton: boolean;
}

export interface CheckHistoricProps {
  predictClass: string;
  accurancy: number;
  healthHistoryId: number;
  animalIdInt: any;
  dateAnalysis: string;
}
