import { useState } from 'react';
import Client from './components/Client';
import Host from './components/Host';
import TextInput from './lib/components/TextInput';

function App() {
    const [name, setName] = useState('');
    const [screen, setScreen] = useState<'menu' | 'client' | 'host'>('menu');

    return (
        <main>
            {screen === 'menu' ? (
                <>
                    <p>Enter name</p>
                    <TextInput value={name} onChange={setName} />
                    <button onClick={() => setScreen('host')}>
                        Start Game
                    </button>
                    <button onClick={() => setScreen('client')}>
                        Join Game
                    </button>
                </>
            ) : screen === 'client' ? (
                <Client name={name} />
            ) : (
                <Host name={name} />
            )}
        </main>
    );
}

export default App;
