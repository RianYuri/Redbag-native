import React from 'react';
import { Svg, Path } from 'react-native-svg';

const CatIcon = ({ color }: any) => (
  <Svg
    width="29"
    height="27"
    viewBox="0 0 29 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M8.06921 15.7058V11.9242C8.58992 12.0121 9.11926 12.0569 9.65193 12.0569L19.9407 12.0569C20.4653 12.0569 20.9867 12.0135 21.5 11.9281V15.6158L17.3692 19.5H11.9438L8.06921 15.7058Z"
      fill={color}
      stroke={color}
      strokeWidth={15}
    />
  </Svg>
);

export default CatIcon;
