interface StartState {
    playerCount: number;
    status: 'start';
}

interface BaseState<S extends string> {
    status: S;
    players: ('arthur_servant' | 'mordred_minion' | 'mordred' | 'morgana' | 'merlin' | 'percival' | 'assassin' | 'oberon')[];
    quests: {
        partySize: number;
        result: boolean | undefined; // undefined = incomplete, true = good win, false = bad win
    }[];
    failedQuests: number;
}

interface PlayState<P extends string> extends BaseState<'playing'> {
    currentLeader: number;
    currentQuest: number;
    phase: P;
}

interface VotePlayState<P extends string> extends PlayState<P> {
    votes: (boolean | undefined)[];
}

interface EndState extends BaseState<'end'> {
    assassinTarget?: number;
}

export type GameState = StartState | PlayState<'discussion'> | VotePlayState<'voting'> | VotePlayState<'quest'> | PlayState<'quest_result'> | BaseState<'assassin'> | EndState;

export const peerIdPrefix = 'wss-avalon-'
