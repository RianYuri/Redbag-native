export interface ColorProps {
  color: string;
}
export type HandleLibraryProps = {
  handleLibraryUpload: (type: string | null) => void;
  setSelectedImage: any;
  setHasCamera: any;
  hasCamera: boolean;
};
