import React, { createContext, useState, ReactNode, useContext } from 'react';

interface ImageContextType {
  analyzedImage: string | null;
  setAnalyzedImage: (image: string | null) => void;
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
  const [analyzedImage, setAnalyzedImage] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ analyzedImage, setAnalyzedImage }}>
      {children}
    </ImageContext.Provider>
  );
};
