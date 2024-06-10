export type AnalysisProps = {
  handlePredictAnimal: () => void;
  handleListAnimal: () => void;
  handleLibraryUpload: (type: string) => void;
  isOpen: boolean;
  selectedImage: any;
};
export type DropdownCreateAnimalProps = {
  handleListAnimal: () => void;
  isOpen: boolean;
};

export interface SelectedAnimalProps {
  id: number | null;
  name: string;
  color: string;
}
