import { ReactNode } from 'react';

export interface Team {
    id: string;
    logo: string;
    name: string;
    coach: string;
    record: string;
    pointsFor: number;
    pointsAgainst: number;
    powerRank: number;
    powerRankText: string;
}

export interface Matchup {
    homeTeam: {
        id: string;
        score: number;
    };
    awayTeam: {
        id: string;
        score: number;
    }
}

export interface Article {
    coverImage: string;
    title: string;
    summary: string;
    author: string;
    content: ReactNode;
}
