import { useMemo } from 'react';
import { GameState, peerIdPrefix } from '../data';
import Game from './Game';
import { useHostState } from '@tater-archives/react-use-peer-state';

function Host({ name }: { name: string }) {
    const gameId = useMemo(
        () =>
            new Array(4)
                .fill(null)
                .map(
                    () =>
                        'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[
                            Math.floor(36 * Math.random())
                        ]
                )
                .join(''),
        []
    );

    const [gameState, setGameState, realId] = useHostState<GameState>(
        gameId ? peerIdPrefix + gameId : undefined,
        {
            status: 'start',
            players: [{ name }],
        }
    );

    return (
        <>
            {gameState.status === 'start' && (
                <>
                    <p>Game id: {realId ? gameId : 'Loading...'}</p>
                </>
            )}
            <Game state={gameState} onChange={setGameState} host />
        </>
    );
}

export default Host;
