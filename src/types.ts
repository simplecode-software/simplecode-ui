import React from 'react';


export type TCb<T> = (value: T) => void;

export type TCbVoid = () => void;

export type TCbString = TCb<string>;

export type TCbNumber = TCb<number>;

export type TCbBool = TCb<boolean>;

export declare type TValueOf<T> = T[keyof T];

export type TEmptyObject = Readonly<Record<never, never>>;

export type TSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type TWriteable<T> = { -readonly [P in keyof T]: T[P] };

export type TUnknownObject = Readonly<{ [key: string]: unknown }>;

export type TDict<T = unknown> = Readonly<Record<string, T>>;

export type TStringList = ReadonlyArray<string>;
export type TNumberList = ReadonlyArray<number>;

export type TPartial<T extends TUnknownObject> = Readonly<PartialNullable<T>>;

export type RecursivePartial<T> = {
    [P in keyof T]?:
      T[P] extends (infer U)[] ? RecursivePartial<U>[] :
      // eslint-disable-next-line @typescript-eslint/ban-types
      T[P] extends object ? RecursivePartial<T[P]> :
      T[P];
};

export type PartialNullable<T> = {
    [P in keyof T]?: T[P] | null;
};

export type TAction<TPayload extends TUnknownObject = TUnknownObject> = Readonly<{
    payload: TPayload;
    type: string;
}>;

export type TActionCreator<T extends TEmptyObject> = (payload: T) => TAction<T>;

export type TActionCreatorOptional<T extends TEmptyObject> = (payload?: Partial<T>) => TAction<Partial<T>>;

export type TActionCreatorEmpty = () => TAction<TEmptyObject>;

export type TDispatch = (action: TAction) => TAction;

export type TColorSetMain =
    | 'primary' | 'secondary' | 'tertiary' | 'accent'
    | 'success' | 'warning' | 'error' | 'light' | 'grey' | 'dark';
    
export type TColorSetVariant = 'ghost' | 'text';

export type TPresetColorsName = 'none' | TColorSetMain | `${TColorSetMain}${TColorSetVariant}`;

export type TShadowName = 'none' | 'sm' | 'md' | 'lg';

export type TShadowTextName = 'none' | 'sm' | 'md';

export type TThemeField =
    | 'shapes' | 'borders' | 'fonts' | 'shadows' | 'shadowsText' | 'colors' | 'sizes';

export type TColorSlotMain =
    | 'primary' | 'primaryalt' | 'secondary' | 'tertiary' | 'accent'
    | 'success' |'warning' | 'error';

export type TColorSlotVariant = 'plus' | 'minus';

export type TThemeColorSlot = 'contrast' | TColorSlotMain | `${TColorSlotMain}${TColorSlotVariant}`;

export type TColorSlots = Readonly<Record<TThemeColorSlot, string>>;

export type TThemeColors = Readonly<{
    spec: Readonly<Record<string, string>>;
    text: TColorSlots;
    bg: TColorSlots;
}>;

export type TBorderMain = 'sm' | 'md' | 'lg' | 'xlg';

export type TSideVariant = 'all' | 'top' | 'bottom' | 'left' | 'right';

export type TBorderName = 'none' | TBorderMain | `${TBorderMain}.${TSideVariant}`;

export type TShapeMain = 'sm' | 'md' | 'lg' | 'xlg' | 'rounded';

export type TShapeName = 'none' | TShapeMain | `${TShapeMain}.${TSideVariant}`;

export type TDirectionalStyle = Readonly<{
    all: TStyle;
    top: TStyle;
    bottom: TStyle;
    left: TStyle;
    right: TStyle;
}>;

export type TThemeShapes = Readonly<Record<TShapeMain, TDirectionalStyle>>;

export type TThemeBorders = Readonly<Record<TBorderMain, TDirectionalStyle>>;

export type TThemeFonts = Readonly<Record<string, React.CSSProperties | null>>;

export type TThemeShadows = Readonly<Record<TShadowName, React.CSSProperties | null>>;

export type TThemeShadowsText = Readonly<Record<TShadowTextName, React.CSSProperties | null>>;

export type TSpecSize = 'xxsm' | 'xsm' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg' | 'auto';

export type TSpecSizes = Readonly<Record<TSpecSize, number | null>>;

export type TThemeSizeName = 'font' | 'line' | 'button' | 'item' | 'icon' | 'divider';

export type TThemeSizes = Readonly<Record<TThemeSizeName, TSpecSizes>>;

export type TColorGroupMain = 'text' | 'border' | 'bg';

export type TColorGroupVariant = 'Hover' | 'Active';

export type TColorSetKey = TColorGroupMain | `${TColorGroupMain}${TColorGroupVariant}`;

