import { useState } from "react";
import defaultCountries from "./src/countries";

export type typeCountries = (typeof defaultCountries);

export const useCountries = () => {
  const countries:typeCountries = (defaultCountries);

  return { countries };
};
