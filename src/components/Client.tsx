import { useState } from 'react';
import { GameState, peerIdPrefix } from '../data';
import Game from './Game';
import { useClientState } from '@tater-archives/react-use-peer-state';
import StringSubmit from '../lib/components/StringSubmit';
import { useWatch } from '../lib/useWatch';

function Client({ name }: { name: string }) {
    const [gameId, setGameId] = useState<string>();

    const [gameState, setGameState, connected] = useClientState<GameState>(
        peerIdPrefix + gameId
    );

    useWatch(() => {
        if (!connected || gameState?.status !== 'start') return;

        setGameState({
            ...gameState,
            players: [...gameState.players, { name }],
        });
    }, connected);

    return (
        <>
            {gameId ? (
                gameState && connected ? (
                    <Game state={gameState} onChange={setGameState} />
                ) : (
                    <p>Connecting...</p>
                )
            ) : (
                <>
                    <p>Enter game id</p>
                    <StringSubmit
                        onSubmit={setGameId}
                        placeholder='e.g. A5545'
                    />
                </>
            )}
        </>
    );
}

export default Client;
