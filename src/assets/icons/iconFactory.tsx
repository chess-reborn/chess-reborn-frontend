import React from "react"
import { useTheme } from "styled-components"

type IconProps = {
  fill?: string
  width?: number
  height?: number
}

const iconFactory = (svgViewBox: string, svgPath: string) => (
  ({ fill, width, height }: IconProps) => {
    const { colors, metrics } = useTheme();

    return (
      <svg viewBox={svgViewBox} width={width || metrics.text} height={height || metrics.text}>
        <path d={svgPath} fill={fill || colors.text} />
      </svg>
    );
  }
)

export default iconFactory