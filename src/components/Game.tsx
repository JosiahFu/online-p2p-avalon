import { GameState } from '../data';

function Game({
    host = false,
    state,
    onChange,
}: {
    host?: boolean;
    state: GameState;
    onChange: (state: GameState) => void;
}) {
    return <>{JSON.stringify(state)}</>;
}

export default Game;
