import React, { forwardRef } from 'react';
import createCachedSelector from 're-reselect';

var hiddenStyle = {
  position: 'absolute',
  width: 0,
  maxWidth: 0,
  height: 0,
  maxHeight: 0,
  padding: 0,
  overflow: 'hidden'
};
var fullStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: 'hidden'
};

var specColors = {
  black: '#000000',
  white: '#FFFFFF'
};
var sizes = {
  font: {
    xxsm: 12,
    xsm: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xlg: 20,
    xxlg: 20,
    auto: 16
  },
  line: {
    xxsm: 20,
    xsm: 20,
    sm: 22,
    md: 24,
    lg: 26,
    xlg: 28,
    xxlg: 28,
    auto: null
  },
  button: {
    xxsm: 30,
    xsm: 36,
    sm: 42,
    md: 48,
    lg: 54,
    xlg: 60,
    xxlg: 66,
    auto: null
  },
  icon: {
    xxsm: 28,
    xsm: 32,
    sm: 36,
    md: 40,
    lg: 44,
    xlg: 48,
    xxlg: 52,
    auto: null
  },
  item: {
    xxsm: 36,
    xsm: 42,
    sm: 48,
    md: 54,
    lg: 60,
    xlg: 66,
    xxlg: 72,
    auto: null
  },
  divider: {
    xxsm: 0.2,
    xsm: 0.4,
    sm: 0.8,
    md: 1,
    lg: 2,
    xlg: 3,
    xxlg: 4,
    auto: null
  }
};
var fonts = {
  regular: null,
  semi: null,
  bold: null,
  mono: null
};
var shadows = {
  none: null,
  sm: null,
  md: null,
  lg: null
};
var shadowsText = {
  none: null,
  sm: null,
  md: null
};
var getTopShape$1 = function getTopShape(radius) {
  return {
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  };
};
var getBottomShape$1 = function getBottomShape(radius) {
  return {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: radius
  };
};
var getLeftShape$1 = function getLeftShape(radius) {
  return {
    borderTopLeftRadius: radius,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: radius
  };
};
var getRightShape$1 = function getRightShape(radius) {
  return {
    borderTopLeftRadius: 0,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: 0
  };
};
var getShapesForRadius$1 = function getShapesForRadius(radius) {
  return {
    all: {
      borderRadius: radius
    },
    top: getTopShape$1(radius),
    bottom: getBottomShape$1(radius),
    left: getLeftShape$1(radius),
    right: getRightShape$1(radius)
  };
};
var shapes = {
  rounded: getShapesForRadius$1(100),
  xlg: getShapesForRadius$1(12),
  lg: getShapesForRadius$1(8),
  md: getShapesForRadius$1(6),
  sm: getShapesForRadius$1(4)
};
var getTopBorder$1 = function getTopBorder(width) {
  return {
    borderTopWidth: width,
    borderRightWidth: 0,
    borderBottomWidth: width,
    borderLeftWidth: 0,
    borderBottomColor: 'transparent'
  };
};
var getBottomBorder$1 = function getBottomBorder(width) {
  return {
    borderTopWidth: width,
    borderRightWidth: 0,
    borderBottomWidth: width,
    borderLeftWidth: 0,
    borderTopColor: 'transparent'
  };
};
var getLeftBorder$1 = function getLeftBorder(width) {
  return {
    borderTopWidth: 0,
    borderRightWidth: width,
    borderBottomWidth: 0,
    borderLeftWidth: width,
    borderRightColor: 'transparent'
  };
};
var getRightBorder$1 = function getRightBorder(width) {
  return {
    borderTopWidth: 0,
    borderRightWidth: width,
    borderBottomWidth: 0,
    borderLeftWidth: width,
    borderLeftColor: 'transparent'
  };
};
var getBordersForWidth$1 = function getBordersForWidth(width) {
  return {
    all: {
      borderWidth: width
    },
    top: getTopBorder$1(width),
    bottom: getBottomBorder$1(width),
    left: getLeftBorder$1(width),
    right: getRightBorder$1(width)
  };
};
var borders = {
  xlg: getBordersForWidth$1(4),
  lg: getBordersForWidth$1(3),
  md: getBordersForWidth$1(2),
  sm: getBordersForWidth$1(1)
};
var defaultColorSet = {
  text: 'text.primary',
  textHover: 'text.primary',
  textActive: 'text.primary',
  bg: 'bg.primary',
  bgHover: 'bg.primary',
  bgActive: 'bg.primary',
  border: 'transparent',
  borderHover: 'transparent',
  borderActive: 'transparent'
};
var defaultColorSetGhost = {
  text: 'text.primary',
  textHover: 'text.primary',
  textActive: 'text.primary',
  bg: 'bg.primary',
  bgHover: 'bg.primary',
  bgActive: 'bg.primary',
  border: 'text.primary',
  borderHover: 'text.primary',
  borderActive: 'text.primary'
};
var defaultColorSetText = {
  text: 'text.primary',
  textHover: 'text.primary',
  textActive: 'text.primary',
  bg: 'transparent',
  bgHover: 'transparent',
  bgActive: 'transparent',
  border: 'transparent',
  borderHover: 'transparent',
  borderActive: 'transparent'
};
var colorSets = {
  none: {
    text: 'transparent',
    textHover: 'transparent',
    textActive: 'transparent',
    bg: 'transparent',
    bgHover: 'transparent',
    bgActive: 'transparent',
    border: 'transparent',
    borderHover: 'transparent',
    borderActive: 'transparent'
  },
  primary: defaultColorSet,
  primaryghost: defaultColorSetGhost,
  primarytext: defaultColorSetText,
  secondary: defaultColorSet,
  secondaryghost: defaultColorSetGhost,
  secondarytext: defaultColorSetText,
  tertiary: defaultColorSet,
  tertiaryghost: defaultColorSetGhost,
  tertiarytext: defaultColorSetText,
  accent: defaultColorSet,
  accentghost: defaultColorSetGhost,
  accenttext: defaultColorSetText,
  success: defaultColorSet,
  successghost: defaultColorSetGhost,
  successtext: defaultColorSetText,
  warning: defaultColorSet,
  warningghost: defaultColorSetGhost,
  warningtext: defaultColorSetText,
  error: defaultColorSet,
  errorghost: defaultColorSetGhost,
  errortext: defaultColorSetText,
  light: defaultColorSet,
  lightghost: defaultColorSetGhost,
  lighttext: defaultColorSetText,
  grey: defaultColorSet,
  greyghost: defaultColorSetGhost,
  greytext: defaultColorSetText,
  dark: defaultColorSet,
  darkghost: defaultColorSetGhost,
  darktext: defaultColorSetText
};
var defaultTheme = {
  colors: {
    spec: specColors,
    text: {
      primary: specColors.black,
      primaryplus: specColors.black,
      primaryminus: specColors.black,
      primaryalt: specColors.black,
      primaryaltplus: specColors.black,
      primaryaltminus: specColors.black,
      secondary: specColors.black,
      secondaryplus: specColors.black,
      secondaryminus: specColors.black,
      tertiary: specColors.black,
      tertiaryplus: specColors.black,
      tertiaryminus: specColors.black,
      accent: specColors.black,
      accentplus: specColors.black,
      accentminus: specColors.black,
      success: specColors.black,
      successplus: specColors.black,
      successminus: specColors.black,
      warning: specColors.black,
      warningplus: specColors.black,
      warningminus: specColors.black,
      error: specColors.black,
      errorplus: specColors.black,
      errorminus: specColors.black,
      contrast: specColors.black
    },
    bg: {
      primary: specColors.white,
      primaryplus: specColors.white,
      primaryminus: specColors.white,
      primaryalt: specColors.white,
      primaryaltplus: specColors.white,
      primaryaltminus: specColors.white,
      secondary: specColors.white,
      secondaryplus: specColors.white,
      secondaryminus: specColors.white,
      tertiary: specColors.white,
      tertiaryplus: specColors.white,
      tertiaryminus: specColors.white,
      accent: specColors.white,
      accentplus: specColors.white,
      accentminus: specColors.white,
      success: specColors.white,
      successplus: specColors.white,
      successminus: specColors.white,
      warning: specColors.white,
      warningplus: specColors.white,
      warningminus: specColors.white,
      error: specColors.white,
      errorplus: specColors.white,
      errorminus: specColors.white,
      contrast: specColors.white
    }
  },
  fonts: fonts,
  sizes: sizes,
  shadows: shadows,
  shadowsText: shadowsText,
  shapes: shapes,
  borders: borders,
  colorSets: colorSets
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var emptyArray = [];
var emptyObject = {};
var emptyString = '';
// eslint-disable-next-line @typescript-eslint/no-empty-function
var emptyFunction = function emptyFunction() {};
Object.freeze(emptyArray);
Object.freeze(emptyObject);

var useSwitch = function useSwitch(_a) {
  var _b = _a.onChange,
    onChange = _b === void 0 ? null : _b,
    _c = _a.value,
    value = _c === void 0 ? null : _c,
    _d = _a.isDisabled,
    isDisabled = _d === void 0 ? null : _d;
  var _e = React.useState(value || false),
    switchValue = _e[0],
    setSwitchValue = _e[1];
  React.useEffect(function () {
    if (typeof value === 'boolean') {
      setSwitchValue(value);
    }
  }, [value]);
  var toggle = React.useCallback(function () {
    if (isDisabled) {
      return;
    }
    var newSwitchValue = !switchValue;
    setSwitchValue(newSwitchValue);
    if (onChange) {
      onChange(newSwitchValue);
    }
  }, [isDisabled, onChange, switchValue]);
  return {
    switchValue: switchValue,
    toggle: toggle
  };
};

/**
 * Utilize `useCallbackRef` if calling a callback memoized with `React.useCallback` causes changes
 * of its own dependencies which may trigger unwanted renders, for example if the callback is used
 * in a render function.
 */
var useCallbackRef = function useCallbackRef(fn) {
  var selectRef = React.useRef(fn);
  React.useEffect(function () {
    selectRef.current = fn;
  });
  var selectRefMemoized = React.useMemo(function () {
    return function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return selectRef.current.apply(selectRef, args);
    };
  }, []);
  return selectRefMemoized;
};

var useFlag = function useFlag(initialValue) {
  if (initialValue === void 0) {
    initialValue = false;
  }
  var _a = React.useState(initialValue === true),
    isActive = _a[0],
    setIsActive = _a[1];
  var activate = React.useCallback(function () {
    return setIsActive(true);
  }, []);
  var deactivate = React.useCallback(function () {
    return setIsActive(false);
  }, []);
  var toggle = React.useCallback(function () {
    return setIsActive(function (current) {
      return !current;
    });
  }, []);
  return [isActive, activate, deactivate, toggle];
};

var useInput = function useInput(_a) {
  var onChangeText = _a.onChangeText,
    _b = _a.onBlur,
    onBlur = _b === void 0 ? null : _b,
    _c = _a.onFocus,
    onFocus = _c === void 0 ? null : _c;
  var _d = React.useState(false),
    isPassVisible = _d[0],
    setIsPassVisible = _d[1];
  var _e = React.useState(false),
    isFocused = _e[0],
    setIsFocused = _e[1];
  var togglePassVisible = React.useCallback(function (event) {
    event.preventDefault();
    setIsPassVisible(function (isPassVisible) {
      return !isPassVisible;
    });
  }, []);
  var clear = React.useCallback(function (event) {
    event.preventDefault();
    if (onChangeText) {
      onChangeText('');
    }
  }, [onChangeText]);
  var focus = React.useCallback(function () {
    setIsFocused(true);
    if (onFocus) {
      onFocus();
    }
  }, [onFocus]);
  var unfocus = React.useCallback(function () {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  }, [onBlur]);
  return {
    isPassVisible: isPassVisible,
    isFocused: isFocused,
    togglePassVisible: togglePassVisible,
    clear: clear,
    focus: focus,
    unfocus: unfocus
  };
};

var useMention = function useMention(_a) {
  var setText = _a.setText;
  var _b = React.useState(emptyString),
    mention = _b[0],
    setMention = _b[1];
  // Using `mentionRef` prevents re-creation of `applyMention` on every edit
  var mentionRef = React.useRef(emptyString);
  var updateMention = React.useCallback(function (valueOrCb) {
    if (typeof valueOrCb === 'string') {
      mentionRef.current = valueOrCb;
      setMention(valueOrCb);
    } else {
      setMention(function (mention) {
        var newValue = valueOrCb(mention);
        mentionRef.current = newValue;
        return newValue;
      });
    }
  }, []);
  var clearMention = React.useCallback(function () {
    mentionRef.current = emptyString;
    setMention(emptyString);
  }, []);
  var applyMention = React.useCallback(function (value) {
    setText(function (text) {
      return "".concat(text.slice(0, -mentionRef.current.length)).concat(value, " ");
    });
    mentionRef.current = emptyString;
    setMention(emptyString);
  }, [setText]);
  return {
    mention: mention,
    setMention: updateMention,
    clearMention: clearMention,
    applyMention: applyMention
  };
};

