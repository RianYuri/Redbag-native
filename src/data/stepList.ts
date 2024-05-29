import { StepListProps } from '@/app/step-by-step/types';
const HomeIcon = require('@/assets/homeIcon.png');
const AnalysisIcon = require('@/assets/analysisIcon.png');
const ProntuarioIcon = require('@/assets/prontuarioIcon.png');
const SettingIcon = require('@/assets/settingsIcon.png');

export const stepList: StepListProps[] = [
  {
    icon: HomeIcon,
    text: 'Clique no menu “Página inicial” para visualizar os dados gerais das suas análises.',
  },
  {
    icon: AnalysisIcon,
    text: 'Clique no menu “Análises” para realizar uma nova análise do seu animal.',
  },
  {
    icon: ProntuarioIcon,
    text: 'Clique no menu “Prontuários” para visualizar seu histórico de análise e seus prontuários digitais.',
  },
  {
    icon: SettingIcon,
    text: 'Clique no menu “Ajustes” para aplicar alterações em seu perfil, suporte e encerrar sua conta.',
  },
];
