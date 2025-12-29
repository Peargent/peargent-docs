
import { cn } from '@/lib/cn';

interface ContributorCreditProps {
    message: string;
    username: string;
    link: string;
    className?: string;
}

export function ContributorCredit({ message, username, link, className }: ContributorCreditProps) {
    return (
        <div className={cn("mt-5 mb-5 flex justify-end text-sm text-muted-foreground", className)}>
            <span>
                {message}{" "}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                    @{username}
                </a>
            </span>
        </div>
    );
}
