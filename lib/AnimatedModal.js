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
exports.AnimatedModal = void 0;
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const { height } = react_native_1.Dimensions.get('window');
const duration = 300;
const useNativeDriver = true;
const AnimatedModal = ({ children, visible = false }) => {
    const translateY = new react_native_1.Animated.Value(height);
    const showModal = react_native_1.Animated.timing(translateY, {
        toValue: 0,
        duration,
        useNativeDriver,
    }).start;
    const hideModal = react_native_1.Animated.timing(translateY, {
        toValue: height,
        duration,
        useNativeDriver,
    }).start;
    React.useEffect(() => {
        if (visible) {
            showModal();
        }
        else {
            hideModal();
        }
    }, [visible]);
    return (React.createElement(react_native_1.Animated.View, { style: Object.assign(Object.assign({}, react_native_1.StyleSheet.absoluteFillObject), { transform: [{ translateY }], zIndex: 99 }) }, children));
};
exports.AnimatedModal = AnimatedModal;
