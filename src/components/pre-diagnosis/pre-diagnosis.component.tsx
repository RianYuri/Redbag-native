import { AnalyzedData } from '@/context/analysis-image';
import {
  AccuracyBox,
  AccuracyContent,
  AccuracyText,
  AssertivenessText,
  Container,
  NameDiagnosisText,
  PorcentText,
  PreDiagnosisBox,
  PreDiagnosisText,
} from './styles';

const PreDiagnosis = (analyzedData: any) => {
  const formatConfidence = (value: number) => {
    const roundedValue = value.toFixed(2);
    return roundedValue.toString().slice(0, 2);
  };
  return (
    <Container>
      <PreDiagnosisBox
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 3,
        }}
      >
        <PreDiagnosisText>Pré-diagnóstico</PreDiagnosisText>
        <NameDiagnosisText
          predictedClass={analyzedData.predictedClass === 'healthy'}
        >
          {analyzedData.predictedClass === 'healthy' ? 'Catarata' : 'Saudável'}
        </NameDiagnosisText>
      </PreDiagnosisBox>
      <AccuracyBox
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <AssertivenessText>Assertividade</AssertivenessText>
        <AccuracyContent>
          <AccuracyText
            predictedClass={analyzedData.predictedClass === 'healthy'}
          >
            {formatConfidence(analyzedData.confidence)}
          </AccuracyText>
          <PorcentText>%</PorcentText>
        </AccuracyContent>
      </AccuracyBox>
    </Container>
  );
};

export default PreDiagnosis;
