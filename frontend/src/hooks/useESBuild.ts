import * as esBuild from 'esbuild-wasm';
import { useEffect, useState,useRef } from 'react';

export function useESBuild() {
    const [isReady,setIsReady] = useState(false);
    const [ref,setRef] = useState<HTMLDivElement | null>(null);
    const esBuildRef = useRef<typeof esBuild | null>(null);

    useEffect(() => {
        if (isReady || !ref) {
            return;
        }

        esBuild.initialize({
            worker: true,
            wasmURL: 'https://unpkg.com/esbuild-wasm@0.17.19/esbuild.wasm',
            // wasmURL: '/esbuild.wasm',
        }).then(() => {
            esBuildRef.current = esBuild;
            setIsReady(true);
        }).catch((err) => {
            console.error('Failed to initialize esbuild:', err);
        });
    }, [isReady, ref]);
    const transform = async (code: string, options: esBuild.TransformOptions) => {
        if (!isReady || !esBuildRef.current) {
            throw new Error('esbuild is not ready');
        }
        const defaultOptions: esBuild.TransformOptions = {
            loader: 'tsx',
            target: 'es2015',
            jsxFactory: '_React.createElement',
            jsxFragment: '_React.Fragment',
            sourcemap: 'inline',
        };
        options = { ...defaultOptions, ...options };
        return await esBuildRef.current.transform(code, options);
    }
    return { isReady, ref, setRef, esBuild: esBuildRef.current, transform };
}