export type TColorSet = Readonly<Record<TColorSetKey, string>>;

export type TPresetColors = Readonly<Record<TPresetColorsName, TColorSet>>;

export type TTheme = Readonly<{
    colors: TThemeColors;
    shapes: TThemeShapes;
    fonts: TThemeFonts;
    borders: TThemeBorders;
    sizes: TThemeSizes;
    shadows: TThemeShadows;
    shadowsText: TThemeShadowsText;
    colorSets: TPresetColors;
}>;

export type TColorsProp = TPresetColorsName | TColorSet;


export type TFalsy = undefined | null | false;

export type TRecursiveArray<T> = ReadonlyArray<T | ReadonlyArray<T> | TRecursiveArray<T>>;

export type TStyleProp<T> = T | TRecursiveArray<T | TFalsy> | TFalsy;

export type TStyle = TStyleProp<React.CSSProperties>;

export type TActivityState = 'hover' | 'active' | null;

export type TActiveButtons = string | ReadonlyArray<string | null>;

export type TButtonGroupBehavior = 'radio' | 'button' | 'checkbox';

export type TOnPress = TCb<React.BaseSyntheticEvent>;
export type TOnSubmit = TOnPress;

export type TButtonOnPress = (event: React.BaseSyntheticEvent, name?: string | null) => void;

export type TInputOnChange = TCbString;

export type TSelectOnChange = TCb<string | null>;

export type TButtonGroupOnPress = (
    event: React.BaseSyntheticEvent,
    buttons?: TActiveButtons | null,
    name?: string | null,
) => (void | false);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TAnyComponent = React.ComponentType<any>;

export type TCustomProps = TUnknownObject;

export type TRenderItemFn<T> = (item: T, index: number) => (React.ReactElement | null);

export type TBaseEmbed = TPartial<{
    Component: TAnyComponent;
    flex: number;
    padding: string | number;
    margin: string | number;
    shape: TShapeName;
    border: TBorderName;
    href: string;
    colors: TColorsProp;
    testId: string;
    isDisabled: boolean;
    opacityDisabled: number;
    isHidden: boolean;
    state: TActivityState;
    custom: TCustomProps;
    style: TStyle;
}>;

export type TFlexEmbed = TBaseEmbed & TPartial<{
    direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justify: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    shadow: TShadowName;
    events: 'box-none' | 'none' | 'box-only' | 'auto';
}>;

export type TTextEmbed = TBaseEmbed & TPartial<{
    lines: number;
    size: TSpecSize;
    font: string;
    align: 'auto' | 'left' | 'right' | 'center' | 'justify';
    shadow: TShadowTextName;
    shadowBox: TShadowName;
    isOpaque: boolean;
}>;

export type TPropsIconComponent = TPartial<{
    name: string;
    size: number;
    color: string;
    style: TStyle;
}>;


export type TIconEmbed = TFlexEmbed & TPartial<{
    size: TSpecSize;
    sizeIcon: number;
    rotation: number;
    name: string;
    shadowIcon: TShadowTextName;
}>;


export type TIconEmbedList = ReadonlyArray<TIconEmbed | null>;

export type TDividerEmbed = TFlexEmbed & TPartial<{
    size: TSpecSize;
}>;

type TGenButtonEmbedNamed<TGButtonEmbed> = TGButtonEmbed & Readonly<{
    name: string;
}>;

type TGenButtonEmbedNamedList<TGButtonEmbed> = ReadonlyArray<
    TGenButtonEmbedNamed<TGButtonEmbed> | null
>;

type TGenPropsButton<TButtonEmbed> = TButtonEmbed & TPartial<{
    children: React.ReactNode;
    onPress: TButtonOnPress;
}>;

export type TGenButtonGroupEmbed<TGButtonEmbed> = TGButtonEmbed & TPartial<{
    active: TActiveButtons;
    behavior: TButtonGroupBehavior;
    buttons: TGenButtonEmbedNamedList<TGButtonEmbed>;
    spacing: number;
    countInitial: number;
    countBatch: number;
    interval: number;
}>;

export type TButtonEmbed = TFlexEmbed & TPartial<{
    name: string;
    size: TSpecSize;
    sizeText: TSpecSize;
    sizeIcons: TSpecSize;
    alignText: 'auto' | 'left' | 'right' | 'center' | 'justify';
    hasMentions: boolean;
    isDecorated: boolean;
    label: string;
    labelActive: string;
    icons: TIconEmbedList;
    iconsActive: TIconEmbedList;
    shadowText: TShadowTextName;
    flexText: number;
    lines: number;
    font: string;
    fontActive: string;
    isActive: boolean;
    colorsActive: TColorsProp;
    select: TGenButtonGroupEmbed<TButtonEmbed>;
}>;

