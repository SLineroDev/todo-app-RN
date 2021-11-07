import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function TrashSvg(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" width={24} height={24} fill="#000000" {...props} >
      <Path d="M10 2L9 3H4v2h1v15c0 .522.191 1.055.568 1.432.377.377.91.568 1.432.568h10c.522 0 1.055-.191 1.432-.568.377-.377.568-.91.568-1.432V5h1V3h-5l-1-1h-4zM7 5h10v15H7V5zm2 2v11h2V7H9zm4 0v11h2V7h-2z" />
    </Svg>
  )
}

export default TrashSvg