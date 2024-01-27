type Role = 'arthur_servant' | 'mordred_minion' | 'mordred' | 'morgana' | 'merlin' | 'percival' | 'assassin' | 'oberon';

interface StartState {
    players: {
        name: string;
    }[];
    status: 'start';
}

interface BaseState<S extends string> {
    status: S;
    players: {
        name: string;
        role: Role;
    }[];
    quests: {
        partySize: number;
        /** undefined = incomplete, true = good win, false = bad win */
        result: boolean | undefined;
    }[];
    failedQuests: number;
}

interface PlayState<P extends string> extends BaseState<'playing'> {
    currentLeader: number;
    currentQuest: number;
    phase: P;
}

interface VotePlayState<P extends string> extends PlayState<P> {
    /** true = pass or approve, false = fail or disapprove */
    votes: (boolean | undefined)[];
}

interface EndState extends BaseState<'end'> {
    assassinTarget?: number;
}

export type GameState = StartState | PlayState<'discussion'> | VotePlayState<'voting'> | VotePlayState<'quest'> | PlayState<'quest_result'> | BaseState<'assassin'> | EndState;

export const peerIdPrefix = 'wss-avalon-'
