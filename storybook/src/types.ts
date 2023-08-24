import {
    TButtonEmbed, TButtonEmbedNamed, TButtonGroupEmbed,
    TColorsProp, TListEmbed, TListItemEmbed, TOnPress, TPartial,
    TPresetColorsName, TPropsButton, TPropsCheckbox, TPropsModal,
    TPropsDivider, TPropsFlex, TPropsIcon, TPropsInput, TPropsLoadingView,
    TPropsSelect, TPropsSwitch, TPropsTabs, TPropsTxt, TSpecSize, TTextEmbed,
} from '../../src';


type TMutable<T> = { -readonly [P in keyof T ]: T[P] };

type TArgType = null | string | number | { [key: string]: TArgType } | ReadonlyArray<TArgType>;

type TArgTypes<T> = { -readonly [P in keyof T ]: TArgType };

export type TStoryComponent<T> = React.FunctionComponent<T> & {
    args: TMutable<T>;
    argTypes: TArgTypes<T>;
};

export type TStoryAux = Readonly<{
    ['[theme]']?: string | null;
    ['[background]']?: TColorsProp | null;
}>;

export type TPropsMobile = TPartial<{
    children: React.ReactNode;
    theme: string;
    colors: TColorsProp;
}>;

export type TPropsThemed = Readonly<{
    children?: React.ReactNode;
    theme?: string | null;
}>;

export type TPropsStoryButton = TPropsFlex & TPropsButton & TStoryAux;


export type TPropsStoryCheckbox = TPropsCheckbox & TStoryAux;

export type TPropsStoryDivider = TPropsDivider & TStoryAux;

export type TPropsStoryFlex = TPropsFlex & TStoryAux;

export type TPropsStoryIcon = (
    Omit<TPropsFlex, 'Component'> &
    Omit<TPropsIcon, 'Component'> &
    TStoryAux &
    Readonly<{
        Component: string;
    }>
);

export type TPropsStoryInput = TPropsInput & TStoryAux & Readonly<{
    ['[buttons]']?: TColorsProp | null;
}>;

export type TPropsStoryListItem = TListItemEmbed & TStoryAux & Readonly<{
    children?: React.ReactNode;
    onPress?: TOnPress | null;
    ['[count]']?: number | null;
    ['[buttons]']?: TColorsProp | null;
}>;

export type TPropsStoryLoading = TPropsButton & TStoryAux & Readonly<{
    children?: React.ReactNode;
    onPress?: TOnPress | null;
}>;

export type TPropsStorySelect = TPropsSelect & TStoryAux;

export type TPropsStorySwitch = TPropsSwitch & TStoryAux & Readonly<{
    children?: React.ReactNode;
    onPress?: TOnPress | null;
    ['[count]']?: number | null;
    ['[buttons]']?: TColorsProp | null;
}>;

export type TPropsStoryTxt = TPropsTxt & TStoryAux;

export type TPropsStoryButtonGroup = TButtonGroupEmbed & TStoryAux & Readonly<{
    children?: React.ReactNode;
    onPress?: TOnPress | null;
}>;

export type TPropsStoryList = TListEmbed & Readonly<{
    children?: React.ReactNode;
    onPress?: TOnPress | null;
    ['[background]']?: TColorsProp | null;
    ['[buttons]']?: TColorsProp | null;
}>;

export type TPropsStoryLoadingView = TPropsLoadingView & TStoryAux;

export type TPropsStoryModal = TPropsModal & TStoryAux;

export type TPropsStoryTabs = TPropsTabs & TStoryAux;

export type TPropsRowTitle = Readonly<{
    text: string;
}>;

export type TPropsPage = Readonly<{
    theme?: string | null;
    title: string;
    children?: React.ReactNode;
}>;

export type TPropsVariantButton = Readonly<{
    button: TButtonEmbedNamed;
    sizeName: TSpecSize | null;
    colorSetName: TPresetColorsName;
}>;

export type TPropsVariantCheckbox = Readonly<{
    button: TButtonEmbed;
    colorSetName: TPresetColorsName;
}>;

export type TPropsVariantTxt = Readonly<{
    txt: TTextEmbed;
    fontName: string | null;
}>;

export type TPropsColor = Readonly<{
    value: string;
    name: string;
    label: string;
}>;
