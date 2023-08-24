import { TPropsListProgressive } from '../ListProgressive';
import { TButtonGroupOnPress, TListEmbed, TListItemEmbed, TPartial } from '../types';
export type TPropsList = TPropsListProgressive<TListItemEmbed> & TListEmbed & TPartial<{
    onPress: TButtonGroupOnPress;
    onPressButton: TButtonGroupOnPress;
}>;
