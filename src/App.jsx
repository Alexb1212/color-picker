import { useState } from "react";

import ColorButton from "./ColorButton";

const App = () => {
  const [slectedColor, setSelectedColor] = useState("")

  return (
    <>
    <ColorButton colorName="red" setSelectedColor={setSelectedColor}/>
    <ColorButton colorName="white" setSelectedColor={setSelectedColor}/>
    <ColorButton colorName="blue" setSelectedColor={setSelectedColor}/>
    </>
  )
}

export default App
