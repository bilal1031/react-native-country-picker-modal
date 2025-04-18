import React from 'react';
import { FlatListProps } from 'react-native';
import { Country } from './types';
interface CountryListProps {
    data: Country[];
    filter?: string;
    filterFocus?: boolean;
    withFlag?: boolean;
    withEmoji?: boolean;
    withAlphaFilter?: boolean;
    withCallingCode?: boolean;
    withCurrency?: boolean;
    flatListProps?: FlatListProps<Country>;
    onSelect(country: Country): void;
}
export declare const CountryList: ({ data, withAlphaFilter, withEmoji, withFlag, withCallingCode, withCurrency, onSelect, filter, flatListProps, filterFocus, }: CountryListProps) => React.JSX.Element;
export {};
