import createCachedSelector from 're-reselect';
import { emptyArray } from '../constants/empty';

import { TMentionDesc, TMentionDescList } from '../types';
import { getLogger } from './log-interface';


// @{{123|abc def ghi}} @{{|abc def ghi}} @{{abc def ghi}}
// (?: - means "do not treat as a group". Implying no sub-splits when using String.split
// /@\{\{.*?\}\}/
const getSyntaxMentionsCached = createCachedSelector<
    string,
    string,
    TMentionDescList | null
>(
    (input) => input,
    (input) => {
        try {
            // If no '@'s around, return immediately
            let at: number = input.indexOf('@');
            if (at < 0) {
                return null;
            }
            // If no real match, return immediately
            at = input.search(/(?:\s|\n|^)@\{\{.*?\}\}/);
            if (at < 0) {
                return null;
            }
            
            const result: TMentionDesc[] = [];
            
            let rest = input;
            let i = 0;
            
            // Traverse the string in steps
            do {
                if (rest[at] !== '@') {
                    at += 1; // skip 1 whitespace
                }
                result.push({ isMention: false, key: `${i}-text`, text: rest.slice(0, at) });
                rest = rest.slice(at);
                const matched = rest.match(/^@\{\{.*?\}\}/);
                const mention = matched ? (matched[0] || '') : '';
                const dividerIdx = mention.indexOf('||');
                result.push({
                    isMention: true,
                    key: `${i}-mention`,
                    text: `@${mention.slice(dividerIdx < 0 ? 3 : (dividerIdx + 2), -2)}`,
                    id: dividerIdx < 0 ? '' : mention.slice(3, dividerIdx),
                });
                
                i++;
                rest = rest.slice(mention.length);
                at = rest.search(/(?:\s|\n)@\{\{.*?\}\}/);
                if (at < 0 && rest.length) {
                    result.push({ isMention: false, key: 'last-text', text: rest });
                }
            } while (at > -1);
            
            return result;
        } catch (error: unknown) {
            getLogger().error('getSyntaxMentionsCached', error);
            return null;
        }
    },
)((input) => `getPlainMentionsCached-${input.length}-${input.slice(0, 5)}-${input.slice(-5)}`);


// @Abc, @Abc Def, @A, @A B, @A1 B2
// not: @, @a, @1
// (?: - means "do not treat as a group". Implying no sub-splits when using String.split
// /@[A-Z]\w*(?: [A-Z]\w*)?/
const getPlainMentionsCached = createCachedSelector<
    string,
    string,
    TMentionDescList | null
>(
    (input) => input,
    (input) => {
        try {
            // If no '@'s around, return immediately
            let at: number = input.indexOf('@');
            if (at < 0) {
                return null;
            }
            // If no real match, return immediately
            at = input.search(/(?:\s|\n|^)@[A-Z]\w*(?: [A-Z]\w*)?/);
            if (at < 0) {
                return null;
            }
            
            const result: TMentionDesc[] = [];
            
            let rest = input;
            let i = 0;
            
            // Traverse the string in steps
            do {
                if (rest[at] !== '@') {
                    at += 1; // skip 1 whitespace
                }
                result.push({ isMention: false, key: `${i}-text`, text: rest.slice(0, at) });
                rest = rest.slice(at);
                const matched = rest.match(/^@[A-Z]\w*(?: [A-Z]\w*)?/);
                const mention = matched ? (matched[0] || '') : '';
                result.push({ isMention: true, key: `${i}-mention`, text: mention });
                i++;
                rest = rest.slice(mention.length);
                at = rest.search(/(?:\s|\n)@[A-Z]\w*(?: [A-Z]\w*)?/);
                if (at < 0 && rest.length) {
                    result.push({ isMention: false, key: 'last-text', text: rest });
                }
            } while (at > -1);
            
            return result;
        } catch (error: unknown) {
            getLogger().error('getPlainMentionsCached', error);
            return null;
        }
    },
)((input) => `getPlainMentionsCached-${input.length}-${input.slice(0, 5)}-${input.slice(-5)}`);


const mapMentions = createCachedSelector<
    TMentionDescList,
    TMentionDescList,
    TMentionDescList
>(
    (parts) => parts,
    (parts) => {
        let result: TMentionDescList = emptyArray;
        
        parts.forEach((item, i) => {
            if (item.isMention) {
                result = [...result, { ...item, key: `${i}-${item.key}` }];
                return;
            }
            
            const mentions = getPlainMentionsCached(item.text);
            if (!mentions) {
                result = [...result, { ...item, key: `${i}-${item.key}` }];
                return;
            }
            
            result = [...result, ...mentions.map((mention) => ({
                ...mention,
                key: `${i}-${item.key}-${mention.key}`,
            }))];
        });
        
        return result;
    },
)((parts) => `mapMentions-${parts.map((href) => href.key).join(',')}`);


export const getMentions = createCachedSelector<
    string,
    string,
    TMentionDescList | null,
    TMentionDescList | null
>(
    (input) => input,
    (input) => getSyntaxMentionsCached(input),
    (input, parts) => {
        if (!parts) {
            return getPlainMentionsCached(input);
        }
        return mapMentions(parts);
    },
)((input) => `getMentions-${input.length}-${input.slice(0, 5)}-${input.slice(-5)}`);
