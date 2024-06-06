export type AnalysisProps = {
  handleListAnimal: () => void;
  handleLibraryUpload: (type: string) => void;
  isOpen: boolean;
  selectedImage: string | null;
};
export type DropdownCreateAnimalProps = {
  handleListAnimal: () => void;
  isOpen: boolean;
};
