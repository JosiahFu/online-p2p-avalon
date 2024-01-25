import { EffectCallback, useEffect, useRef } from 'react';

/**
 * Runs code whenever a dependency changes
 * @param callback The code to run
 * @param dependency The value to watch for changes
 */
function useWatch(callback: EffectCallback, dependency: unknown) {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;
    useEffect(() => {
        return callbackRef.current();
    }, [dependency]);
}

export { useWatch };
