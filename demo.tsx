import React from "react";
import { useCountries } from "./dist";

export default function demo() {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  let currentCountry:any = {};
  if (countries) {
     currentCountry = countries[country];
  }
 
  // You can further destructure the properties if needed
  const { name, flags, countryCallingCode } = currentCountry;

  return <div></div>;
}
