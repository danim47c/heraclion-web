import { useEffect, useState } from "react"
import throttle from "lodash/throttle"

const useScrollCondition = (condition: (y: number) => boolean) => {
  const [result, setResult] = useState(false)

  useEffect(() => {
    const func = throttle(() => {
      const newResult = condition(window.pageYOffset)

      if (newResult !== result) setResult(newResult)
    }, 50)

    window.addEventListener("scroll", func)

    return () => window.removeEventListener("scroll", func)
  }, [result, condition])

  return result
}

export default useScrollCondition