var useMounted = function useMounted() {
  var isMounted = React.useRef(true);
  React.useEffect(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  var mounted = React.useCallback(function () {
    return isMounted.current;
  }, []);
  return mounted;
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var usePressButtons = function usePressButtons(_a) {
  var _b = _a.active,
    active = _b === void 0 ? null : _b,
    _c = _a.behavior,
    behavior = _c === void 0 ? null : _c,
    _d = _a.onPress,
    onPress = _d === void 0 ? null : _d;
  var press = React.useCallback(function (e, buttons, name) {
    if (!buttons || !onPress) {
      return;
    }
    if (behavior !== 'checkbox') {
      if (typeof buttons === 'string' && buttons !== active) {
        onPress(e, buttons, name);
      }
      return;
    }
    var activeArray = typeof active === 'string' || !active ? emptyArray : active;
    if (typeof buttons !== 'string') {
      onPress(e, buttons, name);
      return;
    }
    var buttonsString = buttons;
    if (activeArray && activeArray.includes(buttonsString)) {
      var nameAt = activeArray.findIndex(function (v) {
        return buttonsString === v;
      });
      onPress(e, __spreadArray(__spreadArray([], activeArray.slice(0, nameAt), true), activeArray.slice(nameAt + 1), true), name);
      return;
    }
    onPress(e, __spreadArray(__spreadArray([], activeArray, true), [buttonsString], false), name);
  }, [onPress, active, behavior]);
  return onPress ? press : null;
};

var useStringOption = function useStringOption(initialValue) {
  var _a = React.useState(initialValue),
    value = _a[0],
    setValue = _a[1];
  var setNotEmpty = React.useCallback(function (newValue) {
    if (newValue !== null) {
      setValue(newValue);
    }
  }, []);
  return [value, setNotEmpty];
};

var hashIntoColor = function hashIntoColor(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var color = '#';
  for (var i = 0; i < 3; i++) {
    // eslint-disable-next-line no-bitwise
    var value = hash >> i * 8 & 0xFF;
    color += value.toString(16).padStart(2, '0');
  }
  return color;
};

var defaultColor = 'magenta';
var takeSpecColor = function takeSpecColor(spec, name) {
  return spec[name] || defaultColor;
};

var borderZero = {
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 0,
  borderLeftWidth: 0
};
var getAllBorder = function getAllBorder(width) {
  return __assign(__assign({}, borderZero), {
    borderTopWidth: width,
    borderRightWidth: width,
    borderBottomWidth: width,
    borderLeftWidth: width
  });
};
var getTopBorder = function getTopBorder(width) {
  return __assign(__assign({}, borderZero), {
    borderTopWidth: width,
    borderBottomWidth: width,
    borderBottomColor: 'transparent'
  });
};
var getBottomBorder = function getBottomBorder(width) {
  return __assign(__assign({}, borderZero), {
    borderTopWidth: width,
    borderBottomWidth: width,
    borderTopColor: 'transparent'
  });
};
var getLeftBorder = function getLeftBorder(width) {
  return __assign(__assign({}, borderZero), {
    borderLeftWidth: width
  });
};
var getRightBorder = function getRightBorder(width) {
  return __assign(__assign({}, borderZero), {
    borderRightWidth: width
  });
};
var getBordersForWidth = function getBordersForWidth(width) {
  return {
    all: getAllBorder(width),
    top: getTopBorder(width),
    bottom: getBottomBorder(width),
    left: getLeftBorder(width),
    right: getRightBorder(width)
  };
};
var mapBorders = function mapBorders(sm, md, lg, xlg) {
  return {
    sm: getBordersForWidth(sm),
    md: getBordersForWidth(md),
    lg: getBordersForWidth(lg),
    xlg: getBordersForWidth(xlg)
  };
};

var transparentBg = {
  bg: 'transparent',
  bgHover: 'transparent',
  bgActive: 'transparent'
};
var transparentBorder = {
  border: 'transparent',
  borderHover: 'transparent',
  borderActive: 'transparent'
};
var createFlatColorset = function createFlatColorset(text, textHover, textActive, bg, bgHover, bgActive) {
  return __assign({
    text: text,
    textHover: textHover,
    textActive: textActive,
    bg: bg,
    bgHover: bgHover,
    bgActive: bgActive
  }, transparentBorder);
};
var createGhostColorset = function createGhostColorset(text, textHover, textActive) {
  return __assign(__assign({
    text: text,
    textHover: textHover,
    textActive: textActive
  }, transparentBg), {
    border: text,
    borderHover: textHover,
    borderActive: textActive
  });
};
var createTextColorset = function createTextColorset(text, textHover, textActive) {
  return __assign(__assign({
    text: text,
    textHover: textHover,
    textActive: textActive
  }, transparentBg), transparentBorder);
};
var createStateColorsetTriplet = function createStateColorsetTriplet(name) {
  var _a;
  return _a = {}, _a[name] = createFlatColorset('spec.white', 'spec.white', 'spec.white', "bg.".concat(name), "bg.".concat(name, "plus"), "bg.".concat(name, "minus")), _a["".concat(name, "ghost")] = {
    text: "text.".concat(name),
    textHover: "text.".concat(name, "plus"),
    textActive: "text.".concat(name, "minus"),
    bg: 'bg.primaryalt',
    bgHover: 'transparent',
    bgActive: 'transparent',
    border: "bg.".concat(name),
    borderHover: "bg.".concat(name, "plus"),
    borderActive: "bg.".concat(name, "minus")
  }, _a["".concat(name, "text")] = createTextColorset("text.".concat(name), "text.".concat(name, "plus"), "text.".concat(name, "minus")), _a;
};

var getElevationShadow = function getElevationShadow(elevation, shadowColor) {
  return {
    elevation: elevation,
    zIndex: elevation,
    shadowColor: shadowColor,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.1 * elevation,
    shadowRadius: 0.8 * elevation
  };
};
var mapShadows = function mapShadows(colors, sm, md, lg) {
  return {
    none: null,
    sm: getElevationShadow(sm, colors.sm),
    md: getElevationShadow(md, colors.md),
    lg: getElevationShadow(lg, colors.lg)
  };
};
var mapShadowsText = function mapShadowsText(colors, sm, md) {
  return {
    none: null,
    sm: {
      textShadowColor: colors.sm,
      textShadowOffset: {
        width: 0,
        height: 0
      },
      textShadowRadius: sm,
      padding: 0
    },
    md: {
      textShadowColor: colors.md,
      textShadowOffset: {
        width: 0,
        height: 0
      },
      textShadowRadius: md,
      padding: 0
    }
  };
};

var getTopShape = function getTopShape(radius) {
  return {
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  };
};
var getBottomShape = function getBottomShape(radius) {
  return {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: radius
  };
};
var getLeftShape = function getLeftShape(radius) {
  return {
    borderTopLeftRadius: radius,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: radius
  };
};
var getRightShape = function getRightShape(radius) {
  return {
    borderTopLeftRadius: 0,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: 0
  };
};
var getShapesForRadius = function getShapesForRadius(radius) {
  return {
    all: {
      borderRadius: radius
    },
    top: getTopShape(radius),
    bottom: getBottomShape(radius),
    left: getLeftShape(radius),
    right: getRightShape(radius)
  };
};
var mapShapes = function mapShapes(sm, md, lg, xlg) {
  return {
    rounded: getShapesForRadius(100),
    sm: getShapesForRadius(sm),
    md: getShapesForRadius(md),
    lg: getShapesForRadius(lg),
    xlg: getShapesForRadius(xlg)
  };
};

var logger = {
  debug: emptyFunction,
  info: emptyFunction,
  warn: emptyFunction,
  error: emptyFunction
};
var getLogger = function getLogger() {
  return logger;
};
var setLogger = function setLogger(newLogger) {
  logger = newLogger;
};

var parseHrefCached = createCachedSelector(function (_a) {
  var anchor = _a.anchor;
  return anchor;
}, function (_a) {
  var i = _a.i;
  return i;
}, function (_a) {
  var transformText = _a.transformText;
  return transformText;
}, function (anchor, i, transformText) {
  var text = transformText(anchor);
  var matched = anchor.match(/href="(.*?)"/i);
  var href = (matched === null || matched === void 0 ? void 0 : matched[1]) || null;
  var key = "".concat(i, "-href");
  return {
    text: text,
    href: href,
    key: key
  };
})(function (input, i) {
  return "getAnchors/parseHrefCached-".concat(i, "-").concat(input);
});
var getAnchorLinksCached = createCachedSelector(function (input) {
  return input;
}, function (_input, transformText) {
  return transformText;
}, function (input, transformText) {
  try {
    // If no '<a 's around, return immediately
    var at = input.indexOf('<a ');
    if (at < 0) {
      return null;
    }
    // If no real match, return immediately
    at = input.search(/(?:\s|\n|^)<a\s.*?<\/a>/i);
    if (at < 0) {
      return null;
    }
    var result = emptyArray;
    var rest = input;
    var i = 0;
    // Traverse the string in steps
    do {
      if (rest[at] !== '<') {
        at += 1; // skip 1 whitespace
      }

      result = __spreadArray(__spreadArray([], result, true), [{
        text: transformText(rest.slice(0, at)),
        href: null,
        key: "".concat(i, "-text")
      }], false);
      rest = rest.slice(at);
      var matched = rest.match(/^<a\s.*?<\/a>/i);
      var anchor = matched ? matched[0] || '' : '';
      result = __spreadArray(__spreadArray([], result, true), [parseHrefCached({
        anchor: anchor,
        i: i,
        transformText: transformText
      })], false);
      i++;
      rest = rest.slice(anchor.length);
      at = rest.search(/(?:\s|\n|^)<a\s.*?<\/a>/i);
      if (at < 0 && rest.length) {
        result = __spreadArray(__spreadArray([], result, true), [{
          text: transformText(rest),
          href: null,
          key: "".concat(i, "-last-text")
        }], false);
      }
    } while (at > -1);
    return result;
  } catch (error) {
    getLogger().error('getAnchors.getAnchorLinksCached', error);
    return null;
  }
})(function (input) {
  return "getAnchors/getAnchorLinksCached-".concat(input.length, "-").concat(input.slice(0, 5), "-").concat(input.slice(-5));
});
var getPlainLinksCached = createCachedSelector(function (input) {
  return input;
}, function (input) {
  try {
    // If no real match, return immediately
    var at = input.search(/(?:\s|\n|^)https?:\/\/\w+/i);
    if (at < 0) {
      return null;
    }
    var result = emptyArray;
    var rest = input;
    var i = 0;
    // Traverse the string in steps
    do {
      if (rest[at] !== 'h') {
        at += 1; // skip 1 whitespace
      }

      result = __spreadArray(__spreadArray([], result, true), [{
        text: rest.slice(0, at),
        href: null,
        key: "".concat(i, "-text")
      }], false);
      rest = rest.slice(at);
      var matched = rest.match(/^https?:\/\/\w+[^\s]*/i);
      var href = (matched ? matched[0] || '' : '').replace(/[,.;!:]$/, '');
      result = __spreadArray(__spreadArray([], result, true), [{
        text: href,
        href: href,
        key: "".concat(i, "-href")
      }], false);
      i++;
      rest = rest.slice(href.length);
      at = rest.search(/(?:\s|\n)https?:\/\/\w+/i);
      if (at < 0 && rest.length) {
        result = __spreadArray(__spreadArray([], result, true), [{
          text: rest,
          href: null,
          key: "".concat(i, "-last-text")
        }], false);
      }
    } while (at > -1);
    return result;
  } catch (error) {
    getLogger().error('getAnchors.getPlainLinksCached', error);
    return null;
  }
})(function (input) {
  return "getAnchors/getPlainLinksCached-".concat(input.length, "-").concat(input.slice(0, 5), "-").concat(input.slice(-5));
});
var mapHrefs = createCachedSelector(function (hrefs) {
  return hrefs;
}, function (hrefs) {
  var result = emptyArray;
  hrefs.forEach(function (item, i) {
    if (item.href) {
      result = __spreadArray(__spreadArray([], result, true), [__assign(__assign({}, item), {
        key: "".concat(i, "-").concat(item.key)
      })], false);
      return;
    }
    var links = getPlainLinksCached(item.text);
    if (!links) {
      result = __spreadArray(__spreadArray([], result, true), [__assign(__assign({}, item), {
        key: "".concat(i, "-").concat(item.key)
      })], false);
      return;
    }
    result = __spreadArray(__spreadArray([], result, true), links.map(function (link) {
      return __assign(__assign({}, link), {
        key: "".concat(i, "-").concat(item.key, "-").concat(link.key)
      });
    }), true);
  });
  return result;
})(function (hrefs) {
  return "mapHrefs-".concat(hrefs.map(function (href) {
    return href.key;
  }).join(','));
});
var getAnchors = createCachedSelector(function (input) {
  return input;
}, function (_input, transformText) {
  return transformText;
}, getAnchorLinksCached, function (input, transformText, hrefs) {
  if (!hrefs) {
    return getPlainLinksCached(transformText(input));
  }
  return mapHrefs(hrefs);
})(function (input) {
  return "getAnchors-".concat(input.length, "-").concat(input.slice(0, 5), "-").concat(input.slice(-5));
});

var getConditionalItems = function getConditionalItems(isAvailable, item) {
  if (!isAvailable) {
    return emptyArray;
  }
  return [item];
};

var getCssArgs = createCachedSelector(function (value) {
  return value;
}, function (value) {
  return value ? value.split(/\s+/) : null;
})(function (value) {
  return "getCssArgs-".concat(value);
});

var getCssSidesN = createCachedSelector(function (name) {
  return name;
}, function (_name, splitted) {
  return splitted;
}, function (name, splitted) {
  var _a, _b, _c, _d;
  var _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
  if (!splitted.length) {
    return null;
  }
  var mapped = splitted.map(function (v) {
    var _a;
    return (_a = Number.isNaN(+v) ? v : +v) !== null && _a !== void 0 ? _a : 0;
  });
  if (mapped.length === 1) {
    return _a = {}, _a["".concat(name, "Top")] = (_e = mapped[0]) !== null && _e !== void 0 ? _e : 0, _a["".concat(name, "Right")] = (_f = mapped[0]) !== null && _f !== void 0 ? _f : 0, _a["".concat(name, "Bottom")] = (_g = mapped[0]) !== null && _g !== void 0 ? _g : 0, _a["".concat(name, "Left")] = (_h = mapped[0]) !== null && _h !== void 0 ? _h : 0, _a;
  }
  if (mapped.length === 2) {
    return _b = {}, _b["".concat(name, "Top")] = (_j = mapped[0]) !== null && _j !== void 0 ? _j : 0, _b["".concat(name, "Right")] = (_k = mapped[1]) !== null && _k !== void 0 ? _k : 0, _b["".concat(name, "Bottom")] = (_l = mapped[0]) !== null && _l !== void 0 ? _l : 0, _b["".concat(name, "Left")] = (_m = mapped[1]) !== null && _m !== void 0 ? _m : 0, _b;
  }
  if (mapped.length === 3) {
    return _c = {}, _c["".concat(name, "Top")] = (_o = mapped[0]) !== null && _o !== void 0 ? _o : 0, _c["".concat(name, "Right")] = (_p = mapped[1]) !== null && _p !== void 0 ? _p : 0, _c["".concat(name, "Bottom")] = (_q = mapped[2]) !== null && _q !== void 0 ? _q : 0, _c["".concat(name, "Left")] = (_r = mapped[1]) !== null && _r !== void 0 ? _r : 0, _c;
  }
  return _d = {}, _d["".concat(name, "Top")] = (_s = mapped[0]) !== null && _s !== void 0 ? _s : 0, _d["".concat(name, "Right")] = (_t = mapped[1]) !== null && _t !== void 0 ? _t : 0, _d["".concat(name, "Bottom")] = (_u = mapped[2]) !== null && _u !== void 0 ? _u : 0, _d["".concat(name, "Left")] = (_v = mapped[3]) !== null && _v !== void 0 ? _v : 0, _d;
})(function (name, splitted) {
  return "getCssSides/getCssSides-".concat(splitted.length, "-").concat(name, "-").concat(splitted.join(','));
});
var getCssSides = createCachedSelector(function (name) {
  return name;
}, function (_name, value) {
  return value;
}, function (name, value) {
  var _a;
  if (!name) {
    return null;
  }
  if (typeof value === 'number') {
    return _a = {}, _a[name] = value, _a;
  }
  if (!value) {
    return null;
  }
  var splitted = getCssArgs(value);
  if (!splitted) {
    return null;
  }
  return getCssSidesN(name, splitted);
})(function (name, value) {
  return "getCssSides-".concat(name, "-").concat(value);
});

var getErrorMessage = function getErrorMessage(error, defaultMessage) {
  if (defaultMessage === void 0) {
    defaultMessage = 'Unknown error.';
  }
  return error instanceof Error && error.message || defaultMessage;
};

var getMargins = createCachedSelector(function (value) {
  return value;
}, function (value) {
  return getCssSides('margin', value);
})(function (value) {
  return "getMargins-".concat(value);
});

// @{{123|abc def ghi}} @{{|abc def ghi}} @{{abc def ghi}}
// (?: - means "do not treat as a group". Implying no sub-splits when using String.split
// /@\{\{.*?\}\}/
var getSyntaxMentionsCached = createCachedSelector(function (input) {
  return input;
}, function (input) {
  try {
    // If no '@'s around, return immediately
    var at = input.indexOf('@');
    if (at < 0) {
      return null;
    }
    // If no real match, return immediately
    at = input.search(/(?:\s|\n|^)@\{\{.*?\}\}/);
    if (at < 0) {
      return null;
    }
    var result = [];
    var rest = input;
    var i = 0;
    // Traverse the string in steps
    do {
      if (rest[at] !== '@') {
        at += 1; // skip 1 whitespace
      }

      result.push({
        isMention: false,
        key: "".concat(i, "-text"),
        text: rest.slice(0, at)
      });
      rest = rest.slice(at);
      var matched = rest.match(/^@\{\{.*?\}\}/);
      var mention = matched ? matched[0] || '' : '';
      var dividerIdx = mention.indexOf('||');
      result.push({
        isMention: true,
        key: "".concat(i, "-mention"),
        text: "@".concat(mention.slice(dividerIdx < 0 ? 3 : dividerIdx + 2, -2)),
        id: dividerIdx < 0 ? '' : mention.slice(3, dividerIdx)
      });
      i++;
      rest = rest.slice(mention.length);
      at = rest.search(/(?:\s|\n)@\{\{.*?\}\}/);
      if (at < 0 && rest.length) {
        result.push({
          isMention: false,
          key: 'last-text',
          text: rest
        });
      }
    } while (at > -1);
    return result;
  } catch (error) {
    getLogger().error('getSyntaxMentionsCached', error);
    return null;
  }
})(function (input) {
  return "getPlainMentionsCached-".concat(input.length, "-").concat(input.slice(0, 5), "-").concat(input.slice(-5));
});
// @Abc, @Abc Def, @A, @A B, @A1 B2
// not: @, @a, @1
// (?: - means "do not treat as a group". Implying no sub-splits when using String.split
// /@[A-Z]\w*(?: [A-Z]\w*)?/
var getPlainMentionsCached = createCachedSelector(function (input) {
  return input;
}, function (input) {
  try {
    // If no '@'s around, return immediately
    var at = input.indexOf('@');
    if (at < 0) {
      return null;
    }
    // If no real match, return immediately
    at = input.search(/(?:\s|\n|^)@[A-Z]\w*(?: [A-Z]\w*)?/);
    if (at < 0) {
      return null;
    }
    var result = [];
    var rest = input;
    var i = 0;
    // Traverse the string in steps
    do {
      if (rest[at] !== '@') {
        at += 1; // skip 1 whitespace
      }

      result.push({
        isMention: false,
        key: "".concat(i, "-text"),
        text: rest.slice(0, at)
      });
      rest = rest.slice(at);
      var matched = rest.match(/^@[A-Z]\w*(?: [A-Z]\w*)?/);
      var mention = matched ? matched[0] || '' : '';
      result.push({
        isMention: true,
        key: "".concat(i, "-mention"),
        text: mention
      });
      i++;
      rest = rest.slice(mention.length);
      at = rest.search(/(?:\s|\n)@[A-Z]\w*(?: [A-Z]\w*)?/);
      if (at < 0 && rest.length) {
        result.push({
          isMention: false,
          key: 'last-text',
          text: rest
        });
      }
    } while (at > -1);
    return result;
  } catch (error) {
    getLogger().error('getPlainMentionsCached', error);
    return null;
  }
})(function (input) {
  return "getPlainMentionsCached-".concat(input.length, "-").concat(input.slice(0, 5), "-").concat(input.slice(-5));
});
var mapMentions = createCachedSelector(function (parts) {
  return parts;
}, function (parts) {
  var result = emptyArray;
  parts.forEach(function (item, i) {
    if (item.isMention) {
      result = __spreadArray(__spreadArray([], result, true), [__assign(__assign({}, item), {
        key: "".concat(i, "-").concat(item.key)
      })], false);
      return;
    }
    var mentions = getPlainMentionsCached(item.text);
    if (!mentions) {
      result = __spreadArray(__spreadArray([], result, true), [__assign(__assign({}, item), {
        key: "".concat(i, "-").concat(item.key)
      })], false);
      return;
    }
    result = __spreadArray(__spreadArray([], result, true), mentions.map(function (mention) {
      return __assign(__assign({}, mention), {
        key: "".concat(i, "-").concat(item.key, "-").concat(mention.key)
      });
    }), true);
  });
  return result;
})(function (parts) {
  return "mapMentions-".concat(parts.map(function (href) {
    return href.key;
  }).join(','));
});
var getMentions = createCachedSelector(function (input) {
  return input;
}, function (input) {
  return getSyntaxMentionsCached(input);
}, function (input, parts) {
  if (!parts) {
    return getPlainMentionsCached(input);
  }
  return mapMentions(parts);
})(function (input) {
  return "getMentions-".concat(input.length, "-").concat(input.slice(0, 5), "-").concat(input.slice(-5));
});

var getPaddings = createCachedSelector(function (value) {
  return value;
}, function (value) {
  return getCssSides('padding', value);
})(function (value) {
  return "getPaddings-".concat(value);
});

var lowerEndings = [{
  reg: 's$',
  result: 'ses'
}, {
  reg: 'x$',
  result: 'xes'
}, {
  reg: 'sh$',
  result: 'shes'
}, {
  reg: 'ch$',
  result: 'ches'
}, {
  reg: 'io$',
  result: 'ios'
}, {
  reg: 'oo$',
  result: 'oos'
}, {
  reg: 'eo$',
  result: 'eos'
}, {
  reg: 'o$',
  result: 'oes'
}, {
  reg: 'uy$',
  result: 'uys'
}, {
  reg: 'ey$',
  result: 'eys'
}, {
  reg: 'oy$',
  result: 'oys'
}, {
  reg: 'iy$',
  result: 'iys'
}, {
  reg: 'ay$',
  result: 'ays'
}, {
  reg: 'y$',
  result: 'ies'
}, {
  reg: '(f|fe)$',
  result: 'ves'
}];
var upperEndings = lowerEndings.map(function (_a) {
  var reg = _a.reg,
    result = _a.result;
  return {
    reg: reg.toUpperCase(),
    result: result.toUpperCase()
  };
});
var allEndings = __spreadArray(__spreadArray([], lowerEndings, true), upperEndings, true);
var createReplacer = function createReplacer(reg, result) {
  return function (str) {
    return str.replace(new RegExp(reg), result);
  };
};
var replacers = allEndings.map(function (_a) {
  var reg = _a.reg,
    result = _a.result;
  return createReplacer(reg, result);
});
var getPluralForm = function getPluralForm(label) {
  if (!label) {
    return emptyString;
  }
  var result = label;
  var isLabelChanged = replacers.some(function (replacer) {
    var newStr = replacer(label);
    if (label !== newStr) {
      result = newStr;
      return true;
    }
    return false;
  });
  if (!isLabelChanged) {
    // if no lower-case charaters, then return label with 'S' ending,
    // otherwise with 's' ending
    return /^[^a-z]*$/.test(label) ? "".concat(label, "S") : "".concat(label, "s");
  }
  return result;
};

var getRandomColor = function getRandomColor() {
  return "#".concat((0x1000000 + Math.random() * 0xffffff).toString(16).slice(1, 7));
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var getNested = function getNested(path, source) {
  var _a, _b;
  var pathSegments = path.split('.');
  var count = pathSegments.length;
  if (!count) {
    return undefined;
  }
  if (count === 1) {
    return source[path];
  }
  if (count === 2) {
    var segment0 = (_a = pathSegments[0]) !== null && _a !== void 0 ? _a : emptyString;
    var nest1 = source[segment0];
    if (!nest1 || _typeof(nest1) !== 'object') {
      return undefined;
    }
    var segment1 = (_b = pathSegments[1]) !== null && _b !== void 0 ? _b : emptyString;
    return nest1[segment1];
  }
  var value = source;
  for (var i = 0; i < pathSegments.length; i++) {
    var segment = pathSegments[i] || '';
    if (!value || _typeof(value) !== 'object') {
      return undefined;
    }
    value = value[segment];
  }
  return value;
};
var getThemeVariantGetter = createCachedSelector(function (theme, field) {
  return theme ? theme[field] || null : null;
}, function (nest) {
  return function (name) {
    if (!name || !nest) {
      return null;
    }
    return getNested(name, nest) || null;
  };
})(function () {
  return 'get-theme-getter/getThemeVariantGetter';
});
var getThemeShapeGetter = createCachedSelector(function (theme) {
  return getThemeVariantGetter(theme, 'shapes');
}, function (getShape) {
  return function (name) {
    if (name === 'none' || !name) {
      return null;
    }
    return getShape(name.includes('.') ? name : "".concat(name, ".all"));
  };
})(function () {
  return 'get-theme-getter/getThemeShapeGetter';
});
var getThemeBorderGetter = createCachedSelector(function (theme) {
  return getThemeVariantGetter(theme, 'borders');
}, function (getBorder) {
  return function (name) {
    if (name === 'none' || !name) {
      return null;
    }
    return getBorder(name.includes('.') ? name : "".concat(name, ".all"));
  };
})(function () {
  return 'get-theme-getter/getThemeBorderGetter';
});
var getThemeSizeGetter = createCachedSelector(function (theme) {
  return getThemeVariantGetter(theme, 'sizes');
}, function (getSize) {
  return function (name, prefix) {
    if (name === 'auto' || !name || typeof name !== 'string') {
      return null;
    }
    return getSize(name.includes('.') ? name : "".concat(prefix, ".").concat(name));
  };
})(function () {
  return 'get-theme-getter/getThemeSizeGetter';
});
var getThemeFontGetter = createCachedSelector(function (theme) {
  return getThemeVariantGetter(theme, 'fonts');
}, function (getFont) {
  return function (name) {
    return getFont(name);
  };
})(function () {
  return 'get-theme-getter/getThemeFontGetter';
});
var getThemeShadowGetter = createCachedSelector(function (theme) {
  return getThemeVariantGetter(theme, 'shadows');
}, function (getShadow) {
  return function (name) {
    return getShadow(name);
  };
})(function () {
  return 'get-theme-getter/getThemeShadowGetter';
});
var getThemeShadowTextGetter = createCachedSelector(function (theme) {
  return getThemeVariantGetter(theme, 'shadowsText');
}, function (getShadowText) {
  return function (name) {
    return getShadowText(name);
  };
})(function () {
  return 'get-theme-getter/getThemeShadowTextGetter';
});
var getThemeColorGetter = createCachedSelector(function (theme) {
  return getThemeVariantGetter(theme, 'colors');
}, function (getColor) {
  return function (name) {
    return getColor(name);
  };
})(function () {
  return 'get-theme-getter/getThemeColorGetter';
});
var getThemeColorSetGetter = createCachedSelector(function (theme) {
  return getThemeColorGetter(theme);
}, function (_a) {
  var colorSets = _a.colorSets;
  return colorSets;
}, function (_theme, kind) {
  return kind;
}, function (getColor, colorSets, kind) {
  var getter = function getter(state, colors) {
    var finalColorset = typeof colors === 'string' ? colorSets[colors] || colorSets.primary : colors || colorSets.primary;
    var key = state === 'active' && "".concat(kind, "Active") || state === 'hover' && "".concat(kind, "Hover") || kind;
    var color = finalColorset[key];
    return getColor(color) || color;
  };
  return getter;
})(function () {
  return 'get-theme-getter/getThemeColorSetGetter';
});

var createTypedObjectify = function createTypedObjectify() {
  return createCachedSelector(function (key) {
    return key;
  }, function (_key, value) {
    return value;
  }, function (key, value) {
    var _a;
    return _a = {}, _a[key] = value, _a;
  })(function (key, value) {
    return "objectify-".concat(key, "-").concat(value);
  });
};
var objectify = createTypedObjectify();

var removeItem = function removeItem(array, index) {
  if (index < 0 || index >= array.length) {
    return array;
  }
  return __spreadArray(__spreadArray([], array.slice(0, index), true), array.slice(index + 1), true);
};

var replaceItem = function replaceItem(array, item, index) {
  if (index < 0 || index >= array.length) {
    return array;
  }
  return __spreadArray(__spreadArray(__spreadArray([], array.slice(0, index), true), [item], false), array.slice(index + 1), true);
};

var defaultShowToast = function defaultShowToast() {
  getLogger().warn('Toaster.showToastCached not assigned.');
};
var showToastCached = defaultShowToast;
var setShowToast = function setShowToast(newShowToast) {
  showToastCached = newShowToast || defaultShowToast;
};
var showToast = function showToast(props) {
  return showToastCached(props);
};
var showToastError = function showToastError(props) {
  return showToastCached(__assign(__assign({}, props), {
    lineColors: 'error'
  }));
};
var showToastSuccess = function showToastSuccess(props) {
  return showToastCached(__assign(__assign({}, props), {
    lineColors: 'success'
  }));
};

var toError = function toError(error, defaultMessage) {
  if (defaultMessage === void 0) {
    defaultMessage = 'Unknown error.';
  }
  return error instanceof Error ? error : new Error(defaultMessage);
};

var updateItem = function updateItem(array, fields, index) {
  var _a;
  var item = index < 0 ? null : (_a = array[index]) !== null && _a !== void 0 ? _a : null;
  if (!item) {
    return array;
  }
  return replaceItem(array, __assign(__assign({}, item), fields), index);
};

var validateEmail = function validateEmail(email) {
  // eslint-disable-next-line max-len
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z0-9]{2,}))$/;
  return re.test(email.toLowerCase());
};

