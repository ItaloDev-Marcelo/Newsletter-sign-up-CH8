import { useLayoutEffect, useState } from "react";

export default function UseLayout() {
    const [windowSize, setWindowSize] = useState(0);

    function WindowResize() {
       setWindowSize(window.visualViewport.width)
    }

    useLayoutEffect(() => {
      WindowResize()

      window.addEventListener('resize', WindowResize);

      return  () => {
        window.removeEventListener('resize', WindowResize)
      }
    }, [])

    return windowSize
}