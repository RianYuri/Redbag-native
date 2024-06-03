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

const CheckHistoric = () => {
  return (
    <ContentHistoric>
      <HistoricResults>
        <TextAnalysis>Catarata</TextAnalysis>
        <TextPorcent>95%</TextPorcent>
      </HistoricResults>
      <CheckAnalyzeContent>
        <TextDateAnalyze>25/10/2023</TextDateAnalyze>
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
