import { useState } from 'react';
import Client from './components/Client';
import Host from './components/Host';

function App() {
    const [screen, setScreen] = useState<'menu' | 'client' | 'host'>('menu');

    return (
        <main>
            {screen === 'menu' ? (
                <>
                    <button onClick={() => setScreen('host')}>
                        Start Game
                    </button>
                    <button onClick={() => setScreen('client')}>
                        Join Game
                    </button>
                </>
            ) : screen === 'client' ? (
                <Client />
            ) : (
                <Host />
            )}
        </main>
    );
}

export default App;