export type TButtonEmbedNamed = TGenButtonEmbedNamed<TButtonEmbed>;

export type TPropsButton = TGenPropsButton<TButtonEmbed>;

export type TButtonEmbedNamedList = ReadonlyArray<TButtonEmbedNamed | null>;

export type TButtonGroupEmbed = TGenButtonGroupEmbed<TButtonEmbed>;

export type TModalSelectEmbed = TButtonGroupEmbed & TPartial<{
    overlayStyle: TStyle;
    backgroundStyle: TStyle;
    isNonBlocking: boolean;
}>;

export type TSwitchEmbed = TButtonEmbed & TPartial<{
    colorsIcon: TColorsProp;
    value: boolean;
}>;

export type TListItemEmbed = TButtonEmbed & TPartial<{
    buttonGroup: TButtonGroupEmbed;
}>;

export type TPropsListItem = TListItemEmbed & TPartial<{
    children: React.ReactNode;
    onPress: TButtonOnPress;
    onPressButton: TButtonGroupOnPress;
}>;

export type TInputEmbed = TListItemEmbed & TPartial<{
    isBlurOnSubmit: boolean;
    isMulti: boolean;
    isAuto: boolean;
    placeholder: string;
    max: number;
    value: string;
    colorsPlaceholder: TColorsProp;
    keyboardType: string;
    secureTextEntry: boolean;
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';
    autoCorrect: boolean;
    initialLines: number;
    isReadonly: boolean;
    returnKeyType: string;
}>;

export type TListItemEmbedList = ReadonlyArray<TListItemEmbed>;

export type TListEmbed = TListItemEmbed & TPartial<{
    active: TActiveButtons;
    behavior: TButtonGroupBehavior;
    items: TListItemEmbedList;
    divider: TDividerEmbed;
}>;

export type TSectionEmbed = TListItemEmbed & TPartial<{
    divider: TDividerEmbed;
}>;

export type TPropsSection = TSectionEmbed & TPartial<{
    children: React.ReactNode;
    header: React.ReactNode;
    onPress: TButtonGroupOnPress;
}>;

export type TThemeVariantGetter = (name: string | null) => unknown;

export type TSizeGetter = (
    name: TSpecSize | null,
    prefix: TThemeSizeName,
) => (number | null);

export type TShapeGetter = (name: TShapeName | null) => (React.CSSProperties | null);

export type TBorderGetter = (name: TBorderName | null) => (React.CSSProperties | null);

export type TFontGetter = (name: string | null) => (React.CSSProperties | null);

export type TShadowGetter = (name: TShadowName | null) => (React.CSSProperties | null);

export type TShadowTextGetter = (name: TShadowTextName | null) => (React.CSSProperties | null);

export type TColorGetter = (name: string | null) => (string | null);

export type TColorSetGetter = (
    state: 'active' | 'hover' | null,
    colors: TColorsProp | null,
) => (string | null);

export type TThemeContext = {
    theme: TTheme;
    getBorder: TBorderGetter;
    getSize: TSizeGetter;
    getShape: TShapeGetter;
    getFont: TFontGetter;
    getShadow: TShadowGetter;
    getShadowText: TShadowTextGetter;
    getColor: TColorGetter;
    getColorBg: TColorSetGetter;
    getColorText: TColorSetGetter;
    getColorBorder: TColorSetGetter;
};

export type TToastProps = TPartial<{
    text: string;
    label: string;
    lineColors: TColorsProp;
    duration: number;
    onAction: TCbVoid;
}>;

export type TModalContext = Readonly<{
    showModal: (name: string, node: React.ReactNode) => void;
    hideModal: TCbString;
    showToast: TCb<TToastProps>;
}>;

export type TMentionContext = Readonly<{
    name: string | null;
    colors: TColorSet | null;
    colorsSelf: TColorSet | null;
}>;

export type TKeyboardContext = Readonly<{
    height: number;
}>;

export type TPropsTextFragment = TTextEmbed & Readonly<{
    children?: React.ReactNode | null;
    onPress?: TOnPress | null;
}>;

export type TPropsTxt = TPropsTextFragment & TPartial<{
    hasMentions: boolean;
    isDecorated: boolean;
}>;

export type TPropsMentions = Readonly<{
    text: string;
    hasMentions?: boolean | null;
    isDecorated?: boolean | null;
}>;

export type TPropsFlex = TFlexEmbed & TPartial<{
    children: React.ReactNode;
    onPress: TOnPress;
    onPressIn: TOnPress;
    onPressOut: TOnPress;
    onLayout: TCb<React.BaseSyntheticEvent>;
    onState: TCb<TActivityState>;
}>;

export type TPropsAbs = TPropsFlex & TPartial<{
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: string | number;
    height: string | number;
}>;