var withAsync = function withAsync(Component, Fallback, delay) {
  if (Fallback === void 0) {
    Fallback = null;
  }
  if (delay === void 0) {
    delay = null;
  }
  var Async = function Async(props) {
    var _a = useFlag(),
      isVisible = _a[0],
      show = _a[1];
    var mounted = useMounted();
    React.useEffect(function () {
      setTimeout(function () {
        if (mounted()) {
          show();
        }
      }, delay !== null && delay !== void 0 ? delay : 20);
    }, [show, mounted]);
    if (!isVisible) {
      if (!Fallback) {
        return null;
      }
      return /*#__PURE__*/React.createElement(Fallback, __assign({}, props));
    }
    return /*#__PURE__*/React.createElement(Component, __assign({}, props));
  };
  return Async;
};

var withBoundary = function withBoundary(name, Component, Fallback) {
  return (/** @class */function (_super) {
      __extends(ErrorBoundary, _super);
      function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
          error: null
        };
        return _this;
      }
      ErrorBoundary.getDerivedStateFromError = function (error) {
        return {
          error: error
        };
      };
      ErrorBoundary.prototype.componentDidCatch = function (error) {
        getLogger().error('Boundary.Catch', getErrorMessage(error), name);
        showToastError({
          text: 'Unexpected UI error has occured. Some elements may not be displayed.',
          duration: 0
        });
      };
      ErrorBoundary.prototype.render = function () {
        var error = this.state.error;
        if (error) {
          if (!Fallback) {
            return null;
          }
          return /*#__PURE__*/React.createElement(Fallback, {
            error: error
          });
        }
        return /*#__PURE__*/React.createElement(Component, __assign({}, this.props));
      };
      return ErrorBoundary;
    }(React.Component)
  );
};

var getFakeComponent = function getFakeComponent(name) {
  return /*#__PURE__*/forwardRef(function () {
    React.useEffect(function () {
      getLogger().warn("SimpleCodeUiProvider is missing \"".concat(name, "\"."));
    }, []);
    return null;
  });
};
var getFakeIcon = function getFakeIcon(name) {
  return {
    Component: getFakeComponent("icons.".concat(name))
  };
};
var emptyIcons = {
  caretDown: getFakeIcon('caretDown'),
  radioOn: getFakeIcon('radioOn'),
  radioOff: getFakeIcon('radioOff'),
  checkboxOn: getFakeIcon('checkboxOn'),
  checkboxOff: getFakeIcon('checkboxOff'),
  switchHandle: getFakeIcon('switchHandle')
};
var defaultSimpleCodeUiContext = {
  Flex: getFakeComponent('Flex'),
  TextFragment: getFakeComponent('TextFragment'),
  ModalSelect: getFakeComponent('ModalSelect'),
  Toast: getFakeComponent('Toast'),
  InputZone: getFakeComponent('InputZone'),
  LoadingIcon: getFakeComponent('LoadingIcon'),
  Modal: getFakeComponent('Modal'),
  icons: emptyIcons,
  transformText: function transformText(text) {
    return text;
  }
};
var SimpleCodeUiContext = /*#__PURE__*/React.createContext(__assign({}, defaultSimpleCodeUiContext));

var Flex_ = function Flex_(props, ref) {
  var Flex = React.useContext(SimpleCodeUiContext).Flex;
  return /*#__PURE__*/React.createElement(Flex, __assign({
    ref: ref
  }, props));
};
var Flex = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Flex_));

