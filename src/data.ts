export type Role = 'arthur_servant' | 'mordred_minion' | 'merlin' | 'assassin' | OptionalRoles;
export type OptionalRoles = 'mordred' | 'morgana' | 'percival' | 'oberon';

export interface Quest {
    partySize: number,
    fails: number,
}

export interface StartState {
    players: {
        name: string;
    }[];
    roles: Record<OptionalRoles, boolean>;
    status: 'start';
}

export interface BaseState<S extends string> {
    status: S;
    players: {
        name: string;
        role: Role;
    }[];
    quests: (Quest & {
        /** undefined = incomplete, true = good win, false = bad win */
        result: boolean | undefined;
    })[];
    failedQuests: number;
}

export interface PlayState<P extends string> extends BaseState<P> {
    currentLeader: number;
    currentQuest: number;
}

export interface VotePlayState<P extends string> extends PlayState<P> {
    /** true = pass or approve, false = fail or disapprove */
    votes: (boolean | undefined)[];
}

export interface EndState extends BaseState<'end'> {
    assassinTarget?: number;
}

export type GameState = StartState | PlayState<'discussion'> | VotePlayState<'voting'> | VotePlayState<'quest'> | VotePlayState<'quest_result'> | BaseState<'assassin'> | EndState;

export const peerIdPrefix = 'wss-avalon-'
