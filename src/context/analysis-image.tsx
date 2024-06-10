import React, { createContext, useState, ReactNode, useContext } from 'react';

export interface AnalyzedData {
  analyzedImage: any;
  predictedClass: string;
  confidence: number;
  nameAnimal?: string;
  animalId?: number | null;
}

interface ImageContextType {
  analyzedData: AnalyzedData;
  setAnalyzedData: (data: Partial<AnalyzedData>) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [analyzedData, setAnalyzedDataState] = useState<AnalyzedData>({
    analyzedImage: null,
    predictedClass: '',
    confidence: 0,
    nameAnimal: '',
    animalId: null,
  });

  const setAnalyzedData = (data: Partial<AnalyzedData>) => {
    setAnalyzedDataState((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <ImageContext.Provider value={{ analyzedData, setAnalyzedData }}>
      {children}
    </ImageContext.Provider>
  );
};
