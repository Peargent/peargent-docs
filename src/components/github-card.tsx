"use client";

import { Github, Star } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export function GithubCard() {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/repos/Peargent/peargent")
            .then((res) => res.json())
            .then((data) => setStars(data.stargazers_count))
            .catch((e) => console.error(e));
    }, []);

    return (
        <Link
            href="https://github.com/Peargent/peargent"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-3 bg-card hover:bg-accent text-card-foreground px-4 py-3 rounded-lg border border-border transition-colors no-underline"
        >
            <Github className="w-5 h-5 flex-shrink-0" />
            <span className="font-semibold truncate">Peargent/peargent</span>
            <div className="flex items-center gap-1 text-muted-foreground ml-auto whitespace-nowrap">
                <Star className="w-4 h-4" />
                <span>{stars !== null ? (stars > 1000 ? (stars / 1000).toFixed(1) + 'k' : stars) : "..."}</span>
            </div>
        </Link>
    );
}
