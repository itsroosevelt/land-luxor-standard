import { Link } from '@/i18n/routing';

export const FloatingJoinButton = () => {
    return (
        <div className="w-full flex justify-center py-32 md:py-48 bg-transparent relative z-20">
            <Link
                href="/private-sale"
                className="flex items-center justify-center px-8 h-12 bg-white hover:bg-gray-100 rounded-full transition-all text-base text-black font-bold gap-3 shadow-xl shadow-white/10"
            >
                <span>$0.01 USDC</span>
                <span>JOIN NOW</span>
            </Link>
        </div>
    );
};