var Abs_ = function Abs_(_a, ref) {
  var left = _a.left,
    right = _a.right,
    top = _a.top,
    bottom = _a.bottom,
    width = _a.width,
    height = _a.height,
    style = _a.style,
    propsFlex = __rest(_a, ["left", "right", "top", "bottom", "width", "height", "style"]);
  var absStyle = React.useMemo(function () {
    return [{
      position: 'absolute',
      overflow: 'hidden',
      left: left !== null && left !== void 0 ? left : undefined,
      right: right !== null && right !== void 0 ? right : undefined,
      top: top !== null && top !== void 0 ? top : undefined,
      bottom: bottom !== null && bottom !== void 0 ? bottom : undefined,
      width: width !== null && width !== void 0 ? width : undefined,
      height: height !== null && height !== void 0 ? height : undefined
    }, style];
  }, [bottom, height, left, style, right, top, width]);
  return /*#__PURE__*/React.createElement(Flex, __assign({
    ref: ref
  }, propsFlex, {
    style: absStyle
  }));
};
var Abs = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Abs_));

var TextFragment_ = function TextFragment_(props, ref) {
  var TextFragment = React.useContext(SimpleCodeUiContext).TextFragment;
  return /*#__PURE__*/React.createElement(TextFragment, __assign({
    ref: ref
  }, props));
};
var TextFragment = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(TextFragment_));

var IconEmpty_ = function IconEmpty_(_a) {
  var _b = _a.size,
    size = _b === void 0 ? null : _b,
    _c = _a.color,
    color = _c === void 0 ? null : _c,
    _d = _a.style,
    style = _d === void 0 ? null : _d;
  var iconStyle = React.useMemo(function () {
    return [{
      fontSize: size !== null && size !== void 0 ? size : undefined,
      color: color !== null && color !== void 0 ? color : undefined
    }, style];
  }, [color, size, style]);
  return /*#__PURE__*/React.createElement(TextFragment, {
    style: iconStyle
  }, "\u2605");
};
var IconEmpty = /*#__PURE__*/React.memo(IconEmpty_);

var defaultContext = {
  theme: defaultTheme,
  getShape: getThemeShapeGetter(defaultTheme),
  getBorder: getThemeBorderGetter(defaultTheme),
  getSize: getThemeSizeGetter(defaultTheme),
  getFont: getThemeFontGetter(defaultTheme),
  getShadow: getThemeShadowGetter(defaultTheme),
  getShadowText: getThemeShadowTextGetter(defaultTheme),
  getColor: getThemeColorGetter(defaultTheme),
  getColorBg: getThemeColorSetGetter(defaultTheme, 'bg'),
  getColorText: getThemeColorSetGetter(defaultTheme, 'text'),
  getColorBorder: getThemeColorSetGetter(defaultTheme, 'border')
};
var ThemeContext = /*#__PURE__*/React.createContext(defaultContext);

var Icon_ = function Icon_(_a, ref) {
  var _b = _a.name,
    name = _b === void 0 ? null : _b,
    _c = _a.Component,
    Component = _c === void 0 ? null : _c,
    _d = _a.size,
    size = _d === void 0 ? null : _d,
    _e = _a.sizeIcon,
    sizeIcon = _e === void 0 ? null : _e,
    _f = _a.rotation,
    rotation = _f === void 0 ? null : _f,
    _g = _a.shadowIcon,
    shadowIcon = _g === void 0 ? null : _g,
    _h = _a.onPress,
    onPress = _h === void 0 ? null : _h,
    _j = _a.align,
    align = _j === void 0 ? null : _j,
    _k = _a.justify,
    justify = _k === void 0 ? null : _k,
    _l = _a.style,
    style = _l === void 0 ? null : _l,
    propsFlex = __rest(_a, ["name", "Component", "size", "sizeIcon", "rotation", "shadowIcon", "onPress", "align", "justify", "style"]);
  var _m = propsFlex.state,
    state = _m === void 0 ? null : _m,
    _o = propsFlex.colors,
    colors = _o === void 0 ? null : _o;
  var themeContext = React.useContext(ThemeContext);
  var getShadowText = themeContext.getShadowText,
    getColorText = themeContext.getColorText;
  var FinalIcon = Component || IconEmpty;
  var finalSize = size || 'md';
  var minSize = themeContext.getSize(finalSize, 'icon');
  var iconStyle = React.useMemo(function () {
    return [{
      minHeight: minSize !== null && minSize !== void 0 ? minSize : undefined,
      minWidth: minSize !== null && minSize !== void 0 ? minSize : undefined,
      lineHeight: minSize !== null && minSize !== void 0 ? minSize : undefined,
      textAlign: 'center'
    },
    // fixme
    !!rotation && {
      transform: [{
        rotate: "".concat(rotation, "deg")
      }]
    }, getShadowText(shadowIcon)];
  }, [getShadowText, minSize, rotation, shadowIcon]);
  var containerStyle = React.useMemo(function () {
    return [{
      minHeight: minSize !== null && minSize !== void 0 ? minSize : undefined,
      minWidth: minSize !== null && minSize !== void 0 ? minSize : undefined
    }, style];
  }, [minSize, style]);
  var press = React.useCallback(function (e) {
    if (onPress) {
      onPress(e, name);
    }
  }, [onPress, name]);
  return /*#__PURE__*/React.createElement(Flex, __assign({
    ref: ref
  }, propsFlex, {
    style: containerStyle,
    onPress: onPress && press,
    align: align || 'center',
    justify: justify || 'center'
  }), /*#__PURE__*/React.createElement(FinalIcon, {
    name: name || 'star',
    size: sizeIcon !== null && sizeIcon !== void 0 ? sizeIcon : 18,
    color: getColorText(state, colors) || undefined,
    style: iconStyle
  }));
};
var Icon = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Icon_));

var MentionContext = /*#__PURE__*/React.createContext({
  name: null,
  colors: null,
  colorsSelf: null
});

var colorsDefault = {
  text: 'text.primary',
  textHover: 'text.primaryplus',
  textActive: 'text.primaryminus',
  bg: 'bg.secondaryminus',
  bgHover: 'bg.secondaryminus',
  bgActive: 'bg.secondaryminus',
  border: 'bg.secondaryminus',
  borderHover: 'bg.secondaryminus',
  borderActive: 'bg.secondaryminus'
};
var Mention_ = function Mention_(_a) {
  var _b = _a.font,
    font = _b === void 0 ? null : _b,
    _c = _a.size,
    size = _c === void 0 ? null : _c,
    _d = _a.shadow,
    shadow = _d === void 0 ? null : _d,
    _e = _a.shadowBox,
    shadowBox = _e === void 0 ? null : _e,
    _f = _a.shape,
    shape = _f === void 0 ? null : _f,
    _g = _a.padding,
    padding = _g === void 0 ? null : _g,
    propsTextFragment = __rest(_a, ["font", "size", "shadow", "shadowBox", "shape", "padding"]);
  var _h = React.useContext(MentionContext),
    name = _h.name,
    colors = _h.colors,
    colorsSelf = _h.colorsSelf;
  if (!propsTextFragment.children) {
    return null;
  }
  var isSelf = propsTextFragment.children === "@".concat(name);
  return /*#__PURE__*/React.createElement(TextFragment, __assign({}, propsTextFragment, {
    font: font || 'semi',
    size: size || 'auto',
    shadow: shadow || 'none',
    shadowBox: shadowBox || 'none',
    colors: (isSelf ? colorsSelf : colors) || colorsDefault,
    shape: shape || 'sm',
    padding: padding !== null && padding !== void 0 ? padding : '0 5',
    isOpaque: true
  }));
};
var Mention = /*#__PURE__*/React.memo(Mention_);

var Mentions_ = function Mentions_(_a) {
  var text = _a.text,
    _b = _a.hasMentions,
    hasMentions = _b === void 0 ? null : _b,
    _c = _a.isDecorated,
    isDecorated = _c === void 0 ? null : _c;
  var transformText = React.useContext(SimpleCodeUiContext).transformText;
  var unescaped = React.useMemo(function () {
    if (isDecorated) {
      return transformText(text);
    }
    return text;
  }, [transformText, text, isDecorated]);
  var mentions = React.useMemo(function () {
    return hasMentions ? getMentions(unescaped) : null;
  }, [hasMentions, unescaped]);
  if (!mentions) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/jsx-no-useless-fragment
      React.createElement(React.Fragment, null, unescaped)
    );
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, mentions.map(function (mention) {
    return mention.isMention ? /*#__PURE__*/React.createElement(Mention, {
      key: mention.key
    }, mention.text) : mention.text;
  }));
};
var Mentions = /*#__PURE__*/React.memo(Mentions_);

var Highlighted_ = function Highlighted_(_a) {
  var _b = _a.children,
    children = _b === void 0 ? null : _b,
    _c = _a.hasMentions,
    hasMentions = _c === void 0 ? null : _c,
    _d = _a.isDecorated,
    isDecorated = _d === void 0 ? null : _d;
  var transformText = React.useContext(SimpleCodeUiContext).transformText;
  var descs = React.useMemo(function () {
    if (!isDecorated || typeof children !== 'string') {
      return null;
    }
    return getAnchors(children, transformText);
  }, [children, isDecorated, transformText]);
  if (!children) {
    return null;
  }
  if (typeof children !== 'string') {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/jsx-no-useless-fragment
      React.createElement(React.Fragment, null, children)
    );
  }
  if (!descs) {
    return /*#__PURE__*/React.createElement(Mentions, {
      text: children,
      hasMentions: hasMentions,
      isDecorated: isDecorated
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, descs.map(function (desc) {
    return desc.href ? /*#__PURE__*/React.createElement(TextFragment, {
      key: desc.key,
      href: desc.href,
      colors: desc.href ? 'accenttext' : null,
      state: "hover",
      size: "auto",
      shadow: "none",
      shape: "none"
    }, /*#__PURE__*/React.createElement(Mentions, {
      text: desc.text,
      hasMentions: hasMentions
    })) : /*#__PURE__*/React.createElement(React.Fragment, {
      key: desc.key
    }, /*#__PURE__*/React.createElement(Mentions, {
      text: desc.text,
      hasMentions: hasMentions
    }));
  }));
};
var Highlighted = /*#__PURE__*/React.memo(Highlighted_);

var Txt_ = function Txt_(_a, ref) {
  var _b = _a.hasMentions,
    hasMentions = _b === void 0 ? null : _b,
    _c = _a.isDecorated,
    isDecorated = _c === void 0 ? null : _c,
    _d = _a.children,
    children = _d === void 0 ? null : _d,
    propsTextFragment = __rest(_a, ["hasMentions", "isDecorated", "children"]);
  return /*#__PURE__*/React.createElement(TextFragment, __assign({
    ref: ref
  }, propsTextFragment), !children ? null : /*#__PURE__*/React.createElement(Highlighted, {
    hasMentions: hasMentions,
    isDecorated: isDecorated
  }, children));
};
var Txt = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Txt_));

var getButtonPadding = function getButtonPadding(isColumn, isAuto, padding) {
  if (!padding || isColumn || isAuto) {
    return padding;
  }
  if (typeof padding === 'number') {
    return "0 ".concat(padding);
  }
  if (typeof padding === 'string') {
    return padding;
  }
  return null;
};

var styleNoBg = {
  backgroundColor: null,
  borderColor: null
};
var getIconPropsInner = function getIconPropsInner(icons, colors, size, state) {
  return [0, 1].map(function (i) {
    if (!icons) {
      return null;
    }
    var icon = icons[i];
    if (!icon) {
      return null;
    }
    return __assign(__assign({}, icon), {
      colors: icon.colors || colors,
      size: icon.size || size,
      style: [styleNoBg, icon.style],
      state: state
    });
  });
};
var getIconProps = createCachedSelector(function (_a) {
  var icons = _a.icons;
  return icons;
}, function (_a) {
  var colors = _a.colors;
  return colors;
}, function (_a) {
  var size = _a.size;
  return size;
}, function (_a) {
  var state = _a.state;
  return state;
}, getIconPropsInner)(function (_a) {
  var icons = _a.icons,
    colors = _a.colors,
    size = _a.size,
    state = _a.state;
  return ['getIconProps', icons.length, typeof colors === 'string' ? colors : '[custom]', size, state !== null && state !== void 0 ? state : 'none'].join('-');
});

var getSizeStyle = createCachedSelector(function (size) {
  return size;
}, function (size) {
  return {
    minWidth: size !== null && size !== void 0 ? size : undefined,
    height: size !== null && size !== void 0 ? size : undefined,
    minHeight: size !== null && size !== void 0 ? size : undefined
  };
})(function (size) {
  return "spec/Button/getSizeStyle-".concat(size !== null && size !== void 0 ? size : 'none');
});
var getButtonStyle = createCachedSelector(function (sizeStyle) {
  return sizeStyle;
}, function (_sizeStyle, customStyle) {
  return customStyle;
}, function (sizeStyle, customStyle) {
  if (!customStyle) {
    return sizeStyle;
  }
  return [sizeStyle, customStyle];
})(function (sizeStyle, customStyle) {
  return ['spec/Button/getButtonStyle', sizeStyle.height || 'auto', customStyle ? 'custom' : 'default'].join('-');
});
var useButtonStyle = function useButtonStyle(_a) {
  var size = _a.size,
    style = _a.style;
  var themeContext = React.useContext(ThemeContext);
  var buttonStyle = React.useMemo(function () {
    var sizeValue = themeContext.getSize(size, 'button');
    return getButtonStyle(getSizeStyle(sizeValue), style);
  }, [themeContext, size, style]);
  return buttonStyle;
};

var ModalSelect_ = function ModalSelect_(props, ref) {
  var ModalSelect = React.useContext(SimpleCodeUiContext).ModalSelect;
  return /*#__PURE__*/React.createElement(ModalSelect, __assign({
    ref: ref
  }, props));
};
var ModalSelect = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(ModalSelect_));

