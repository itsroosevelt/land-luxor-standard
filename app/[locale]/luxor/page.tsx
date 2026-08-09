import { getTranslations } from 'next-intl/server';
import LuxorClient from './LuxorClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default function LuxorPage() {
    return <LuxorClient />;
}
