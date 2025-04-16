import React from 'react';
import { CountryProvider, DEFAULT_COUNTRY_CONTEXT } from './CountryContext';
import { ThemeProvider, DEFAULT_THEME } from './CountryTheme';
import { CountryPicker } from './CountryPicker';
const Main = ({ theme, translation, onSelect = () => { }, withEmoji = true, ...props }) => {
    return (React.createElement(ThemeProvider, { theme: { ...DEFAULT_THEME, ...theme } },
        React.createElement(CountryProvider, { value: { ...DEFAULT_COUNTRY_CONTEXT, translation } },
            React.createElement(CountryPicker, { ...props, onSelect: onSelect, withEmoji: withEmoji }))));
};
export default Main;
export { getCountriesAsync as getAllCountries, getCountryCallingCodeAsync as getCallingCode, } from './CountryService';
export { CountryModal } from './CountryModal';
export { DARK_THEME, DEFAULT_THEME } from './CountryTheme';
export { CountryFilter } from './CountryFilter';
export { CountryList } from './CountryList';
export { FlagButton } from './FlagButton';
export { Flag } from './Flag';
export { HeaderModal } from './HeaderModal';
export { CountryModalProvider } from './CountryModalProvider';
export * from './types';
//# sourceMappingURL=index.js.map