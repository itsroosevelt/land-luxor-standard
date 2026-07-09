'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronDown, Briefcase, MapPin, Clock, ArrowRight, Globe, ArrowLeft, Heart } from 'lucide-react';
import { JOBS_DATA } from '@/lib/jobs-data';

export default function CareersPage() {
    const t = useTranslations('CareersPage');
    const locale = useLocale();
    const activeLocale = locale === 'es' ? 'es' : 'en';

    // State for selected job (for details view)
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

    // Filter states
    const [department, setDepartment] = useState('all');
    const [employeeTime, setEmployeeTime] = useState('all');
    const [location, setLocation] = useState('all');
    const [language, setLanguage] = useState('all');

    // Filter logic
    const filteredJobs = JOBS_DATA.filter((job) => {
        if (department !== 'all' && job.department !== department) return false;
        if (employeeTime !== 'all' && job.employeeTime !== employeeTime) return false;
        if (location !== 'all' && job.location !== location) return false;
        if (language !== 'all' && job.language !== language) return false;
        return true;
    });

    const getGmailLink = (jobTitle: string) => {
        const email = 'hr@byluxor.com';
        const subject = activeLocale === 'es' 
            ? `Postulación: ${jobTitle}` 
            : `Application: ${jobTitle}`;
        
        const body = activeLocale === 'es'
            ? `¡Hola! Un gusto.\n\nMe gustaría aplicar a la posición de ${jobTitle}.\n\nAquí está mi hoja de vida y mis métodos de contacto, principalmente WhatsApp o Telegram:\n- WhatsApp/Telegram: \n- Redes sociales: \n\n¡Muchas gracias!`
            : `Hello! Hope you are doing well.\n\nI would like to apply for the ${jobTitle} position.\n\nHere is my resume/CV and my contact methods, mainly WhatsApp or Telegram:\n- WhatsApp/Telegram: \n- Social media profiles: \n\nThank you!`;

        return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    // If a job is selected, render the details view
    if (selectedJobId) {
        const job = JOBS_DATA.find((j) => j.id === selectedJobId);
        if (job) {
            const details = job[activeLocale];
            const deptLabel = t(`dept_${job.department}`);
            const locationLabel = t(job.location);
            const locationTypeLabel = t(job.locationType);
            const employeeTimeLabel = t(job.employeeTime);
            const languageLabel = t(job.language);

            return (
                <div className="min-h-screen bg-white text-black pt-16 pb-24 px-6 md:px-12 flex flex-col items-center">
                    {/* Top navigation with Back Arrow and Brand */}
                    <div className="w-full max-w-5xl flex items-center justify-between mb-12 border-b border-gray-100 pb-6">
                        <button
                            onClick={() => setSelectedJobId(null)}
                            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors font-medium group cursor-pointer"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            {activeLocale === 'es' ? 'Volver a posiciones' : 'Back to positions'}
                        </button>
                        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-[var(--font-outfit)] select-none">
                            LUXOR
                        </span>
                    </div>

                    <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-12 font-sans">
                        {/* Sidebar: Details Grid */}
                        <div className="lg:col-span-1 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-gray-100 pb-8 lg:pb-0 lg:pr-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight font-[var(--font-outfit)]">
                                {details.title}
                            </h1>

                            <div className="flex flex-col gap-6 mt-4">
                                <div className="space-y-1">
                                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                                        {t('location')}
                                    </span>
                                    <p className="text-sm font-semibold text-gray-800">{locationLabel}</p>
                                </div>

                                <div className="space-y-1">
                                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                                        {t('employee_time')}
                                    </span>
                                    <p className="text-sm font-semibold text-gray-800">{employeeTimeLabel}</p>
                                </div>

                                <div className="space-y-1">
                                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                                        {t('location_type') || 'Location Type'}
                                    </span>
                                    <p className="text-sm font-semibold text-gray-800">{locationTypeLabel}</p>
                                </div>

                                <div className="space-y-1">
                                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                                        {t('department')}
                                    </span>
                                    <p className="text-sm font-semibold text-gray-800">{deptLabel}</p>
                                </div>

                                <div className="space-y-1">
                                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                                        {t('language') || 'Language'}
                                    </span>
                                    <p className="text-sm font-semibold text-gray-800">{languageLabel}</p>
                                </div>

                                <div className="space-y-1">
                                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                                        {activeLocale === 'es' ? 'Compensación' : 'Compensation'}
                                    </span>
                                    <p className="text-sm font-semibold text-blue-600">{details.compensation}</p>
                                </div>
                            </div>
                        </div>

                        {/* Main Body Description */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Tab Indicator mockup */}
                            <div className="flex border-b border-gray-100 pb-3 gap-8 text-sm">
                                <span className="font-bold border-b-2 border-blue-600 pb-3 text-blue-600 cursor-default">
                                    {activeLocale === 'es' ? 'Descripción' : 'Overview'}
                                </span>
                                <a
                                    href={getGmailLink(details.title)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-gray-400 hover:text-black pb-3 transition-colors"
                                >
                                    {activeLocale === 'es' ? 'Postulación' : 'Application'}
                                </a>
                            </div>

                            {/* About Section */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-gray-800 font-[var(--font-outfit)]">
                                    {activeLocale === 'es' ? 'Sobre Luxor' : 'About Luxor'}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{details.about}</p>
                            </div>

                            {/* Role Section */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-gray-800 font-[var(--font-outfit)]">
                                    {activeLocale === 'es' ? 'El Rol' : 'The Role'}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{details.role}</p>
                            </div>

                            {/* What You'll Own Section */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-gray-800 font-[var(--font-outfit)]">
                                    {activeLocale === 'es' ? 'Responsabilidades' : "What You'll Own"}
                                </h3>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                                    {details.own.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Requirements Section */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-gray-800 font-[var(--font-outfit)]">
                                    {activeLocale === 'es' ? 'Requisitos' : 'Requirements'}
                                </h3>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                                    {details.requirements.map((req, idx) => (
                                        <li key={idx}>{req}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Why Section */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-gray-800 font-[var(--font-outfit)]">
                                    {activeLocale === 'es' ? 'Por qué este rol es interesante' : 'Why This Might Be Interesting'}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{details.why}</p>
                            </div>

                            {/* Apply Button */}
                            <div className="pt-8 border-t border-gray-100 flex justify-end">
                                <a
                                    href={getGmailLink(details.title)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-600/10 cursor-pointer"
                                >
                                    {activeLocale === 'es' ? 'Aplicar a este trabajo' : 'Apply for this Job'}
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="min-h-screen bg-white text-black pt-16 pb-24 px-6 flex flex-col items-center">
            {/* Header / Title Area */}
            <div className="w-full max-w-4xl text-center mt-12 mb-16">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-[var(--font-outfit)] select-none">
                    LUXOR
                </h1>
                <p className="text-xs md:text-sm text-gray-400 tracking-[0.3em] uppercase mt-3 font-semibold font-[var(--font-montserrat)]">
                    the intelligence of value
                </p>
            </div>
            
            {/* Filter & Jobs Section */}
            <div className="w-full max-w-4xl font-sans">
                {/* Heading */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight font-[var(--font-outfit)]">
                        {t('open_positions')} ({filteredJobs.length})
                    </h2>
                    <p className="text-sm text-gray-500 font-medium">
                        {t('filters')}
                    </p>
                </div>

                {/* Filters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {/* Department Filter */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">
                            {t('department')}
                        </label>
                        <div className="relative">
                            <select
                                suppressHydrationWarning
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                className="appearance-none w-full bg-white border border-gray-200 hover:border-gray-300 rounded-[10px] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer pr-10"
                            >
                                <option value="all">{t('all')}</option>
                                <option value="blockchain">{t('dept_blockchain')}</option>
                                <option value="ai">{t('dept_ai')}</option>
                                <option value="product">{t('dept_product')}</option>
                                <option value="marketing">{t('dept_marketing')}</option>
                                <option value="operations">{t('dept_operations')}</option>
                                <option value="ceo_staff">{t('dept_ceo_staff')}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Employee Time Filter */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">
                            {t('employee_time')}
                        </label>
                        <div className="relative">
                            <select
                                suppressHydrationWarning
                                value={employeeTime}
                                onChange={(e) => setEmployeeTime(e.target.value)}
                                className="appearance-none w-full bg-white border border-gray-200 hover:border-gray-300 rounded-[10px] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer pr-10"
                            >
                                <option value="all">{t('all')}</option>
                                <option value="full_part_time">{t('full_part_time')}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Location Filter */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">
                            {t('location')}
                        </label>
                        <div className="relative">
                            <select
                                suppressHydrationWarning
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="appearance-none w-full bg-white border border-gray-200 hover:border-gray-300 rounded-[10px] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer pr-10"
                            >
                                <option value="all">{t('all')}</option>
                                <option value="us_latam">{t('us_latam')}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Language Filter */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">
                            {t('language')}
                        </label>
                        <div className="relative">
                            <select
                                suppressHydrationWarning
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="appearance-none w-full bg-white border border-gray-200 hover:border-gray-300 rounded-[10px] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer pr-10"
                            >
                                <option value="all">{t('all')}</option>
                                <option value="english">{t('english')}</option>
                                <option value="spanish">{t('spanish')}</option>
                                <option value="bilingual">{t('bilingual')}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Content Area for Positions List */}
                <div className="w-full border-t border-gray-100 pt-8 flex flex-col gap-6">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => {
                            const details = job[activeLocale];
                            const deptLabel = t(`dept_${job.department}`);
                            const locationLabel = t(job.location);
                            const locationTypeLabel = t(job.locationType);
                            const employeeTimeLabel = t(job.employeeTime);
                            const languageLabel = t(job.language);

                            return (
                                <div
                                    key={job.id}
                                    onClick={() => setSelectedJobId(job.id)}
                                    className="border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/[0.02] transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer group"
                                >
                                    <div className="space-y-4 max-w-2xl">
                                        {/* Department and Tags */}
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                                                {deptLabel}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-gray-400 pl-1">
                                                <Clock size={12} />
                                                {employeeTimeLabel}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-gray-400 pl-1">
                                                <MapPin size={12} />
                                                {locationLabel} ({locationTypeLabel})
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-gray-400 pl-1">
                                                <Globe size={12} />
                                                {languageLabel}
                                            </span>
                                        </div>

                                        {/* Job Title & Desc */}
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 tracking-tight font-[var(--font-outfit)] group-hover:text-blue-600 transition-colors">
                                                {details.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2">
                                                {details.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action button mockup */}
                                    <button
                                        suppressHydrationWarning
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedJobId(job.id);
                                        }}
                                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 group-hover:bg-blue-600 group-hover:text-white active:scale-95 text-gray-700 text-xs font-bold rounded-xl transition-all shrink-0"
                                    >
                                        {activeLocale === 'es' ? 'Ver Detalles' : 'View Details'}
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center py-16 text-gray-400">
                            <Briefcase className="w-12 h-12 mx-auto mb-4 text-gray-200" />
                            <p className="text-sm font-medium">No open positions matching your filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
