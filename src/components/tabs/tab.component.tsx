import { Image, Keyboard, TouchableOpacity } from 'react-native';
import { BoxTabs, Container } from './styles';
import React from 'react';
import { tabsList } from '@/data/tabsList';
import { TabsProps } from '@/app/home/types';
import AnalysisIconActive from '@/assets/analysisActive.svg';
import AnalysisIconNoActive from '@/assets/analysisNoActive.svg';
import HomeIconActive from '@/assets/homeIcon.svg';
import HomeIconNoActive from '@/assets/homeIconNoActive.svg';
import ProntuarioActive from '@/assets/prontuarioIcon.svg';
import ProntuarioNoActive from '@/assets/prontuarioIconNoActive.svg';

const Tab = ({ selectedTab, setSelectedTab }: TabsProps) => {
  const getIconSource = (icon: string, isSelect?: boolean) => {
    switch (icon) {
      case 'home':
        return isSelect ? <HomeIconActive /> : <HomeIconNoActive />;
      case 'analysis':
        return isSelect ? <AnalysisIconActive /> : <AnalysisIconNoActive />;
      case 'prontuario':
        return isSelect ? <ProntuarioActive /> : <ProntuarioNoActive />;

      default:
        return;
    }
  };
  const [keyboardVisible, setKeyboardVisible] = React.useState(true);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(true);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return keyboardVisible ? (
    <Container>
      {tabsList.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          onPress={() => setSelectedTab(tab.name)}
        >
          <BoxTabs isSelect={selectedTab === tab.name}>
            {getIconSource(tab.icon, selectedTab === tab.name)}
          </BoxTabs>
        </TouchableOpacity>
      ))}
    </Container>
  ) : null;
};

export default Tab;
