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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flag = void 0;
const React = __importStar(require("react"));
const Emoji_1 = require("./Emoji");
const react_async_hook_1 = require("react-async-hook");
const react_native_1 = require("react-native");
const CountryContext_1 = require("./CountryContext");
const styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        marginRight: 10,
    },
    emojiFlag: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1 / react_native_1.PixelRatio.get(),
        borderColor: 'transparent',
        backgroundColor: 'transparent',
    },
    imageFlag: {
        resizeMode: 'contain',
        width: 25,
        height: 19,
        borderWidth: 1 / react_native_1.PixelRatio.get(),
        opacity: 0.8,
    },
});
const ImageFlag = React.memo(({ countryCode, flagSize }) => {
    const { getImageFlagAsync } = (0, CountryContext_1.useContext)();
    const { loading, result } = (0, react_async_hook_1.useAsync)(getImageFlagAsync, [countryCode]);
    if (loading || !result) {
        return React.createElement(react_native_1.ActivityIndicator, { size: 'small' });
    }
    return React.createElement(react_native_1.Image, {
        style: [styles.imageFlag, { borderColor: 'transparent', height: flagSize }],
        source: { uri: result },
    });
});
const EmojiFlag = React.memo(({ countryCode, flagSize }) => {
    const { getEmojiFlagAsync } = (0, CountryContext_1.useContext)();
    const { loading, result } = (0, react_async_hook_1.useAsync)(getEmojiFlagAsync, [countryCode]);
    if (loading || !result) {
        return React.createElement(react_native_1.ActivityIndicator, { size: 'small' });
    }
    return React.createElement(react_native_1.Text, {
        style: [styles.emojiFlag, { fontSize: flagSize }],
        allowFontScaling: false,
    }, React.createElement(Emoji_1.Emoji, { name: result }));
});
exports.Flag = React.memo(({ countryCode, withEmoji = true, withFlagButton = true, flagSize, }) => {
    if (!withFlagButton) {
        return null;
    }
    return React.createElement(react_native_1.View, { style: styles.container }, withEmoji
        ? React.createElement(EmojiFlag, {
            countryCode,
            flagSize,
            withEmoji,
            withFlagButton,
        })
        : React.createElement(ImageFlag, {
            countryCode,
            flagSize,
            withEmoji,
            withFlagButton,
        }));
});