var Button_ = function Button_(_a, ref) {
  var _b = _a.name,
    name = _b === void 0 ? null : _b,
    _c = _a.icons,
    icons = _c === void 0 ? null : _c,
    _d = _a.iconsActive,
    iconsActive = _d === void 0 ? null : _d,
    _e = _a.label,
    label = _e === void 0 ? null : _e,
    labelActive = _a.labelActive,
    _f = _a.lines,
    lines = _f === void 0 ? null : _f,
    _g = _a.font,
    font = _g === void 0 ? null : _g,
    _h = _a.fontActive,
    fontActive = _h === void 0 ? null : _h,
    _j = _a.children,
    children = _j === void 0 ? null : _j,
    _k = _a.style,
    style = _k === void 0 ? null : _k,
    _l = _a.colors,
    colors = _l === void 0 ? null : _l,
    _m = _a.colorsActive,
    colorsActive = _m === void 0 ? null : _m,
    _o = _a.onPress,
    onPress = _o === void 0 ? null : _o,
    _p = _a.isActive,
    isActive = _p === void 0 ? null : _p,
    _q = _a.select,
    select = _q === void 0 ? null : _q,
    _r = _a.hasMentions,
    hasMentions = _r === void 0 ? null : _r,
    _s = _a.isDecorated,
    isDecorated = _s === void 0 ? null : _s,
    _t = _a.direction,
    direction = _t === void 0 ? null : _t,
    _u = _a.justify,
    justify = _u === void 0 ? null : _u,
    _v = _a.align,
    align = _v === void 0 ? null : _v,
    _w = _a.shape,
    shape = _w === void 0 ? null : _w,
    shadow = _a.shadow,
    size = _a.size,
    sizeText = _a.sizeText,
    sizeIcons = _a.sizeIcons,
    padding = _a.padding,
    flexText = _a.flexText,
    alignText = _a.alignText,
    shadowText = _a.shadowText,
    propsFlex = __rest(_a, ["name", "icons", "iconsActive", "label", "labelActive", "lines", "font", "fontActive", "children", "style", "colors", "colorsActive", "onPress", "isActive", "select", "hasMentions", "isDecorated", "direction", "justify", "align", "shape", "shadow", "size", "sizeText", "sizeIcons", "padding", "flexText", "alignText", "shadowText"]);
  var _x = useFlag(),
    isHover = _x[0],
    pressIn = _x[1],
    pressOut = _x[2];
  var _y = useFlag(),
    isSelectVisible = _y[0],
    hideSelect = _y[2],
    toggleSelect = _y[3];
  var sizeFinal = size || 'md';
  var sizeIconsFinal = sizeIcons || sizeFinal;
  var isColumn = direction === 'column';
  var isAuto = sizeFinal === 'auto';
  var state = isHover && 'hover' || isActive && 'active' || null;
  var isSelectable = select !== null;
  var iconsFinal = isActive ? iconsActive || icons : icons;
  var labelFinal = isActive ? labelActive || label : label;
  var fontFinal = isActive ? fontActive || font : font;
  var colorsFinal = isActive ? colorsActive || colors : colors;
  var paddingFinal = React.useMemo(function () {
    return getButtonPadding(isColumn, isAuto, padding !== null && padding !== void 0 ? padding : null);
  }, [isAuto, isColumn, padding]);
  var press = React.useCallback(function (e) {
    onPress === null || onPress === void 0 ? void 0 : onPress(e, name);
    if (isSelectable) {
      toggleSelect();
    }
  }, [onPress, isSelectable, name, toggleSelect]);
  var pressSelect = React.useCallback(function (e, name) {
    if (typeof name === 'string' || !name) {
      onPress === null || onPress === void 0 ? void 0 : onPress(e, name !== null && name !== void 0 ? name : null);
    }
    hideSelect();
  }, [hideSelect, onPress]);
  var _z = React.useMemo(function () {
      if (!iconsFinal || !iconsFinal.length) {
        return emptyArray;
      }
      return getIconProps({
        icons: iconsFinal,
        colors: colorsFinal,
        size: sizeIconsFinal,
        state: state === 'active' && colorsActive ? null : state
      });
    }, [iconsFinal, colorsFinal, sizeIconsFinal, state, colorsActive]),
    _0 = _z[0],
    iconLeftProps = _0 === void 0 ? null : _0,
    _1 = _z[1],
    iconRightProps = _1 === void 0 ? null : _1;
  var containerStyle = useButtonStyle({
    size: sizeFinal,
    style: style
  });
  var flexRef = React.useRef(null);
  React.useEffect(function () {
    if (!ref) {
      return;
    }
    if (typeof ref === 'function') {
      ref(flexRef.current);
      return;
    }
    // eslint-disable-next-line no-param-reassign
    ref.current = flexRef.current;
  }, [ref]);
  return /*#__PURE__*/React.createElement(Flex, __assign({
    ref: flexRef
  }, propsFlex, {
    direction: direction || 'row',
    justify: justify || 'center',
    align: align || 'center',
    shape: shape || 'rounded',
    shadow: shadow || 'sm',
    style: containerStyle,
    colors: colorsFinal || 'primary',
    onPress: onPress || isSelectable ? press : null,
    onPressIn: onPress && pressIn,
    onPressOut: onPress && pressOut,
    padding: paddingFinal,
    state: state === 'active' && colorsActive ? null : state
  }), iconLeftProps && /*#__PURE__*/React.createElement(Icon, __assign({}, iconLeftProps)), !!labelFinal && /*#__PURE__*/React.createElement(Txt, {
    hasMentions: hasMentions,
    isDecorated: isDecorated,
    align: alignText || 'center',
    flex: flexText,
    lines: lines !== null && lines !== void 0 ? lines : 1,
    font: fontFinal || 'semi',
    size: sizeText || sizeFinal,
    shadow: shadowText,
    colors: colorsFinal,
    state: state
  }, labelFinal), children, iconRightProps && /*#__PURE__*/React.createElement(Icon, __assign({}, iconRightProps)), select && /*#__PURE__*/React.createElement(ModalSelect, __assign({}, select, {
    isHidden: !isSelectVisible,
    onClose: hideSelect,
    onPress: pressSelect,
    targetRef: flexRef
  })));
};
var Button = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Button_));

var buttonPaddings = {
  xxsm: '5 0',
  xsm: '8 0',
  sm: '10 0',
  md: '12 0',
  lg: '14 0',
  xlg: '16 0',
  xxlg: '19 0',
  auto: '12 0'
};
var iconSizes$1 = {
  xxsm: 18,
  xsm: 18,
  sm: 20,
  md: 22,
  lg: 24,
  xlg: 26,
  xxlg: 26,
  auto: 26
};
var iconMargins = {
  xxsm: '0 6 0 6',
  xsm: '0 6 0 6',
  sm: '0 6 0 6',
  md: '0 6 0 6',
  lg: '1 6 0 6',
  xlg: '1 6 0 6',
  xxlg: '1 6 0 6',
  auto: '0 6 0 6'
};
var getIconPair = function getIconPair(iconOn, iconOff, size) {
  return {
    active: [__assign(__assign({}, iconOn), {
      sizeIcon: iconSizes$1[size],
      margin: iconMargins[size]
    })],
    inactive: [__assign(__assign({}, iconOff), {
      sizeIcon: iconSizes$1[size],
      margin: iconMargins[size]
    })]
  };
};
var getColoredIcon = function getColoredIcon(initial, colors) {
  if (colors === void 0) {
    colors = null;
  }
  if (!colors) {
    return initial;
  }
  return [__assign(__assign({}, initial[0]), {
    colors: colors
  })];
};
var ButtonCheck_ = function ButtonCheck_(_a, ref) {
  var _b = _a.icons,
    icons = _b === void 0 ? null : _b,
    _c = _a.iconsActive,
    iconsActive = _c === void 0 ? null : _c,
    _d = _a.colors,
    colors = _d === void 0 ? null : _d,
    _e = _a.alignText,
    alignText = _e === void 0 ? null : _e,
    _f = _a.shape,
    shape = _f === void 0 ? null : _f,
    _g = _a.shadow,
    shadow = _g === void 0 ? null : _g,
    _h = _a.justify,
    justify = _h === void 0 ? null : _h,
    _j = _a.align,
    align = _j === void 0 ? null : _j,
    _k = _a.direction,
    direction = _k === void 0 ? null : _k,
    _l = _a.lines,
    lines = _l === void 0 ? null : _l,
    _m = _a.padding,
    padding = _m === void 0 ? null : _m,
    _o = _a.sizeText,
    sizeText = _o === void 0 ? null : _o,
    _p = _a.size,
    size = _p === void 0 ? null : _p,
    _q = _a.colorsIcon,
    colorsIcon = _q === void 0 ? null : _q,
    propsButton = __rest(_a, ["icons", "iconsActive", "colors", "alignText", "shape", "shadow", "justify", "align", "direction", "lines", "padding", "sizeText", "size", "colorsIcon"]);
  var simpleCodeIcons = React.useContext(SimpleCodeUiContext).icons;
  var sizeTextFinal = sizeText || size || 'md';
  var sizedIcons = React.useMemo(function () {
    return {
      xxsm: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'xxsm'),
      xsm: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'xsm'),
      sm: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'sm'),
      md: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'md'),
      lg: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'lg'),
      xlg: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'xlg'),
      xxlg: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'xxlg'),
      auto: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'auto')
    };
  }, [simpleCodeIcons]);
  var checkActive = React.useMemo(function () {
    return getColoredIcon(sizedIcons[sizeTextFinal].active, colorsIcon);
  }, [colorsIcon, sizeTextFinal, sizedIcons]);
  var checkEmpty = React.useMemo(function () {
    return getColoredIcon(sizedIcons[sizeTextFinal].inactive, colorsIcon);
  }, [colorsIcon, sizeTextFinal, sizedIcons]);
  return /*#__PURE__*/React.createElement(Button, __assign({
    ref: ref
  }, propsButton, {
    icons: icons || checkEmpty,
    iconsActive: iconsActive || checkActive,
    colors: colors || 'primarytext',
    alignText: alignText || 'left',
    shape: shape || 'none',
    shadow: shadow || 'none',
    justify: justify || 'flex-start',
    align: align || 'flex-start',
    direction: direction || 'row',
    lines: lines !== null && lines !== void 0 ? lines : 0,
    padding: padding !== null && padding !== void 0 ? padding : buttonPaddings[sizeTextFinal],
    sizeText: sizeTextFinal,
    size: "auto" // must be auto for correct icon display
  }));
};

var ButtonCheck = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(ButtonCheck_));

var defaultCountBatch = 2;
var defaultInterval = 50;
// eslint-disable-next-line react/function-component-definition
var useProgressiveArray = function useProgressiveArray(_a) {
  var _b, _c;
  var _d = _a.items,
    items = _d === void 0 ? null : _d,
    _e = _a.onRenderItem,
    onRenderItem = _e === void 0 ? null : _e,
    _f = _a.countInitial,
    countInitial = _f === void 0 ? null : _f,
    _g = _a.countBatch,
    countBatch = _g === void 0 ? null : _g,
    _h = _a.interval,
    interval = _h === void 0 ? null : _h;
  var mounted = useMounted();
  var _j = React.useState((countInitial !== null && countInitial !== void 0 ? countInitial : 0) < 0 ? (_b = items === null || items === void 0 ? void 0 : items.length) !== null && _b !== void 0 ? _b : 0 : countInitial !== null && countInitial !== void 0 ? countInitial : 0),
    countCurrent = _j[0],
    setCountCurrent = _j[1];
  var countTotal = (_c = items === null || items === void 0 ? void 0 : items.length) !== null && _c !== void 0 ? _c : 0;
  var itemsFinal = items || emptyArray;
  var itemsCurrent = React.useMemo(function () {
    return itemsFinal.slice(0, countCurrent);
  }, [countCurrent, itemsFinal]);
  var timeoutRef = React.useRef(null);
  React.useEffect(function () {
    if (countTotal < countCurrent) {
      setCountCurrent(countTotal);
    }
  }, [countCurrent, countTotal]);
  React.useEffect(function () {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (countCurrent >= countTotal) {
      return;
    }
    if (countCurrent < countTotal) {
      var countNext_1 = Math.min(countCurrent + (countBatch || defaultCountBatch), countTotal);
      setTimeout(function () {
        if (mounted()) {
          setCountCurrent(countNext_1);
        }
      }, interval || defaultInterval);
    }
  }, [countBatch, countCurrent, countTotal, interval, mounted]);
  return itemsCurrent.map(function (item, index) {
    return item ? (onRenderItem === null || onRenderItem === void 0 ? void 0 : onRenderItem(item, index)) || null : null;
  });
};

// eslint-disable-next-line react/function-component-definition
var ListProgressive_ = function ListProgressive_(props) {
  var elements = useProgressiveArray(props);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-no-useless-fragment
    React.createElement(React.Fragment, null, elements)
  );
};
var ListProgressive = /*#__PURE__*/React.memo(ListProgressive_);

var getShape = function getShape(isColumn, isFirst, isLast, shape) {
  if (shape === null || shape === 'none') {
    return 'none';
  }
  var baseShape = shape.split('.')[0];
  if (isFirst) {
    if (isColumn) {
      return "".concat(baseShape, ".top");
    }
    return "".concat(baseShape, ".left");
  }
  if (isLast) {
    if (isColumn) {
      return "".concat(baseShape, ".bottom");
    }
    return "".concat(baseShape, ".right");
  }
  return 'none';
};
var getButtonShape = function getButtonShape(isColumn, buttonShape, shape, i, lastI) {
  if (buttonShape) {
    return buttonShape;
  }
  var finalShape = shape || 'none';
  return lastI > 0 ? getShape(isColumn, i === 0, i === lastI, finalShape) : finalShape;
};
var renderItem$1 = function renderItem(button) {
  return /*#__PURE__*/React.createElement(Button, __assign({
    key: button.name
  }, button));
};
var ButtonGroup_ = function ButtonGroup_(props, ref) {
  var press = usePressButtons(props);
  var _a = props.name,
    name = _a === void 0 ? null : _a,
    _b = props.countInitial,
    countInitial = _b === void 0 ? null : _b,
    _c = props.countBatch,
    countBatch = _c === void 0 ? null : _c,
    _d = props.interval,
    interval = _d === void 0 ? null : _d,
    _e = props.onRenderItem,
    onRenderItem = _e === void 0 ? null : _e,
    _f = props.colors,
    colors = _f === void 0 ? null : _f,
    _g = props.shape,
    shape = _g === void 0 ? null : _g,
    _h = props.colorsActive,
    colorsActive = _h === void 0 ? null : _h,
    _j = props.direction,
    direction = _j === void 0 ? null : _j,
    _k = props.justify,
    justify = _k === void 0 ? null : _k,
    _l = props.align,
    align = _l === void 0 ? null : _l,
    _m = props.icons,
    icons = _m === void 0 ? null : _m,
    _o = props.iconsActive,
    iconsActive = _o === void 0 ? null : _o,
    _p = props.border,
    border = _p === void 0 ? null : _p,
    _q = props.flexText,
    flexText = _q === void 0 ? null : _q,
    _r = props.lines,
    lines = _r === void 0 ? null : _r,
    _s = props.shadowText,
    shadowText = _s === void 0 ? null : _s,
    _t = props.shadow,
    shadow = _t === void 0 ? null : _t,
    _u = props.buttons,
    buttons = _u === void 0 ? null : _u,
    _v = props.size,
    size = _v === void 0 ? null : _v,
    _w = props.font,
    font = _w === void 0 ? null : _w,
    _x = props.fontActive,
    fontActive = _x === void 0 ? null : _x,
    _y = props.onPress,
    onPress = _y === void 0 ? null : _y,
    _z = props.hasMentions,
    hasMentions = _z === void 0 ? null : _z,
    _0 = props.isDecorated,
    isDecorated = _0 === void 0 ? null : _0,
    _1 = props.sizeText,
    sizeText = _1 === void 0 ? null : _1,
    _2 = props.isDisabled,
    isDisabled = _2 === void 0 ? null : _2,
    _3 = props.spacing,
    spacing = _3 === void 0 ? null : _3,
    _4 = props.active,
    active = _4 === void 0 ? null : _4,
    propsFlex = __rest(props, ["name", "countInitial", "countBatch", "interval", "onRenderItem", "colors", "shape", "colorsActive", "direction", "justify", "align", "icons", "iconsActive", "border", "flexText", "lines", "shadowText", "shadow", "buttons", "size", "font", "fontActive", "onPress", "hasMentions", "isDecorated", "sizeText", "isDisabled", "spacing", "active"]);
  var _5 = propsFlex.flex,
    flex = _5 === void 0 ? null : _5;
  var pressNamed = React.useCallback(function (e, buttonName) {
    if (press) {
      press(e, buttonName, name);
    }
  }, [name, press]);
  var isColumn = direction === 'column' || direction === 'column-reverse';
  var modifiedButtons = React.useMemo(function () {
    if (!buttons || !buttons.length) {
      return emptyArray;
    }
    var lastI = buttons.length - 1;
    var finalSpacing = spacing !== null && spacing !== void 0 ? spacing : 0;
    var flexBase = isColumn ? null : flex;
    return buttons.map(function (button, i) {
      var _a, _b;
      if (!button) {
        return null;
      }
      var isActive = active && (typeof active === 'string' && active === button.name || typeof active !== 'string' && active.includes(button.name)) || false;
      var mergedButton = __assign(__assign({}, button), {
        isActive: colorsActive ? false : isActive,
        icons: isActive && iconsActive || button.icons || icons,
        size: button.size || size,
        sizeText: button.sizeText || sizeText,
        colors: isActive && (button.colorsActive || colorsActive) || button.colors || colors,
        isDisabled: button.isDisabled || isDisabled,
        shape: getButtonShape(isColumn, button.shape, shape, i, lastI),
        flex: (_a = button.flex) !== null && _a !== void 0 ? _a : flexBase,
        flexText: (_b = button.flexText) !== null && _b !== void 0 ? _b : flexText,
        font: isActive && fontActive || button.font || font,
        border: button.border || border,
        shadow: button.shadow || shadow || 'sm',
        shadowText: button.shadowText || shadowText,
        lines: button.lines || lines,
        style: finalSpacing === 0 ? button.style : [isColumn ? {
          marginTop: i !== 0 ? finalSpacing : 0
        } : {
          marginLeft: i !== 0 ? finalSpacing : 0
        }, button.style],
        onPress: onPress ? pressNamed : null,
        hasMentions: button.hasMentions || hasMentions,
        isDecorated: button.isDecorated || isDecorated
      });
      return mergedButton;
    });
  }, [buttons, spacing, active, isColumn, flex, colorsActive, iconsActive, icons, size, sizeText, colors, isDisabled, shape, flexText, fontActive, font, border, shadow, shadowText, lines, onPress, pressNamed, hasMentions, isDecorated]);
  return /*#__PURE__*/React.createElement(Flex, __assign({
    ref: ref
  }, propsFlex, {
    direction: direction || 'row',
    justify: justify || 'space-between',
    align: align || (isColumn ? 'stretch' : 'center')
  }), /*#__PURE__*/React.createElement(ListProgressive, {
    items: modifiedButtons,
    onRenderItem: onRenderItem || renderItem$1,
    countInitial: countInitial,
    countBatch: countBatch,
    interval: interval
  }));
};
var ButtonGroup = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(ButtonGroup_));

