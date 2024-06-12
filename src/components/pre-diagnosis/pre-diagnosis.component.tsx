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
interface AnalyzedDataProps {
  analyzedData: AnalyzedData;
}
const PreDiagnosis = ({ analyzedData }: AnalyzedDataProps) => {
  const formatConfidence = (value: number) => {
    const roundedValue = value.toFixed(2);
    return roundedValue.toString().slice(0, 2);
  };
  const isHealthy = analyzedData.predictedClass.toLowerCase() === 'healthy';
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
        <NameDiagnosisText predictedClass={isHealthy}>
          {isHealthy ? 'Saudável' : 'Catarata'}
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
          <AccuracyText predictedClass={isHealthy}>
            {formatConfidence(analyzedData.confidence)}
          </AccuracyText>
          <PorcentText predictedClass={isHealthy}>%</PorcentText>
        </AccuracyContent>
      </AccuracyBox>
    </Container>
  );
};

export default PreDiagnosis;
