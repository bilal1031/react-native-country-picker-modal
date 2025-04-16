"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryModal = void 0;
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const AnimatedModal_1 = require("./AnimatedModal");
const Modal_1 = require("./Modal");
const CountryTheme_1 = require("./CountryTheme");
const CountryModalProvider_1 = require("./CountryModalProvider");
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
const CountryModal = (_a) => {
    var { children, withModal = true, disableNativeModal = false } = _a, props = __rest(_a, ["children", "withModal", "disableNativeModal"]);
    const { backgroundColor } = (0, CountryTheme_1.useTheme)();
    const { teleport } = React.useContext(CountryModalProvider_1.CountryModalContext);
    const content = (React.createElement(react_native_1.SafeAreaView, { style: [styles.container, { backgroundColor }] }, children));
    React.useEffect(() => {
        if (disableNativeModal) {
            teleport(React.createElement(AnimatedModal_1.AnimatedModal, Object.assign({}, props), content));
        }
    }, [disableNativeModal]);
    if (withModal) {
        if (react_native_1.Platform.OS === 'web') {
            return React.createElement(Modal_1.Modal, Object.assign({}, props), content);
        }
        if (disableNativeModal) {
            return null;
        }
        return React.createElement(Modal_1.Modal, Object.assign({}, props), content);
    }
    return content;
};
exports.CountryModal = CountryModal;
