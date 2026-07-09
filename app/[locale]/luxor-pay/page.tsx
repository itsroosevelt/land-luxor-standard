import { getTranslations } from 'next-intl/server';
import LuxorPayClient from './LuxorPayClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.luxorPay' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default function LuxorPayPage() {
    return <LuxorPayClient />;
}
