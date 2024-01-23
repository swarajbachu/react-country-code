import { useMemo } from 'react'
import defaultCountries from './src/countries'

export const useCountries = () => {
  let [countries, setCountries] = useMemo(() => {
    return defaultCountries
  },[])

  return { countries, setCountries }
}