export type TPropsModal = TPartial<{
    children: React.ReactNode;
    overlay: React.ReactNode;
    isHidden: boolean;
    isFloating: boolean;
    isTransparent: boolean;
    overlayStyle: TStyle;
    backgroundStyle: TStyle;
    onDismiss: TCbVoid;
    testId: string;
    isNonBlocking: boolean;
}>;

export type TPropsIcon = TIconEmbed & TPartial<{
    onPress: TButtonOnPress;
}>;

export type TPropsToast = TPartial<{
    name: string;
    text: string;
    label: string;
    lineColors: TColorsProp;
    duration: number;
    onAction: TCbVoid;
    onClose: TCbString;
}>;

export type TPropsInput = TInputEmbed & TPartial<{
    children: React.ReactNode;
    onChange: TInputOnChange;
    onMention: TInputOnChange;
    onPress: TButtonOnPress;
    onPressButton: TButtonGroupOnPress;
    onBlur: TCbVoid;
    onFocus: TCbVoid;
    onSubmit: TOnSubmit;
}>;

export type TFocusControl = Readonly<{ focus: TCbVoid }>;

export type TPropsInputZone = TPropsInput & TPartial<{
    placeholderTextColor: string;
    onFocuser: TCb<TFocusControl | null>;
}>;

export type TPropsDivider = TDividerEmbed;

export type TPropsSwitch = TSwitchEmbed & TPartial<{
    onChange: TCbBool;
    onPress: TButtonOnPress;
}>;
export type TPropsCheckbox = TPropsSwitch;

export type TSelectVariant = 'ghost' | 'text';

export type TPropsSelect = TPropsButton & TPartial<{
    placeholder: string;
    active: number | string;
    options: TButtonEmbedNamedList;
    onChange: TSelectOnChange;
    variant: TSelectVariant;
    overlayStyle: TStyle;
    backgroundStyle: TStyle;
    isNonBlocking: boolean;
}>;


export type TPropsTabs = TPropsFlex & TPartial<{
    countVisible: number;
    tabs: TButtonEmbedNamedList;
    active: number | string;
    spacing: number;
    countInitial: number;
    countBatch: number;
    interval: number;
    colorsActive: TColorsProp;
    onChange: TSelectOnChange;
}>;

export type TPropsLoadingView = TPropsButton & TPartial<{
    isLoading: boolean;
    colorsContainer: TColorsProp;
}>;

export type TPropsModalSelect = TModalSelectEmbed & Readonly<{
    onClose: TCbVoid;
    onPress: TButtonGroupOnPress;
    targetRef?: React.RefObject<unknown> | null;
}>;

export type TPropsButtonGroup = TButtonGroupEmbed & TPartial<{
    onPress: TButtonGroupOnPress;
    onRenderItem: TRenderItemFn<TPropsButton>;
}>;

export type TAnchorDesc = Readonly<{
    href: string | null;
    text: string;
    key: string;
}>;

export type TAnchorDescList = ReadonlyArray<TAnchorDesc>;

export type TTransformText = (text: string) => string;

export type TMentionDesc = Readonly<{
    isMention: boolean;
    text: string;
    key: string;
    id?: string;
}>;

export type TMentionDescList = ReadonlyArray<TMentionDesc>;

export type TButtonPropsList = ReadonlyArray<TPropsButton | null>;

export type TPropVariants<T> = {
    [P in keyof T]?: ReadonlyArray<T[P]>;
};

export type TSimpleCodeUiIcons = Readonly<{
    caretDown: TIconEmbed;
    radioOn: TIconEmbed;
    radioOff: TIconEmbed;
    checkboxOn: TIconEmbed;
    checkboxOff: TIconEmbed;
    switchHandle: TIconEmbed;
}>;

export type TSimpleCodeUiContext = Readonly<{
    Flex: React.ForwardRefExoticComponent<TPropsFlex & React.RefAttributes<unknown>>;
    TextFragment: React.ForwardRefExoticComponent<TPropsTextFragment & React.RefAttributes<unknown>>;
    ModalSelect: React.ForwardRefExoticComponent<TPropsModalSelect & React.RefAttributes<unknown>>;
    Toast: React.ForwardRefExoticComponent<TPropsToast & React.RefAttributes<unknown>>;
    InputZone: React.ForwardRefExoticComponent<TPropsInputZone & React.RefAttributes<unknown>>;
    LoadingIcon: React.ForwardRefExoticComponent<TPropsIconComponent & React.RefAttributes<unknown>>;
    Modal: React.ForwardRefExoticComponent<TPropsModal & React.RefAttributes<unknown>>;
    transformText: TTransformText;
    icons: TSimpleCodeUiIcons;
}>;
