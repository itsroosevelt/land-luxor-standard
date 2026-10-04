'use client';

import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, Transaction } from '@solana/web3.js';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';

export function AirdropModal() {
    const { connected, publicKey, signTransaction } = useWallet();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        // Mostrar modal automáticamente si está conectado
        if (connected && publicKey) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [connected, publicKey]);

    const handleClose = () => {
        if (publicKey) {
            localStorage.setItem(`airdrop_seen_${publicKey.toBase58()}`, 'true');
        }
        setIsOpen(false);
    };

    const handleClaim = async () => {
        if (!publicKey || !signTransaction) return;
        
        setLoading(true);
        setStatus('idle');
        setErrorMsg('');

        try {
            // 1. Pedir la transacción al backend
            const res = await fetch('/api/claim-airdrop', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userWalletAddress: publicKey.toBase58() })
            });

            const data = await res.json();
            
            if (!res.ok) {
                throw new Error(data.error || 'Error al reclamar el airdrop');
            }

            // 2. Reconstruir la transacción parcialmente firmada desde base64
            const transactionBuf = Buffer.from(data.transaction, 'base64');
            const transaction = Transaction.from(transactionBuf);
            
            // 3. El usuario la firma (pagando la comisión)
            const signed = await signTransaction(transaction);
            
            // 4. Enviar a la red de Solana
            const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
            const txid = await connection.sendRawTransaction(signed.serialize());
            
            setStatus('success');
            if (publicKey) {
                localStorage.setItem(`airdrop_seen_${publicKey.toBase58()}`, 'true');
            }
            
            // Cerramos después de 3 segundos
            setTimeout(() => {
                setIsOpen(false);
            }, 3000);

        } catch (err: any) {
            console.error(err);
            setStatus('error');
            setErrorMsg(err.message || "Ocurrió un error inesperado.");
        } finally {
            setLoading(false);
        }
    };

    if (!connected || !publicKey) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={handleClose}
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-3xl bg-transparent border border-white/20 rounded-3xl p-8 overflow-hidden"
                    >
                        {/* Glow effect morado */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[#AB9FF2]/10 blur-[60px]" />
                        
                        <button 
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 z-20"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-8 items-center relative z-10">
                            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                                {/* Gift Icon azul sin contenedor */}
                                <div className="text-blue-500 mb-4 md:mb-6">
                                    <Gift size={40} />
                                </div>
                                
                                <h2 className="text-2xl sm:text-3xl font-normal text-white mb-3">¡Reclama tus 150 $LXR!</h2>
                                <p className="text-white/60 text-sm sm:text-base mb-6 md:mb-8 leading-relaxed font-light">
                                    Gracias por conectar tu billetera. Tienes un regalo de bienvenida listo para ti. Confirma la transacción para recibirlos.
                                </p>

                                {status === 'success' ? (
                                    <div className="w-full bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl text-sm font-medium">
                                        ¡Transacción exitosa! Los tokens están en camino a tu billetera.
                                    </div>
                                ) : (
                                    <button 
                                        onClick={handleClaim}
                                        disabled={loading}
                                        className="w-full h-12 md:h-14 bg-transparent border border-white hover:border-blue-500 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full text-base sm:text-lg font-normal transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center justify-center"
                                    >
                                        {loading ? 'Procesando firma...' : 'Reclamar 150 $LXR'}
                                    </button>
                                )}

                                {status === 'error' && (
                                    <p className="text-red-400 text-sm mt-4 font-normal">{errorMsg}</p>
                                )}
                            </div>

                            <div className="flex justify-center items-center w-full mb-2 md:mb-0">
                                <motion.div 
                                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-full md:max-w-[280px] rounded-full overflow-hidden drop-shadow-[0_0_30px_rgba(171,159,242,0.3)] aspect-square"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <img 
                                        src="/images/token-dark.png" 
                                        alt="Luxor Token" 
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
