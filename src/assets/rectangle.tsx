import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Rectangle = ({transform}:any ) => {
  return (
    <Svg
      width={428}
      height={139}
      viewBox="0 0 428 139"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M304.357 54.921l-1.871-1.225H125.602l-1.823 1.138L8.265 126.957c-.137.086-.209.088-.245.089a.561.561 0 01-.262-.076.55.55 0 01-.204-.183c-.018-.03-.054-.093-.054-.254v-705.614h413v709.13c0 .166-.037.228-.055.257a.55.55 0 01-.207.183.552.552 0 01-.267.073c-.034-.001-.106-.004-.245-.095L304.357 54.921z"
        fill="#9D2D15"
        stroke="#9D2D15"
        strokeWidth={15}
        transform={transform}
      />
    </Svg>
  )
}

export default Rectangle;
