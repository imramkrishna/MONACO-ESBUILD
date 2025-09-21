import { useState } from "react";

export function useCodeExecution() {
    const [output, setOutput] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isExecuting, setIsExecuting] = useState<boolean>(false);

    const executeCode = async (code: string) => {
        setIsExecuting(true);
        setOutput('');
        setError('');

        try {
            // Using Function constructor to create a new function from the code string
            const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
            const func = new AsyncFunction('console', code);
            const consoleMock = {
                log: (msg: any) => {
                    setOutput(prev => prev + msg + '\n');
                },
                error: (msg: any) => {
                    setError(prev => prev + msg + '\n');
                }
            };

            await func(consoleMock);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsExecuting(false);
        }
    };

    return { output, error, isExecuting, executeCode };
}