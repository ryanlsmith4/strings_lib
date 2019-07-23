import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'umd/index.js',
            format: 'umd',
            name: '@ryanlsmith-stringsLib',
            esModule: false
        }
    },
    {
        input: 'src/index.js',
        output: {
            file: 'esm/index.js',
            format: 'esm'
        }
    }
];