var ButtonRadio_ = function ButtonRadio_(_a, ref) {
  var _b = _a.icons,
    icons = _b === void 0 ? null : _b,
    _c = _a.iconsActive,
    iconsActive = _c === void 0 ? null : _c,
    _d = _a.colors,
    colors = _d === void 0 ? null : _d,
    _e = _a.shadow,
    shadow = _e === void 0 ? null : _e,
    _f = _a.shape,
    shape = _f === void 0 ? null : _f,
    _g = _a.justify,
    justify = _g === void 0 ? null : _g,
    propsButton = __rest(_a, ["icons", "iconsActive", "colors", "shadow", "shape", "justify"]);
  var simpleCodeIcons = React.useContext(SimpleCodeUiContext).icons;
  var radioActive = React.useMemo(function () {
    return [simpleCodeIcons.radioOn];
  }, [simpleCodeIcons.radioOn]);
  var radioEmpty = React.useMemo(function () {
    return [simpleCodeIcons.radioOff];
  }, [simpleCodeIcons.radioOff]);
  return /*#__PURE__*/React.createElement(Button, __assign({
    ref: ref
  }, propsButton, {
    icons: icons || radioEmpty,
    colors: colors || 'primarytext',
    shadow: shadow || 'none',
    shape: shape || 'none',
    justify: justify || 'flex-start',
    iconsActive: iconsActive || radioActive
  }));
};
var ButtonRadio = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(ButtonRadio_));

var renderItem = function renderItem(button) {
  return /*#__PURE__*/React.createElement(ButtonRadio, __assign({
    key: button.name
  }, button));
};
var ButtonGroupRadio_ = function ButtonGroupRadio_(_a, ref) {
  var _b = _a.onRenderItem,
    onRenderItem = _b === void 0 ? null : _b,
    _c = _a.behavior,
    behavior = _c === void 0 ? null : _c,
    _d = _a.direction,
    direction = _d === void 0 ? null : _d,
    _e = _a.shadow,
    shadow = _e === void 0 ? null : _e,
    _f = _a.align,
    align = _f === void 0 ? null : _f,
    _g = _a.iconsActive,
    iconsActive = _g === void 0 ? null : _g,
    propsButtonGroup = __rest(_a, ["onRenderItem", "behavior", "direction", "shadow", "align", "iconsActive"]);
  var simpleCodeIcons = React.useContext(SimpleCodeUiContext).icons;
  var radioActive = React.useMemo(function () {
    return [simpleCodeIcons.radioOn];
  }, [simpleCodeIcons.radioOn]);
  return /*#__PURE__*/React.createElement(ButtonGroup, __assign({
    ref: ref
  }, propsButtonGroup, {
    behavior: behavior || 'radio',
    direction: direction || 'column',
    shadow: shadow || 'none',
    align: align || 'flex-start',
    onRenderItem: onRenderItem || renderItem,
    iconsActive: iconsActive || radioActive
  }));
};
var ButtonGroupRadio = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(ButtonGroupRadio_));

var Checkbox_ = function Checkbox_(_a, ref) {
  var _b = _a.onPress,
    onPress = _b === void 0 ? null : _b,
    _c = _a.onChange,
    onChange = _c === void 0 ? null : _c,
    _d = _a.value,
    value = _d === void 0 ? null : _d,
    propsButtonCheck = __rest(_a, ["onPress", "onChange", "value"]);
  var _f = useSwitch({
      onChange: onChange,
      value: value,
      isDisabled: false
    }),
    switchValue = _f.switchValue,
    toggle = _f.toggle;
  var press = React.useCallback(function (_e, name) {
    toggle();
    if (onPress) {
      onPress(_e, name);
    }
  }, [onPress, toggle]);
  return /*#__PURE__*/React.createElement(ButtonCheck, __assign({
    ref: ref
  }, propsButtonCheck, {
    isActive: switchValue,
    onPress: press
  }));
};
var Checkbox = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Checkbox_));

var Divider_ = function Divider_(_a, ref) {
  var _b = _a.size,
    size = _b === void 0 ? null : _b,
    _c = _a.style,
    style = _c === void 0 ? null : _c,
    _d = _a.shape,
    shape = _d === void 0 ? null : _d,
    _e = _a.shadow,
    shadow = _e === void 0 ? null : _e,
    _f = _a.colors,
    colors = _f === void 0 ? null : _f,
    propsFlex = __rest(_a, ["size", "style", "shape", "shadow", "colors"]);
  var finalSize = size || 'md';
  var themeContext = React.useContext(ThemeContext);
  var containerStyle = React.useMemo(function () {
    var size = themeContext.getSize(finalSize, 'divider');
    return [{
      minWidth: size,
      height: size
    }, style];
  }, [themeContext, finalSize, style]);
  return /*#__PURE__*/React.createElement(Flex, __assign({
    ref: ref
  }, propsFlex, {
    style: containerStyle,
    colors: colors || 'secondary',
    shape: shape || 'none',
    shadow: shadow || 'none'
  }));
};
var Divider = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Divider_));

var buttonSizes = {
  xxsm: 'xsm',
  xsm: 'sm',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
  xlg: 'lg',
  xxlg: 'lg',
  auto: 'md'
};
var ListItem_ = function ListItem_(_a, ref) {
  var _b = _a.name,
    name = _b === void 0 ? null : _b,
    _c = _a.size,
    size = _c === void 0 ? null : _c,
    _d = _a.sizeText,
    sizeText = _d === void 0 ? null : _d,
    _e = _a.sizeIcons,
    sizeIcons = _e === void 0 ? null : _e,
    _f = _a.alignText,
    alignText = _f === void 0 ? null : _f,
    _g = _a.icons,
    icons = _g === void 0 ? null : _g,
    _h = _a.children,
    children = _h === void 0 ? null : _h,
    _j = _a.style,
    style = _j === void 0 ? null : _j,
    _k = _a.font,
    font = _k === void 0 ? null : _k,
    _l = _a.shape,
    shape = _l === void 0 ? null : _l,
    _m = _a.shadow,
    shadow = _m === void 0 ? null : _m,
    _o = _a.colors,
    colors = _o === void 0 ? null : _o,
    _p = _a.onPressButton,
    onPressButton = _p === void 0 ? null : _p,
    _q = _a.isDisabled,
    isDisabled = _q === void 0 ? false : _q,
    _r = _a.buttonGroup,
    buttonGroup = _r === void 0 ? null : _r,
    _s = _a.direction,
    direction = _s === void 0 ? null : _s,
    _t = _a.justify,
    justify = _t === void 0 ? null : _t,
    propsButton = __rest(_a, ["name", "size", "sizeText", "sizeIcons", "alignText", "icons", "children", "style", "font", "shape", "shadow", "colors", "onPressButton", "isDisabled", "buttonGroup", "direction", "justify"]);
  var pressButton = React.useCallback(function (e, buttonName) {
    if (onPressButton) {
      e.stopPropagation();
      onPressButton(e, buttonName, name);
    }
  }, [name, onPressButton]);
  var sizeFinal = size || 'md';
  var buttonGroupProps = React.useMemo(function () {
    var _a;
    return buttonGroup && __assign(__assign({}, buttonGroup), {
      isDisabled: isDisabled || buttonGroup.isDisabled,
      size: buttonGroup.size || buttonSizes[sizeFinal],
      colors: buttonGroup.colors || 'primarytext',
      shadow: buttonGroup.shadow || 'none',
      flex: (_a = buttonGroup.flex) !== null && _a !== void 0 ? _a : -1
    }) || null;
  }, [buttonGroup, isDisabled, sizeFinal]);
  var themeContext = React.useContext(ThemeContext);
  var containerStyle = React.useMemo(function () {
    var size = themeContext.getSize(sizeFinal, 'item');
    return [{
      minWidth: size || undefined,
      height: size || undefined
    }, style];
  }, [themeContext, sizeFinal, style]);
  var finalShadow = shadow || 'none';
  return /*#__PURE__*/React.createElement(Button, __assign({
    ref: ref
  }, propsButton, {
    name: name,
    size: "auto",
    sizeText: sizeText || sizeFinal,
    sizeIcons: sizeIcons || sizeFinal,
    icons: icons,
    style: containerStyle,
    font: font || 'regular',
    shape: shape || 'none',
    shadow: finalShadow,
    colors: colors || (finalShadow === 'none' ? 'primarytext' : 'primary'),
    direction: direction || (sizeFinal === 'auto' ? 'column' : 'row'),
    justify: justify || 'space-between',
    alignText: alignText || 'left'
  }), children || /*#__PURE__*/React.createElement(Flex, {
    colors: "none"
  }), buttonGroupProps && /*#__PURE__*/React.createElement(Flex, {
    colors: "none"
  }, /*#__PURE__*/React.createElement(ButtonGroup, __assign({}, buttonGroupProps, {
    onPress: pressButton
  }))));
};
var ListItem = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(ListItem_));

var InputZone_ = function InputZone_(props, ref) {
  var InputZone = React.useContext(SimpleCodeUiContext).InputZone;
  return /*#__PURE__*/React.createElement(InputZone, __assign({
    ref: ref
  }, props));
};
var InputZone = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(InputZone_));

var inputWrapper = {
  height: '100%',
  overflow: 'hidden'
};
var Input_ = function Input_(_a, ref) {
  var _b = _a.alignText,
    alignText = _b === void 0 ? null : _b,
    _c = _a.flexText,
    flexText = _c === void 0 ? null : _c,
    _d = _a.font,
    font = _d === void 0 ? null : _d,
    _e = _a.shadowText,
    shadowText = _e === void 0 ? null : _e,
    _f = _a.state,
    state = _f === void 0 ? null : _f,
    _g = _a.hasMentions,
    hasMentions = _g === void 0 ? null : _g,
    _h = _a.isBlurOnSubmit,
    isBlurOnSubmit = _h === void 0 ? null : _h,
    _j = _a.isMulti,
    isMulti = _j === void 0 ? null : _j,
    _k = _a.isAuto,
    isAuto = _k === void 0 ? null : _k,
    _l = _a.placeholder,
    placeholder = _l === void 0 ? null : _l,
    _m = _a.onChange,
    onChange = _m === void 0 ? null : _m,
    _o = _a.onMention,
    onMention = _o === void 0 ? null : _o,
    _p = _a.max,
    max = _p === void 0 ? null : _p,
    _q = _a.value,
    value = _q === void 0 ? null : _q,
    _r = _a.colorsPlaceholder,
    colorsPlaceholder = _r === void 0 ? null : _r,
    _s = _a.keyboardType,
    keyboardType = _s === void 0 ? null : _s,
    _t = _a.secureTextEntry,
    secureTextEntry = _t === void 0 ? null : _t,
    _u = _a.onBlur,
    onBlur = _u === void 0 ? null : _u,
    _v = _a.onFocus,
    onFocus = _v === void 0 ? null : _v,
    _w = _a.children,
    children = _w === void 0 ? null : _w,
    _x = _a.autoCapitalize,
    autoCapitalize = _x === void 0 ? null : _x,
    _y = _a.autoCorrect,
    autoCorrect = _y === void 0 ? null : _y,
    _z = _a.initialLines,
    initialLines = _z === void 0 ? null : _z,
    _0 = _a.isReadonly,
    isReadonly = _0 === void 0 ? null : _0,
    _1 = _a.onPress,
    onPress = _1 === void 0 ? null : _1,
    _2 = _a.onSubmit,
    onSubmit = _2 === void 0 ? null : _2,
    _3 = _a.returnKeyType,
    returnKeyType = _3 === void 0 ? null : _3,
    _4 = _a.direction,
    direction = _4 === void 0 ? null : _4,
    _5 = _a.sizeText,
    sizeText = _5 === void 0 ? null : _5,
    _6 = _a.custom,
    custom = _6 === void 0 ? null : _6,
    propsListItem = __rest(_a, ["alignText", "flexText", "font", "shadowText", "state", "hasMentions", "isBlurOnSubmit", "isMulti", "isAuto", "placeholder", "onChange", "onMention", "max", "value", "colorsPlaceholder", "keyboardType", "secureTextEntry", "onBlur", "onFocus", "children", "autoCapitalize", "autoCorrect", "initialLines", "isReadonly", "onPress", "onSubmit", "returnKeyType", "direction", "sizeText", "custom"]);
  var _7 = propsListItem.size,
    size = _7 === void 0 ? null : _7,
    _8 = propsListItem.colors,
    colors = _8 === void 0 ? null : _8,
    _9 = propsListItem.isDisabled,
    isDisabled = _9 === void 0 ? null : _9,
    _10 = propsListItem.testId,
    testId = _10 === void 0 ? null : _10;
  var _11 = React.useState(null),
    focuser = _11[0],
    setFocuser = _11[1];
  var pressItem = React.useCallback(function (event, name) {
    if (!isReadonly && focuser) {
      focuser.focus();
    }
    if (onPress) {
      onPress(event, name);
    }
  }, [isReadonly, onPress, focuser]);
  var finalSize = size || 'md';
  var finalSizeText = sizeText || 'md';
  var themeContext = React.useContext(ThemeContext);
  var placeholderTextColor = themeContext.getColorText(state, colorsPlaceholder || 'greytext');
  var minHeight = React.useMemo(function () {
    var lineHeight = themeContext.getSize(finalSizeText, 'line');
    var minHeight = lineHeight || 0;
    if (initialLines && initialLines > 1) {
      minHeight *= initialLines;
    }
    return minHeight;
  }, [finalSizeText, initialLines, themeContext]);
  var wrapperStyle = React.useMemo(function () {
    return [inputWrapper, {
      minHeight: minHeight
    }];
  }, [minHeight]);
  var themeStyle = React.useMemo(function () {
    return [__assign(__assign({}, themeContext.getFont(font || 'regular')), {
      fontSize: themeContext.getSize(finalSizeText, 'font'),
      minHeight: minHeight,
      color: themeContext.getColorText(state, colors || 'primary'),
      opacity: isReadonly ? 0.75 : 1
    }), themeContext.getShadowText(shadowText)];
  }, [themeContext, font, finalSizeText, minHeight, state, colors, isReadonly, shadowText]);
  return /*#__PURE__*/React.createElement(ListItem, __assign({
    ref: ref
  }, propsListItem, {
    onPress: pressItem,
    direction: direction || 'row'
  }), /*#__PURE__*/React.createElement(Flex, {
    flex: direction === 'column' ? 0 : 1,
    colors: "none",
    style: wrapperStyle
  }, /*#__PURE__*/React.createElement(InputZone, {
    sizeText: sizeText,
    alignText: alignText,
    flexText: flexText,
    font: font,
    shadowText: shadowText,
    colors: colors,
    isDisabled: isDisabled,
    hasMentions: hasMentions,
    isBlurOnSubmit: isBlurOnSubmit,
    isMulti: isMulti,
    isAuto: isAuto,
    placeholder: placeholder,
    max: max,
    keyboardType: keyboardType,
    secureTextEntry: secureTextEntry,
    onBlur: onBlur,
    onFocus: onFocus,
    autoCapitalize: autoCapitalize,
    autoCorrect: autoCorrect,
    isReadonly: isReadonly,
    onSubmit: onSubmit,
    returnKeyType: returnKeyType,
    value: value,
    style: themeStyle,
    size: finalSize,
    placeholderTextColor: placeholderTextColor,
    onChange: onChange,
    onFocuser: setFocuser,
    onMention: onMention,
    custom: custom,
    testId: testId && "InputZone:".concat(testId)
  })), children);
};
var Input = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Input_));

