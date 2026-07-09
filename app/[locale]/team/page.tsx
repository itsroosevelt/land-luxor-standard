import { getTranslations } from 'next-intl/server';
import TeamClient from './TeamClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.team' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default function TeamPage() {
    return <TeamClient />;
}
