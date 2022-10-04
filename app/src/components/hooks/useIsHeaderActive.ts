import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useIsHeaderActive = () => {
  const [actualPath, setActualPath] = useState(window.location.pathname)
  const location = useLocation()
  useEffect(() => console.log({ location: location.pathname }), [location])

  return actualPath
}

export default useIsHeaderActive
