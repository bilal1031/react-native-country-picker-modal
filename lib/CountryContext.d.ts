import * as React from 'react';
import { TranslationLanguageCode } from './types';
import { getEmojiFlagAsync, getImageFlagAsync, getCountryNameAsync, getCountriesAsync, getLetters, getCountryCallingCodeAsync, getCountryCurrencyAsync, getCountryInfoAsync, search } from './CountryService';
export interface CountryContextParam {
    translation?: TranslationLanguageCode;
    getCountryNameAsync: typeof getCountryNameAsync;
    getImageFlagAsync: typeof getImageFlagAsync;
    getEmojiFlagAsync: typeof getEmojiFlagAsync;
    getCountriesAsync: typeof getCountriesAsync;
    getLetters: typeof getLetters;
    getCountryCallingCodeAsync: typeof getCountryCallingCodeAsync;
    getCountryCurrencyAsync: typeof getCountryCurrencyAsync;
    search: typeof search;
    getCountryInfoAsync: typeof getCountryInfoAsync;
}
export declare const DEFAULT_COUNTRY_CONTEXT: {
    translation: TranslationLanguageCode;
    getCountryNameAsync: (countryCode?: import("./types").CountryCode, translation?: TranslationLanguageCode) => Promise<string>;
    getImageFlagAsync: (countryCode?: import("./types").CountryCode) => Promise<string>;
    getEmojiFlagAsync: (countryCode?: import("./types").CountryCode) => Promise<string>;
    getCountriesAsync: (flagType: import("./types").FlagType, translation?: TranslationLanguageCode, region?: import("./types").Region, subregion?: import("./types").Subregion, countryCodes?: import("./types").CountryCode[], excludeCountries?: import("./types").CountryCode[], preferredCountries?: import("./types").CountryCode[], withAlphaFilter?: boolean) => Promise<import("./types").Country[]>;
    getCountryCallingCodeAsync: (countryCode: import("./types").CountryCode) => Promise<string>;
    getCountryCurrencyAsync: (countryCode: import("./types").CountryCode) => Promise<string>;
    search: (filter?: string, data?: import("./types").Country[], options?: Fuse.FuseOptions<import("./types").Country>) => import("./types").Country[];
    getLetters: (countries: import("./types").Country[]) => string[];
    getCountryInfoAsync: ({ countryCode, translation, }: {
        countryCode: import("./types").CountryCode;
        translation?: TranslationLanguageCode;
    }) => Promise<import("./CountryService").CountryInfo>;
};
export declare const CountryContext: React.Context<CountryContextParam>;
export declare const useContext: () => CountryContextParam;
export declare const CountryProvider: React.Provider<CountryContextParam>, CountryConsumer: React.Consumer<CountryContextParam>;
