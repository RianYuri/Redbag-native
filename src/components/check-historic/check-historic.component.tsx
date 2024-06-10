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
import { formatDate } from '@/utils/format-date/format-date';

const CheckHistoric = ({
  predictClass,
  accurancy,
  dateAnalysis,
  healthHistoryId,
  animalIdInt,
}: CheckHistoricProps) => {
  const formatConfidence = (value: number) => {
    const roundedValue = value?.toFixed(2);
    return roundedValue.toString().slice(0, 2);
  };

  return (
    <ContentHistoric>
      <HistoricResults>
        <TextAnalysis predictedClass={predictClass === 'HEALTHY'}>
          {predictClass === 'UNHEALTHY' ? ' Catarata' : 'Saudavel'}
        </TextAnalysis>
        <TextPorcent>{formatConfidence(accurancy)}%</TextPorcent>
      </HistoricResults>
      <CheckAnalyzeContent>
        <TextDateAnalyze>{formatDate(dateAnalysis)}</TextDateAnalyze>
        <LineViewContent>
          <BoxViewAnalyzeContent
            onPress={() =>
              router.push({
                pathname: '/complete-analysis/',
                params: {
                  healthHistoryId,
                  animalIdInt,
                },
              })
            }
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
