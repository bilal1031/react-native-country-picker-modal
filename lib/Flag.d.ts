import * as React from 'react';
import { CountryCode } from './types';
import { View } from 'react-native';
interface FlagType {
    countryCode: CountryCode;
    withEmoji?: boolean;
    withFlagButton?: boolean;
    flagSize: number;
}
export declare const Flag: React.MemoExoticComponent<({ countryCode, withEmoji, withFlagButton, flagSize, }: FlagType) => React.CElement<import("react-native").ViewProps, View> | null>;
export {};
