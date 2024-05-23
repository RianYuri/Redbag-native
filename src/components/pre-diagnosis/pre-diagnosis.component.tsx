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

const PreDiagnosis = () => {
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
        <NameDiagnosisText>Catarata </NameDiagnosisText>
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
          <AccuracyText>93</AccuracyText>
          <PorcentText>%</PorcentText>
        </AccuracyContent>
      </AccuracyBox>
    </Container>
  );
};

export default PreDiagnosis;
