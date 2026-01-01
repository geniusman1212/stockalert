import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export default function ShadcnTestPage() {
    return (
        <div className="p-10 space-y-6 text-white">
            <h1 className="text-2xl font-bold">Shadcn UI Test</h1>

            <Button>Primary Button</Button>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem>Item One</DropdownMenuItem>
                    <DropdownMenuItem>Item Two</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
