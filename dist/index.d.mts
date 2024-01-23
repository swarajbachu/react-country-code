declare const _default: ({
    name: string;
    capital: string;
    area: number;
    coordinates: number[];
    currencies: {
        name: string;
        symbol: string;
    }[];
    languages: string[];
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    postalCode: {
        format: string;
        regex: string;
    };
    flags: {
        png: string;
        svg: string;
    };
    population: number;
    emoji: string;
    countryCallingCode: string;
} | {
    name: string;
    capital: string;
    currencies: {
        name: string;
        symbol: string;
    }[];
    languages: string[];
    coordinates: number[];
    area: number;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    flags: {
        png: string;
        svg: string;
    };
    emoji: string;
    countryCallingCode: string;
    postalCode?: undefined;
} | {
    name: string;
    capital: string;
    currencies: {
        name: string;
    }[];
    languages: string[];
    coordinates: number[];
    area: number;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    postalCode: {
        format: string;
        regex: string;
    };
    flags: {
        png: string;
        svg: string;
    };
    emoji: string;
    countryCallingCode: string;
} | {
    name: string;
    capital: string;
    currencies: {
        name: string;
        symbol: string;
    }[];
    languages: string[];
    coordinates: number[];
    area: number;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    postalCode: {
        format: string;
        regex?: undefined;
    };
    flags: {
        png: string;
        svg: string;
    };
    emoji: string;
    countryCallingCode: string;
})[];

type typeCountries = (typeof _default);
declare const useCountries: () => {
    countries: ({
        name: string;
        capital: string;
        area: number;
        coordinates: number[];
        currencies: {
            name: string;
            symbol: string;
        }[];
        languages: string[];
        maps: {
            googleMaps: string;
            openStreetMaps: string;
        };
        postalCode: {
            format: string;
            regex: string;
        };
        flags: {
            png: string;
            svg: string;
        };
        population: number;
        emoji: string;
        countryCallingCode: string;
    } | {
        name: string;
        capital: string;
        currencies: {
            name: string;
            symbol: string;
        }[];
        languages: string[];
        coordinates: number[];
        area: number;
        maps: {
            googleMaps: string;
            openStreetMaps: string;
        };
        population: number;
        flags: {
            png: string;
            svg: string;
        };
        emoji: string;
        countryCallingCode: string;
        postalCode?: undefined;
    } | {
        name: string;
        capital: string;
        currencies: {
            name: string;
        }[];
        languages: string[];
        coordinates: number[];
        area: number;
        maps: {
            googleMaps: string;
            openStreetMaps: string;
        };
        population: number;
        postalCode: {
            format: string;
            regex: string;
        };
        flags: {
            png: string;
            svg: string;
        };
        emoji: string;
        countryCallingCode: string;
    } | {
        name: string;
        capital: string;
        currencies: {
            name: string;
            symbol: string;
        }[];
        languages: string[];
        coordinates: number[];
        area: number;
        maps: {
            googleMaps: string;
            openStreetMaps: string;
        };
        population: number;
        postalCode: {
            format: string;
            regex?: undefined;
        };
        flags: {
            png: string;
            svg: string;
        };
        emoji: string;
        countryCallingCode: string;
    })[];
};

export { type typeCountries, useCountries };
