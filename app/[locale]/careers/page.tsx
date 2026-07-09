import { getTranslations } from 'next-intl/server';
import CareersClient from './CareersClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.careers' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default function CareersPage() {
    return <CareersClient />;
}
