import Header from '@/components/Header';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <main className="min-h-screen bg-black text-gray-400">
            <Header />
            <div className="container mx-auto py-8">
                {children}
            </div>
        </main>
    );
}
