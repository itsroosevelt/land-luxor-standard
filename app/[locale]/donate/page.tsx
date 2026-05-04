import { getTranslations } from 'next-intl/server';
import { BlinkComponent } from '@/components/home/BlinkComponent';

export default async function DonatePage() {
  const t = await getTranslations('Donate');

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title', 'Support Luxor')}
          </h1>
          <p className="text-white/60 text-lg">
            {t('description', 'Contribute SOL to the Luxor Treasury and help us build the future of the Solana ecosystem.')}
          </p>
        </div>

        {/* Blink Component */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
          <BlinkComponent />
        </div>

        {/* Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-bold mb-2">Transparent</h3>
            <p className="text-white/50 text-sm">
              All contributions are tracked on-chain and managed through our Squads multisig.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-bold mb-2">Secure</h3>
            <p className="text-white/50 text-sm">
              Multi-signature wallet ensures secure fund management with community oversight.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-bold mb-2">Impactful</h3>
            <p className="text-white/50 text-sm">
              Your support directly funds ecosystem development and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
