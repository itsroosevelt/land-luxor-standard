import { getTranslations } from 'next-intl/server';
import CommunityClient from './CommunityClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.community' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default function CommunityPage() {
    return <CommunityClient />;
}
