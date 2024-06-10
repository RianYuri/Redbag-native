import React from 'react';
import {
  BoxViewAnalyze,
  BoxViewAnalyzeContent,
  CheckAnalyzeContent,
  ContentHistoric,
  DividerMin,
  HistoricResults,
  LineTime,
  LineViewContent,
  TextAnalysis,
  TextDateAnalyze,
  TextPorcent,
} from './style';
import EyeIcon from '@/assets/eyeAnalyzeIcon.svg';
import { router } from 'expo-router';
import { CheckHistoricProps } from '@/app/home/types';

const CheckHistoric = ({
  predictClass,
  accurancy,
  dateAnalysis,
}: CheckHistoricProps) => {
  const formatConfidence = (value: number) => {
    const roundedValue = value?.toFixed(2);
    return roundedValue.toString().slice(0, 2);
  };
  const formatDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <ContentHistoric>
      <HistoricResults>
        <TextAnalysis predictedClass={predictClass === 'UNHEALTHY'}>
          {predictClass === 'UNHEALTHY' ? 'Saudavel' : 'Catarata'}
        </TextAnalysis>
        <TextPorcent>{formatConfidence(accurancy)}%</TextPorcent>
      </HistoricResults>
      <CheckAnalyzeContent>
        <TextDateAnalyze>{formatDate(dateAnalysis)}</TextDateAnalyze>
        <LineViewContent>
          <BoxViewAnalyzeContent
            onPress={() => router.push('/complete-analysis/')}
          >
            <BoxViewAnalyze>
              <EyeIcon />
            </BoxViewAnalyze>
          </BoxViewAnalyzeContent>
          <LineTime />
        </LineViewContent>
      </CheckAnalyzeContent>
      <DividerMin />
    </ContentHistoric>
  );
};

export default React.memo(CheckHistoric);
