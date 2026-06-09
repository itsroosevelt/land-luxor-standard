import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type JsonObject = Record<string, unknown>;

function deepMerge(base: JsonObject, override: JsonObject): JsonObject {
    const result: JsonObject = { ...base };
    for (const key of Object.keys(override)) {
        const baseVal = base[key];
        const overrideVal = override[key];
        if (
            overrideVal !== null &&
            typeof overrideVal === 'object' &&
            !Array.isArray(overrideVal) &&
            baseVal !== null &&
            typeof baseVal === 'object' &&
            !Array.isArray(baseVal)
        ) {
            result[key] = deepMerge(baseVal as JsonObject, overrideVal as JsonObject);
        } else {
            result[key] = overrideVal;
        }
    }
    return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
        locale = routing.defaultLocale;
    }

    const allMessages = {
        en: (await import('../messages/en.json')).default,
        es: (await import('../messages/es.json')).default,
        fr: (await import('../messages/fr.json')).default,
        pt: (await import('../messages/pt.json')).default,
        de: (await import('../messages/de.json')).default,
        zh: (await import('../messages/zh.json')).default,
        ja: (await import('../messages/ja.json')).default,
        ru: (await import('../messages/ru.json')).default,
    };

    const fallback = allMessages.en as JsonObject;
    const localeMessages = (allMessages[locale as keyof typeof allMessages] ?? fallback) as JsonObject;
    const messages = locale === 'en' ? fallback : deepMerge(fallback, localeMessages);

    return {
        locale,
        messages,
    };
});
