import { getTranslations } from 'next-intl/server';
import PrivateSaleClient from './PrivateSaleClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.privateSale' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default function PrivateSalePage() {
    return <PrivateSaleClient />;
}
