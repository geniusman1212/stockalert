import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
    return (
        <section className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-white">
                StockAlert
            </h1>

            <p className="max-w-xl text-gray-400">
                Track real-time stock prices, set alerts, and get deep insights into companies.
            </p>

            <Link href="/dashboard">
                <Button>Get Started</Button>
            </Link>
        </section>
    );
}
