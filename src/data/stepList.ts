import { StepListProps } from '@/app/step-by-step/_types';
import { useTranslation } from 'react-i18next';
const { t } = useTranslation('step-by-step');

export const stepList: StepListProps[] = [
  {
    text: t('textMenuHome'),
  },
  {
    text: t('textMenuAnalysis'),
  },
  {
    text: t('textMenuRecords'),
  },
  {
    text: t('textMenuSettings'),
  },
];
