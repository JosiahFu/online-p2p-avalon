import { useState } from 'react';
import { GameState, peerIdPrefix } from '../data';
import Game from './Game';
import { useClientState } from '@tater-archives/react-use-peer-state';
import StringInput from '../lib/components/StringInput';

function Client() {
    const [gameId, setGameId] = useState<string>();

    const [gameState, setGameState, connected] = useClientState<GameState>(
        peerIdPrefix + gameId
    );

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
                    <StringInput
                        onSubmit={setGameId}
                        placeholder='e.g. A5545'
                    />
                </>
            )}
        </>
    );
}

export default Client;
