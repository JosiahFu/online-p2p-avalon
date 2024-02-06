import { GameState, OptionalRoles, Quest, Role, StartState } from './data';

interface GameSize {
    good: number;
    bad: number;
    quests: (number | Quest)[];
}

const goodRoles: Role[] = ['arthur_servant', 'merlin', 'percival'];
const badRoles: Role[] = ['mordred_minion', 'mordred', 'morgana', 'oberon', 'assassin'];

const playerData: Record<number, GameSize> = {
    4: {
        good: 2,
        bad: 2,
        quests: [2, 3, { partySize: 4, fails: 2 }, 4],
    },
    5: {
        good: 3,
        bad: 2,
        quests: [2, 3, { partySize: 4, fails: 2 }, 4],
    }
}

export function handleStart(state: StartState): GameState {
    const roles: Role[] = ((Object.keys(state.roles) as OptionalRoles[]).filter(role => state.roles[role]) as Role[]).concat(['merlin', 'assassin']);
    roles.push(...new Array<Role>(playerData[state.players.length].good - roles.filter(role => goodRoles.includes(role)).length).fill('arthur_servant'));
    roles.push(...new Array<Role>(playerData[state.players.length].bad - roles.filter(role => badRoles.includes(role)).length).fill('mordred_minion'));

    const players = state.players.map(player => ({ ...player, role: roles.splice(Math.floor(Math.random() * roles.length), 1)[0] }));

    return {
        status: 'discussion',
        currentLeader: Math.floor(Math.random() * state.players.length),
        currentQuest: 0,
        failedQuests: 0,
        players,
        quests: playerData[state.players.length].quests.map(quest => typeof quest === 'number' ? { partySize: quest, fails: 1, result: undefined } : { ...quest, result: undefined }),
    }
}
