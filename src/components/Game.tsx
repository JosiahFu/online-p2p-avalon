import { GameState } from '../data';

function Game({
    // Uncomment these when they become used
    // host = false,
    state,
    // onChange,
}: {
    host?: boolean;
    state: GameState;
    onChange: (state: GameState) => void;
}) {
    return <>{JSON.stringify(state)}</>;
}

export default Game;
