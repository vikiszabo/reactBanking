import * as React from 'react';

/**
 * Example functional component.
 * Use these when you don't need state in your component, so most of the time when using Redux.
 * It receives properties as an object called 'props' in the params.
 * Most of the time it should extracted using object destructuring, so it is easier to reference them
 * and you can see what you are working with right away.
 */
const Example = ({ text }) => (
    <h1>{text}</h1>
);

export default Example;