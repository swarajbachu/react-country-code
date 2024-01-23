import { useState } from "react";
import defaultCountries from "./src/countries";

export type typeCountries = (typeof defaultCountries);

export const useCountries = () => {
  const countries:typeCountries = (defaultCountries);
  countries.sort((a, b) => a.name.localeCompare(b.name));

  return { countries };
};
