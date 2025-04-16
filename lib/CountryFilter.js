"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryFilter = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CountryTheme_1 = require("./CountryTheme");
const styles = react_native_1.StyleSheet.create({
    input: Object.assign({ height: 48, width: '70%' }, react_native_1.Platform.select({
        web: {
            outlineWidth: 0,
            outlineColor: 'transparent',
            outlineOffset: 0,
        },
    })),
});
const CountryFilter = (_a) => {
    var { autoFocus = false, placeholder = 'Enter country name' } = _a, props = __rest(_a, ["autoFocus", "placeholder"]);
    const { filterPlaceholderTextColor, fontFamily, fontSize, onBackgroundTextColor, } = (0, CountryTheme_1.useTheme)();
    return (react_1.default.createElement(react_native_1.TextInput, Object.assign({ testID: 'text-input-country-filter', autoCorrect: false, placeholderTextColor: filterPlaceholderTextColor, style: [
            styles.input,
            { fontFamily, fontSize, color: onBackgroundTextColor },
        ], autoFocus: autoFocus, placeholder: placeholder }, props)));
};
exports.CountryFilter = CountryFilter;
