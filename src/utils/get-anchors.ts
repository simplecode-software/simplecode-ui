import createCachedSelector from 're-reselect';

import { TAnchorDesc, TAnchorDescList, TTransformText } from '../types';
import { getLogger } from './log-interface';
import { emptyArray } from '../constants/empty';


type TParseHrefCachedOpts = Readonly<{
    anchor: string,
    i: number,
    transformText: TTransformText,
}>;

const parseHrefCached = createCachedSelector<
    TParseHrefCachedOpts,
    string,
    number,
    TTransformText,
    TAnchorDesc
>(
    ({ anchor }) => anchor,
    ({ i }) => i,
    ({ transformText }) => transformText,
    (anchor, i, transformText) => {
        const text = transformText(anchor);
        const matched = anchor.match(/href="(.*?)"/i);
        const href = matched?.[1] || null;
        const key = `${i}-href`;
        return { text, href, key };
    },
)((input, i) => `getAnchors/parseHrefCached-${i}-${input}`);


const getAnchorLinksCached = createCachedSelector<
    string,
    TTransformText,
    string,
    TTransformText,
    TAnchorDescList | null
>(
    (input) => input,
    (_input, transformText) => transformText,
    (input, transformText) => {
        try {
            // If no '<a 's around, return immediately
            let at: number = input.indexOf('<a ');
            if (at < 0) {
                return null;
            }
            // If no real match, return immediately
            at = input.search(/(?:\s|\n|^)<a\s.*?<\/a>/i);
            if (at < 0) {
                return null;
            }
            
            let result: TAnchorDescList = emptyArray;
            
            let rest = input;
            let i = 0;
            
            // Traverse the string in steps
            do {
                if (rest[at] !== '<') {
                    at += 1; // skip 1 whitespace
                }
                result = [
                    ...result,
                    { text: transformText(rest.slice(0, at)), href: null, key: `${i}-text` },
                ];
                rest = rest.slice(at);
                const matched = rest.match(/^<a\s.*?<\/a>/i);
                const anchor = matched ? (matched[0] || '') : '';
                result = [...result, parseHrefCached({ anchor, i, transformText })];
                i++;
                rest = rest.slice(anchor.length);
                at = rest.search(/(?:\s|\n|^)<a\s.*?<\/a>/i);
                if (at < 0 && rest.length) {
                    result = [...result, { text: transformText(rest), href: null, key: `${i}-last-text` }];
                }
            } while (at > -1);
            
            return result;
        } catch (error: unknown) {
            getLogger().error('getAnchors.getAnchorLinksCached', error);
            return null;
        }
    },
)((input) => `getAnchors/getAnchorLinksCached-${input.length}-${input.slice(0, 5)}-${input.slice(-5)}`);


const getPlainLinksCached = createCachedSelector<
    string,
    string,
    TAnchorDescList | null
>(
    (input) => input,
    (input) => {
        try {
            // If no real match, return immediately
            let at = input.search(/(?:\s|\n|^)https?:\/\/\w+/i);
            if (at < 0) {
                return null;
            }
            
            let result: TAnchorDescList = emptyArray;
            
            let rest = input;
            let i = 0;
            
            // Traverse the string in steps
            do {
                if (rest[at] !== 'h') {
                    at += 1; // skip 1 whitespace
                }
                result = [...result, { text: rest.slice(0, at), href: null, key: `${i}-text` }];
                rest = rest.slice(at);
                const matched = rest.match(/^https?:\/\/\w+[^\s]*/i);
                const href = (matched ? (matched[0] || '') : '').replace(/[,.;!:]$/, '');
                result = [...result, { text: href, href, key: `${i}-href` }];
                i++;
                rest = rest.slice(href.length);
                at = rest.search(/(?:\s|\n)https?:\/\/\w+/i);
                if (at < 0 && rest.length) {
                    result = [...result, { text: rest, href: null, key: `${i}-last-text` }];
                }
            } while (at > -1);
            
            return result;
        } catch (error: unknown) {
            getLogger().error('getAnchors.getPlainLinksCached', error);
            return null;
        }
    },
)((input) => `getAnchors/getPlainLinksCached-${input.length}-${input.slice(0, 5)}-${input.slice(-5)}`);


const mapHrefs = createCachedSelector<
    TAnchorDescList,
    TAnchorDescList,
    TAnchorDescList
>(
    (hrefs) => hrefs,
    (hrefs) => {
        let result: TAnchorDescList = emptyArray;
        
        hrefs.forEach((item, i) => {
            if (item.href) {
                result = [...result, { ...item, key: `${i}-${item.key}` }];
                return;
            }
            
            const links = getPlainLinksCached(item.text);
            if (!links) {
                result = [...result, { ...item, key: `${i}-${item.key}` }];
                return;
            }
            
            result = [...result, ...links.map((link) => ({
                ...link,
                key: `${i}-${item.key}-${link.key}`,
            }))];
        });
        
        return result;
    },
)((hrefs) => `mapHrefs-${hrefs.map((href) => href.key).join(',')}`);


export const getAnchors = createCachedSelector<
    string,
    TTransformText,
    string,
    TTransformText,
    TAnchorDescList | null,
    TAnchorDescList | null
>(
    (input) => input,
    (_input, transformText) => transformText,
    getAnchorLinksCached,
    (input, transformText, hrefs) => {
        if (!hrefs) {
            return getPlainLinksCached(transformText(input));
        }
        return mapHrefs(hrefs);
    },
)((input) => `getAnchors-${input.length}-${input.slice(0, 5)}-${input.slice(-5)}`);
