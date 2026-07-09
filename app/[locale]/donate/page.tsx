import { getTranslations } from 'next-intl/server';
import DonateClient from './DonateClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.donate' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default function DonatePage() {
    return <DonateClient />;
}