var KeyboardContext = /*#__PURE__*/React.createContext({
  height: 0
});

var List_ = function List_(_a, ref) {
  // unused
    _a.name;
    _a.label;
    _a.labelActive;
    _a.isActive;
    _a.select;
    _a.href;
    var // Button
    _h = _a.size,
    // Button
    size = _h === void 0 ? null : _h,
    _j = _a.sizeText,
    sizeText = _j === void 0 ? null : _j,
    _k = _a.sizeIcons,
    sizeIcons = _k === void 0 ? null : _k,
    _l = _a.alignText,
    alignText = _l === void 0 ? null : _l,
    _m = _a.hasMentions,
    hasMentions = _m === void 0 ? null : _m,
    _o = _a.isDecorated,
    isDecorated = _o === void 0 ? null : _o,
    _p = _a.icons,
    icons = _p === void 0 ? null : _p,
    _q = _a.iconsActive,
    iconsActive = _q === void 0 ? null : _q,
    _r = _a.shadowText,
    shadowText = _r === void 0 ? null : _r,
    _s = _a.flexText,
    flexText = _s === void 0 ? null : _s,
    _t = _a.lines,
    lines = _t === void 0 ? null : _t,
    _u = _a.font,
    font = _u === void 0 ? null : _u,
    _v = _a.fontActive,
    fontActive = _v === void 0 ? null : _v,
    _w = _a.colorsActive,
    colorsActive = _w === void 0 ? null : _w,
    // ListItem
    _x = _a.onPress,
    // ListItem
    onPress = _x === void 0 ? null : _x,
    _y = _a.onPressButton,
    onPressButton = _y === void 0 ? null : _y,
    _z = _a.buttonGroup,
    buttonGroup = _z === void 0 ? null : _z,
    // List
    _0 = _a.active,
    // List
    active = _0 === void 0 ? null : _0,
    _1 = _a.behavior,
    behavior = _1 === void 0 ? null : _1,
    _2 = _a.divider,
    divider = _2 === void 0 ? null : _2,
    // ListProgressive
    _3 = _a.items,
    // ListProgressive
    items = _3 === void 0 ? null : _3,
    _4 = _a.onRenderItem,
    onRenderItem = _4 === void 0 ? null : _4,
    _5 = _a.countInitial,
    countInitial = _5 === void 0 ? null : _5,
    _6 = _a.countBatch,
    countBatch = _6 === void 0 ? null : _6,
    _7 = _a.interval,
    interval = _7 === void 0 ? null : _7,
    // Per-item flex
    _8 = _a.border,
    // Per-item flex
    border = _8 === void 0 ? null : _8,
    _9 = _a.shadow,
    shadow = _9 === void 0 ? null : _9,
    _10 = _a.shape,
    shape = _10 === void 0 ? null : _10,
    _11 = _a.direction,
    direction = _11 === void 0 ? null : _11,
    _12 = _a.justify,
    justify = _12 === void 0 ? null : _12,
    _13 = _a.align,
    align = _13 === void 0 ? null : _13,
    _14 = _a.colors,
    colors = _14 === void 0 ? null : _14,
    _15 = _a.isDisabled,
    isDisabled = _15 === void 0 ? null : _15,
    propsFlex = __rest(_a, ["name", "label", "labelActive", "isActive", "select", "href", "size", "sizeText", "sizeIcons", "alignText", "hasMentions", "isDecorated", "icons", "iconsActive", "shadowText", "flexText", "lines", "font", "fontActive", "colorsActive", "onPress", "onPressButton", "buttonGroup", "active", "behavior", "divider", "items", "onRenderItem", "countInitial", "countBatch", "interval", "border", "shadow", "shape", "direction", "justify", "align", "colors", "isDisabled"]);
  var press = usePressButtons({
    onPress: onPress,
    active: active,
    behavior: behavior
  });
  var pressButton = usePressButtons({
    onPress: onPressButton,
    active: active,
    behavior: behavior
  });
  var modifiedItems = React.useMemo(function () {
    if (!items) {
      return emptyArray;
    }
    return items.map(function (item) {
      var _a, _b;
      if (!item) {
        return null;
      }
      var isActive = active && (typeof active === 'string' && active === item.name || typeof active !== 'string' && active.includes((_a = item.name) !== null && _a !== void 0 ? _a : null)) || false;
      var mergedItem = __assign(__assign({}, item), {
        isActive: colorsActive ? false : isActive,
        icons: item.icons || icons,
        iconsActive: item.iconsActive || iconsActive,
        size: item.size || size,
        sizeText: item.sizeText || sizeText,
        sizeIcons: item.sizeIcons || sizeIcons,
        colors: isActive && colorsActive || item.colors || colors,
        isDisabled: item.isDisabled || isDisabled,
        flex: item.flex,
        flexText: (_b = item.flexText) !== null && _b !== void 0 ? _b : flexText,
        font: isActive && fontActive || item.font || font,
        border: item.border || border,
        shadow: item.shadow || shadow,
        shape: item.shape || shape,
        alignText: item.alignText || alignText,
        buttonGroup: item.buttonGroup || buttonGroup,
        shadowText: item.shadowText || shadowText,
        lines: item.lines || lines,
        hasMentions: item.hasMentions || hasMentions,
        isDecorated: item.isDecorated || isDecorated
      });
      return mergedItem;
    });
  }, [items, active, colorsActive, icons, iconsActive, size, sizeText, sizeIcons, colors, isDisabled, flexText, fontActive, font, border, shadow, shape, alignText, buttonGroup, shadowText, lines, hasMentions, isDecorated]);
  var defaultRenderItem = React.useCallback(function (item, i) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: item.name
    }, /*#__PURE__*/React.createElement(ListItem, __assign({
      key: item.name
    }, item, {
      onPress: onPress && press,
      onPressButton: onPressButton && pressButton
    })), !!divider && i < modifiedItems.length - 1 && /*#__PURE__*/React.createElement(Divider, __assign({}, divider)));
  }, [divider, modifiedItems.length, onPress, onPressButton, press, pressButton]);
  return /*#__PURE__*/React.createElement(Flex, __assign({
    ref: ref
  }, propsFlex, {
    direction: direction || 'column',
    justify: justify || 'flex-start',
    align: align || (direction === 'row' ? 'center' : 'stretch')
  }), /*#__PURE__*/React.createElement(ListProgressive, {
    items: modifiedItems,
    countBatch: countBatch,
    interval: interval,
    onRenderItem: onRenderItem || defaultRenderItem,
    countInitial: countInitial !== null && countInitial !== void 0 ? countInitial : -1
  }));
};
var List = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(List_));

var LoadingIcon_ = function LoadingIcon_(props, ref) {
  var LoadingIcon = React.useContext(SimpleCodeUiContext).LoadingIcon;
  return /*#__PURE__*/React.createElement(LoadingIcon, __assign({
    ref: ref
  }, props));
};
var LoadingIcon = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(LoadingIcon_));

var labelSizes = {
  xxsm: 'xsm',
  xsm: 'xsm',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
  xlg: 'lg',
  xxlg: 'xlg',
  auto: 'md'
};
var iconSizes = {
  xxsm: 18,
  xsm: 18,
  sm: 18,
  md: 36,
  lg: 36,
  xlg: 36,
  xxlg: 36,
  auto: 36
};
var Loading_ = function Loading_(_a, ref) {
  var _b = _a.icons,
    icons = _b === void 0 ? null : _b,
    _c = _a.size,
    size = _c === void 0 ? null : _c,
    _d = _a.sizeText,
    sizeText = _d === void 0 ? null : _d,
    _e = _a.font,
    font = _e === void 0 ? null : _e,
    _f = _a.direction,
    direction = _f === void 0 ? null : _f,
    _g = _a.shape,
    shape = _g === void 0 ? null : _g,
    _h = _a.border,
    border = _h === void 0 ? null : _h,
    _j = _a.shadow,
    shadow = _j === void 0 ? null : _j,
    _k = _a.shadowText,
    shadowText = _k === void 0 ? null : _k,
    _l = _a.colors,
    colors = _l === void 0 ? null : _l,
    propsButton = __rest(_a, ["icons", "size", "sizeText", "font", "direction", "shape", "border", "shadow", "shadowText", "colors"]);
  var sizeFinal = size || 'md';
  var indicatorSize = iconSizes[sizeFinal] || 36;
  var labelSize = labelSizes[sizeFinal];
  var iconsDefault = React.useMemo(function () {
    return [{
      Component: LoadingIcon,
      sizeIcon: indicatorSize !== null && indicatorSize !== void 0 ? indicatorSize : 36,
      size: indicatorSize === 18 ? 'sm' : 'md'
    }];
  }, [indicatorSize]);
  var directionFinal = direction || 'column';
  return /*#__PURE__*/React.createElement(Button, __assign({
    ref: ref
  }, propsButton, {
    colors: colors || 'secondarytext',
    icons: icons || iconsDefault,
    size: directionFinal === 'column' ? 'auto' : sizeFinal,
    sizeText: sizeText || labelSize,
    font: font || 'regular',
    shape: shape || 'none',
    border: border || 'none',
    shadow: shadow || 'none',
    shadowText: shadowText || 'none',
    direction: direction || 'column'
  }));
};
var Loading = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Loading_));

var LoadingView_ = function LoadingView_(_a) {
  var _b = _a.style,
    style = _b === void 0 ? null : _b,
    _c = _a.colorsContainer,
    colorsContainer = _c === void 0 ? null : _c,
    _d = _a.isHidden,
    isHidden = _d === void 0 ? null : _d,
    _e = _a.padding,
    padding = _e === void 0 ? null : _e,
    _f = _a.margin,
    margin = _f === void 0 ? null : _f,
    _g = _a.href,
    href = _g === void 0 ? null : _g,
    _h = _a.onPress,
    onPress = _h === void 0 ? null : _h,
    _j = _a.testId,
    testId = _j === void 0 ? null : _j,
    _k = _a.isDisabled,
    isDisabled = _k === void 0 ? null : _k,
    _l = _a.shape,
    shape = _l === void 0 ? null : _l,
    _m = _a.border,
    border = _m === void 0 ? null : _m,
    _o = _a.shadow,
    shadow = _o === void 0 ? null : _o,
    _p = _a.isLoading,
    isLoading = _p === void 0 ? null : _p,
    _q = _a.children,
    children = _q === void 0 ? null : _q,
    _r = _a.label,
    label = _r === void 0 ? null : _r,
    propsLoading = __rest(_a, ["style", "colorsContainer", "isHidden", "padding", "margin", "href", "onPress", "testId", "isDisabled", "shape", "border", "shadow", "isLoading", "children", "label"]);
  var flex = propsLoading.flex,
    direction = propsLoading.direction,
    justify = propsLoading.justify,
    align = propsLoading.align;
  return /*#__PURE__*/React.createElement(Flex, {
    style: style,
    colors: colorsContainer || 'secondary',
    isHidden: isHidden,
    padding: padding,
    margin: margin,
    flex: flex,
    href: href,
    onPress: onPress,
    testId: testId,
    isDisabled: isDisabled,
    shape: shape,
    border: border,
    shadow: shadow
  }, /*#__PURE__*/React.createElement(Flex, {
    flex: flex,
    colors: "none",
    isHidden: isLoading,
    direction: direction,
    justify: justify,
    align: align
  }, children), isLoading && /*#__PURE__*/React.createElement(Loading, __assign({}, propsLoading, {
    label: label || 'Loading...'
  })));
};
var LoadingView = /*#__PURE__*/React.memo(LoadingView_);

var MentionProvider_ = function MentionProvider_(_a) {
  var _b = _a.name,
    name = _b === void 0 ? null : _b,
    _c = _a.colors,
    colors = _c === void 0 ? null : _c,
    _d = _a.colorsSelf,
    colorsSelf = _d === void 0 ? null : _d,
    _e = _a.children,
    children = _e === void 0 ? null : _e;
  var value = React.useMemo(function () {
    return {
      name: name,
      colors: colors,
      colorsSelf: colorsSelf
    };
  }, [name, colors, colorsSelf]);
  return /*#__PURE__*/React.createElement(MentionContext.Provider, {
    value: value
  }, children);
};
var MentionProvider = /*#__PURE__*/React.memo(MentionProvider_);

var Modal_ = function Modal_(props, ref) {
  var Modal = React.useContext(SimpleCodeUiContext).Modal;
  return /*#__PURE__*/React.createElement(Modal, __assign({
    ref: ref
  }, props));
};
var Modal = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Modal_));

var ModalContext = /*#__PURE__*/React.createContext({
  showModal: function showModal() {
    getLogger().warn('ModalProvider.showModal not assigned.');
  },
  hideModal: function hideModal() {
    getLogger().warn('ModalProvider.hideModal not assigned.');
  },
  showToast: function showToast() {
    getLogger().warn('ModalProvider.showToast not assigned.');
  }
});

var Section_ = function Section_(_a, ref) {
  // unused
    _a.select;
    var // header
    _c = _a.size,
    // header
    size = _c === void 0 ? null : _c,
    _d = _a.sizeText,
    sizeText = _d === void 0 ? null : _d,
    _e = _a.icons,
    icons = _e === void 0 ? null : _e,
    _f = _a.label,
    label = _f === void 0 ? null : _f,
    _g = _a.lines,
    lines = _g === void 0 ? null : _g,
    _h = _a.children,
    children = _h === void 0 ? null : _h,
    _j = _a.header,
    header = _j === void 0 ? null : _j,
    _k = _a.flexText,
    flexText = _k === void 0 ? null : _k,
    _l = _a.font,
    font = _l === void 0 ? null : _l,
    _m = _a.shadowText,
    shadowText = _m === void 0 ? null : _m,
    _o = _a.colors,
    colors = _o === void 0 ? null : _o,
    _p = _a.href,
    href = _p === void 0 ? null : _p,
    _q = _a.onPress,
    onPress = _q === void 0 ? null : _q,
    _r = _a.isActive,
    isActive = _r === void 0 ? null : _r,
    _s = _a.isDisabled,
    isDisabled = _s === void 0 ? null : _s,
    _t = _a.buttonGroup,
    buttonGroup = _t === void 0 ? null : _t,
    _u = _a.justify,
    justify = _u === void 0 ? null : _u,
    _v = _a.align,
    align = _v === void 0 ? null : _v,
    _w = _a.divider,
    divider = _w === void 0 ? null : _w,
    propsFlex = __rest(_a, ["select", "size", "sizeText", "icons", "label", "lines", "children", "header", "flexText", "font", "shadowText", "colors", "href", "onPress", "isActive", "isDisabled", "buttonGroup", "justify", "align", "divider"]);
  var press = React.useCallback(function (e, name) {
    if (typeof name === 'string' && onPress) {
      onPress(e, name);
    }
  }, [onPress]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex, __assign({
    ref: ref
  }, propsFlex), /*#__PURE__*/React.createElement(ListItem, {
    size: size || 'xsm',
    icons: icons,
    label: label,
    lines: lines,
    flexText: flexText,
    font: font || 'semi',
    sizeText: sizeText || 'lg',
    shadowText: shadowText,
    colors: colors,
    href: href,
    isActive: isActive,
    isDisabled: isDisabled,
    justify: justify,
    align: align,
    buttonGroup: buttonGroup,
    onPress: onPress && press
  }, header), children), !!divider && /*#__PURE__*/React.createElement(Divider, __assign({}, divider)));
};
var Section = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Section_));

