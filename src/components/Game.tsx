import { GameState } from '../data';
import { handleStart } from '../gameLogic';

function Game({
    host = false,
    state,
    onChange,
}: {
    host?: boolean;
    state: GameState;
    onChange: (state: GameState) => void;
}) {
    switch (state.status) {
        case 'start':
            return (
                <>
                    <h1>Players joined:</h1>
                    {state.players.map(({ name }, i) => (
                        <p key={i}>{name}</p>
                    ))}
                    {host && (
                        <button onClick={() => onChange(handleStart(state))}>
                            Begin
                        </button>
                    )}
                </>
            );
    }
}

export default Game;