var variantMap = {
  ghost: {
    colors: 'secondaryghost',
    colorsActive: 'primaryghost',
    border: 'md',
    justify: 'space-between',
    sizeText: 'md'
  },
  text: {
    colors: 'secondarytext',
    colorsActive: 'primarytext',
    border: 'none',
    justify: 'flex-start',
    sizeText: 'sm'
  }
};
var Select_ = function Select_(_a, ref) {
  var _b = _a.label,
    label = _b === void 0 ? null : _b,
    _c = _a.placeholder,
    placeholder = _c === void 0 ? null : _c,
    _d = _a.active,
    active = _d === void 0 ? null : _d,
    _f = _a.options,
    options = _f === void 0 ? null : _f,
    _g = _a.onChange,
    onChange = _g === void 0 ? null : _g,
    _h = _a.variant,
    variant = _h === void 0 ? null : _h,
    _j = _a.colors,
    colors = _j === void 0 ? null : _j,
    _k = _a.colorsActive,
    colorsActive = _k === void 0 ? null : _k,
    _l = _a.sizeText,
    sizeText = _l === void 0 ? null : _l,
    _m = _a.overlayStyle,
    overlayStyle = _m === void 0 ? null : _m,
    _o = _a.backgroundStyle,
    backgroundStyle = _o === void 0 ? null : _o,
    _p = _a.isNonBlocking,
    isNonBlocking = _p === void 0 ? null : _p,
    _q = _a.font,
    font = _q === void 0 ? null : _q,
    _r = _a.border,
    border = _r === void 0 ? null : _r,
    _s = _a.justify,
    justify = _s === void 0 ? null : _s,
    _t = _a.padding,
    padding = _t === void 0 ? null : _t,
    _u = _a.icons,
    icons = _u === void 0 ? null : _u,
    _v = _a.shape,
    shape = _v === void 0 ? null : _v,
    _w = _a.alignText,
    alignText = _w === void 0 ? null : _w,
    _x = _a.shadow,
    shadow = _x === void 0 ? null : _x,
    propsButton = __rest(_a, ["label", "placeholder", "active", "options", "onChange", "variant", "colors", "colorsActive", "sizeText", "overlayStyle", "backgroundStyle", "isNonBlocking", "font", "border", "justify", "padding", "icons", "shape", "alignText", "shadow"]);
  var simpleCodeIcons = React.useContext(SimpleCodeUiContext).icons;
  var caretIcon = React.useMemo(function () {
    return [null, simpleCodeIcons.caretDown];
  }, [simpleCodeIcons.caretDown]);
  var activeValue = "".concat(active);
  var labelActive = React.useMemo(function () {
    if (activeValue === null || !(options && options.length)) {
      return emptyString;
    }
    var found = options.find(function (item) {
      return item && item.name === activeValue;
    });
    return found ? found.label || emptyString : emptyString;
  }, [options, activeValue]);
  var press = React.useCallback(function (_e, name) {
    if (name === activeValue) {
      return;
    }
    if ((typeof name === 'string' || name === null) && onChange) {
      var isSelectable = options && options.some(function (item) {
        return item && item.name === name;
      });
      if (isSelectable) {
        onChange(name);
      }
    }
  }, [activeValue, onChange, options]);
  var selectEmbed = React.useMemo(function () {
    return {
      buttons: options,
      active: activeValue,
      overlayStyle: overlayStyle,
      backgroundStyle: backgroundStyle,
      isNonBlocking: isNonBlocking
    };
  }, [options, activeValue, overlayStyle, backgroundStyle, isNonBlocking]);
  var variantOpts = variantMap[variant || 'ghost'];
  var variantColors = labelActive ? colorsActive || variantOpts.colorsActive : colors || variantOpts.colors;
  return /*#__PURE__*/React.createElement(Button, __assign({
    ref: ref
  }, propsButton, {
    label: label || labelActive || placeholder || ' ',
    onPress: press,
    colors: variantColors,
    sizeText: sizeText || variantOpts.sizeText,
    select: selectEmbed,
    font: font || (labelActive ? 'semi' : 'regular'),
    border: border || variantOpts.border,
    justify: justify || variantOpts.justify,
    padding: padding !== null && padding !== void 0 ? padding : 10,
    icons: icons || caretIcon,
    shape: shape || 'md',
    alignText: alignText || 'left',
    shadow: shadow || 'none'
  }));
};
var Select = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Select_));

var SimpleCodeUiProvider_ = function SimpleCodeUiProvider_(_a) {
  var _b = _a.children,
    children = _b === void 0 ? null : _b,
    Flex = _a.Flex,
    TextFragment = _a.TextFragment,
    ModalSelect = _a.ModalSelect,
    Toast = _a.Toast,
    InputZone = _a.InputZone,
    LoadingIcon = _a.LoadingIcon,
    Modal = _a.Modal,
    icons = _a.icons,
    transformText = _a.transformText;
  var value = React.useMemo(function () {
    return __assign(__assign({}, defaultSimpleCodeUiContext), {
      Flex: Flex,
      TextFragment: TextFragment,
      ModalSelect: ModalSelect,
      Toast: Toast,
      InputZone: InputZone,
      LoadingIcon: LoadingIcon,
      Modal: Modal,
      icons: icons,
      transformText: transformText
    });
  }, [Flex, TextFragment, ModalSelect, Toast, InputZone, LoadingIcon, Modal, icons, transformText]);
  return /*#__PURE__*/React.createElement(SimpleCodeUiContext.Provider, {
    value: value
  }, children);
};
var SimpleCodeUiProvider = /*#__PURE__*/React.memo(SimpleCodeUiProvider_);

var minWidth = {
  minWidth: 50
};
var Switch_ = function Switch_(_a, ref) {
  var _b = _a.colors,
    colors = _b === void 0 ? null : _b,
    _c = _a.colorsActive,
    colorsActive = _c === void 0 ? null : _c,
    _d = _a.onChange,
    onChange = _d === void 0 ? null : _d,
    _e = _a.style,
    style = _e === void 0 ? null : _e,
    _f = _a.value,
    value = _f === void 0 ? false : _f,
    _g = _a.icons,
    icons = _g === void 0 ? null : _g,
    _h = _a.shadow,
    shadow = _h === void 0 ? null : _h,
    propsButton = __rest(_a, ["colors", "colorsActive", "onChange", "style", "value", "icons", "shadow"]);
  var _j = propsButton.isDisabled,
    isDisabled = _j === void 0 ? null : _j;
  var simpleCodeIcons = React.useContext(SimpleCodeUiContext).icons;
  var handleIcon = React.useMemo(function () {
    return [simpleCodeIcons.switchHandle];
  }, [simpleCodeIcons.switchHandle]);
  var _k = useSwitch({
      onChange: onChange,
      value: value,
      isDisabled: isDisabled
    }),
    switchValue = _k.switchValue,
    toggle = _k.toggle;
  var buttonStyle = React.useMemo(function () {
    return style ? [minWidth, style] : minWidth;
  }, [style]);
  return /*#__PURE__*/React.createElement(Button, {
    colors: "none",
    justify: "flex-start",
    shadow: "none",
    onPress: toggle,
    ref: ref,
    size: "md",
    shape: "none"
  }, /*#__PURE__*/React.createElement(Button, __assign({}, propsButton, {
    icons: icons || handleIcon,
    justify: "flex-start",
    direction: switchValue ? 'row-reverse' : 'row',
    size: "xxsm",
    shadow: shadow || 'none',
    colors: colors || 'secondary',
    colorsActive: colorsActive || 'tertiary',
    flexText: 1,
    isActive: switchValue,
    style: buttonStyle
  })));
};
var Switch = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Switch_));

var convertToMainItem = function convertToMainItem(named, isScrollable) {
  return __assign(__assign({}, named), {
    name: named.name,
    label: named.label,
    padding: isScrollable ? '0 8' : null,
    shadow: 'none',
    flex: isScrollable ? -1 : null
  });
};
var convertToHiddenItem = function convertToHiddenItem(named) {
  return {
    name: named.name,
    label: named.label
  };
};
var Tabs_ = function Tabs_(_a) {
  var _b = _a.countVisible,
    countVisible = _b === void 0 ? null : _b,
    _c = _a.tabs,
    tabs = _c === void 0 ? null : _c,
    _d = _a.active,
    active = _d === void 0 ? null : _d,
    _e = _a.onChange,
    onChange = _e === void 0 ? null : _e,
    _f = _a.isDisabled,
    isDisabled = _f === void 0 ? null : _f,
    _g = _a.spacing,
    spacing = _g === void 0 ? null : _g,
    _h = _a.countInitial,
    countInitial = _h === void 0 ? null : _h,
    _j = _a.countBatch,
    countBatch = _j === void 0 ? null : _j,
    _k = _a.interval,
    interval = _k === void 0 ? null : _k,
    _l = _a.shadow,
    shadow = _l === void 0 ? null : _l,
    _m = _a.direction,
    direction = _m === void 0 ? null : _m,
    _o = _a.colors,
    colors = _o === void 0 ? null : _o,
    _p = _a.colorsActive,
    colorsActive = _p === void 0 ? null : _p,
    propsFlex = __rest(_a, ["countVisible", "tabs", "active", "onChange", "isDisabled", "spacing", "countInitial", "countBatch", "interval", "shadow", "direction", "colors", "colorsActive"]);
  var simpleCodeIcons = React.useContext(SimpleCodeUiContext).icons;
  var caretIcon = React.useMemo(function () {
    return [simpleCodeIcons.caretDown];
  }, [simpleCodeIcons.caretDown]);
  var activeValue = "".concat(active);
  var visibleTabs = React.useMemo(function () {
    var _a;
    if (countVisible) {
      return (_a = tabs === null || tabs === void 0 ? void 0 : tabs.slice(0, countVisible)) !== null && _a !== void 0 ? _a : emptyArray;
    }
    return tabs !== null && tabs !== void 0 ? tabs : emptyArray;
  }, [countVisible, tabs]);
  var hiddenTabs = React.useMemo(function () {
    var _a;
    if (countVisible) {
      return (_a = tabs === null || tabs === void 0 ? void 0 : tabs.slice(countVisible)) !== null && _a !== void 0 ? _a : emptyArray;
    }
    return emptyArray;
  }, [countVisible, tabs]);
  var visibleItems = React.useMemo(function () {
    return visibleTabs.map(function (item) {
      return item ? convertToMainItem(item, !countVisible) : null;
    });
  }, [visibleTabs, countVisible]);
  var hiddenItems = React.useMemo(function () {
    return hiddenTabs.map(function (item) {
      return item ? convertToHiddenItem(item) : null;
    });
  }, [hiddenTabs]);
  var isMainSelect = React.useMemo(function () {
    return visibleItems.some(function (item) {
      return (item === null || item === void 0 ? void 0 : item.name) === activeValue;
    });
  }, [activeValue, visibleItems]);
  var press = React.useCallback(function (_event, name) {
    if (typeof name === 'string') {
      if (name === '__more') {
        return;
      }
      if (onChange) {
        onChange(name);
      }
    }
  }, [onChange]);
  var buttons = React.useMemo(function () {
    return __spreadArray(__spreadArray([], visibleItems, true), hiddenItems.length > 0 ? [{
      name: '__more',
      shadow: 'sm',
      flex: -1,
      icons: caretIcon,
      select: {
        buttons: hiddenItems,
        active: activeValue
      }
    }] : emptyArray, true);
  }, [visibleItems, hiddenItems, caretIcon, activeValue]);
  var buttonRow = /*#__PURE__*/React.createElement(ButtonGroup, {
    flex: countVisible ? 1 : null,
    border: "md.bottom",
    colors: colors || 'primary',
    colorsActive: colorsActive || 'accentghost',
    font: "regular",
    sizeText: "sm",
    fontActive: "semi",
    onPress: press,
    active: isMainSelect === false ? '__more' : activeValue,
    buttons: buttons,
    isDisabled: isDisabled,
    spacing: spacing,
    countInitial: countInitial,
    countBatch: countBatch,
    interval: interval
  });
  return /*#__PURE__*/React.createElement(Flex, __assign({}, propsFlex, {
    shadow: shadow || 'md',
    direction: direction || 'row',
    colors: colors || 'primary'
  }), buttonRow);
};
var Tabs = /*#__PURE__*/React.memo(Tabs_);

var TestMock_ = function TestMock_(props, ref) {
  return /*#__PURE__*/React.createElement("test-mock", __assign({
    ref: ref
  }, props));
};
var TestMock = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(TestMock_));

var ThemeProvider_ = function ThemeProvider_(_a) {
  var _b = _a.children,
    children = _b === void 0 ? null : _b,
    _c = _a.theme,
    theme = _c === void 0 ? null : _c;
  var themeFinal = theme || defaultTheme;
  var value = React.useMemo(function () {
    return {
      theme: themeFinal,
      getShape: getThemeShapeGetter(themeFinal),
      getBorder: getThemeBorderGetter(themeFinal),
      getSize: getThemeSizeGetter(themeFinal),
      getFont: getThemeFontGetter(themeFinal),
      getShadow: getThemeShadowGetter(themeFinal),
      getShadowText: getThemeShadowTextGetter(themeFinal),
      getColor: getThemeColorGetter(themeFinal),
      getColorBg: getThemeColorSetGetter(themeFinal, 'bg'),
      getColorText: getThemeColorSetGetter(themeFinal, 'text'),
      getColorBorder: getThemeColorSetGetter(themeFinal, 'border')
    };
  }, [themeFinal]);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: value
  }, children);
};
var ThemeProvider = /*#__PURE__*/React.memo(ThemeProvider_);

var Toast_ = function Toast_(props, ref) {
  var Toast = React.useContext(SimpleCodeUiContext).Toast;
  return /*#__PURE__*/React.createElement(Toast, __assign({
    ref: ref
  }, props));
};
var Toast = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Toast_));

export { Abs, Button, ButtonCheck, ButtonGroup, ButtonGroupRadio, ButtonRadio, Checkbox, Divider, Flex, Icon, IconEmpty, Input, InputZone, KeyboardContext, List, ListItem, ListProgressive, Loading, LoadingIcon, LoadingView, Mention, MentionContext, MentionProvider, Modal, ModalContext, ModalSelect, Section, Select, SimpleCodeUiContext, SimpleCodeUiProvider, Switch, Tabs, TestMock, TextFragment, ThemeContext, ThemeProvider, Toast, Txt, createFlatColorset, createGhostColorset, createStateColorsetTriplet, createTextColorset, createTypedObjectify, defaultSimpleCodeUiContext, defaultTheme, emptyArray, emptyFunction, emptyObject, emptyString, fullStyle, getAnchors, getConditionalItems, getCssArgs, getCssSides, getElevationShadow, getErrorMessage, getLogger, getMargins, getMentions, getPaddings, getPluralForm, getRandomColor, getThemeBorderGetter, getThemeColorGetter, getThemeColorSetGetter, getThemeFontGetter, getThemeShadowGetter, getThemeShadowTextGetter, getThemeShapeGetter, getThemeSizeGetter, hashIntoColor, hiddenStyle, mapBorders, mapShadows, mapShadowsText, mapShapes, objectify, removeItem, replaceItem, setLogger, setShowToast, showToast, showToastError, showToastSuccess, takeSpecColor, toError, updateItem, useCallbackRef, useFlag, useInput, useMention, useMounted, usePressButtons, useProgressiveArray, useStringOption, useSwitch, validateEmail, withAsync, withBoundary };
//# sourceMappingURL=index.esm.js.map
