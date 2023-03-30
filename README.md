<div align="center">
  <h1>React Trigger State 🔄</h1>

  <h3>
    A lightweight state management library for React cross-component communication.
  </h3>

  <h4>Simplify your code and improve your performance</h4>
</div>

<p align="center">
  <a href="https://github.com/gabrieldeavila/react-trigger-state/fork" target="_blank">
    <img src="https://img.shields.io/github/forks/gabrieldeavila/react-trigger-state?" alt="Badge showing the total of project forks"/>
  </a>

  <a href="https://github.com/gabrieldeavila/react-trigger-state/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/gabrieldeavila/react-trigger-state?" alt="Badge showing the total of project stars"/>
  </a>

  <a href="https://github.com/gabrieldeavila/react-trigger-state/commits/main" target="_blank">
    <img src="https://img.shields.io/github/commit-activity/m/gabrieldeavila/react-trigger-state?" alt="Badge showing average commit frequency per month"/>
  </a>

  <a href="https://github.com/gabrieldeavila/react-trigger-state/commits/main" target="_blank">
    <img src="https://img.shields.io/github/last-commit/gabrieldeavila/react-trigger-state?" alt="Badge showing when the last commit was made"/>
  </a>

  <a href="https://github.com/gabrieldeavila/react-trigger-state/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/gabrieldeavila/react-trigger-state?" alt="Badge showing the total of project issues"/>
  </a>

  <a href="https://github.com/gabrieldeavila/react-trigger-state/pulls" target="_blank">
    <img src="https://img.shields.io/github/issues-pr/gabrieldeavila/react-trigger-state?" alt="Badge showing the total of project pull-requests"/>
  </a>

  <a href="https://github.com/gabrieldeavila/react-trigger-state/blob/master/LICENSE.md" target="_blank">
    <img alt="Badge showing project license type" src="https://img.shields.io/github/license/gabrieldeavila/react-trigger-state?color=f85149"/>
  </a>
</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0;
  <a href="#eyes-see-it-in-action">See it in action</a> &#xa0; | &#xa0;
  <a href="#thinking_face-show-me-how">Show me how</a>&#xa0; | &#xa0;
  <a href="#crystal_ball-usetriggerstate">useTriggerState</a> &#xa0; | &#xa0;
  <a href="#inbox_tray-installation">Installation</a>
</p>

## :dart: About

Tired of passing props down the component tree, aren't you?

I know that's sucks.

Sometimes you use Redux or Context API, but it's not always the best solution.

Because you need to create a lot of boilerplate code.

Or even worse, you just need to pass a simple value from one component to another.

And that's why I created React Trigger State.

So, with React Trigger State you can trigger state changes from anywhere in your application.

And what about if the user goes to another page and goes back?

Well, don't worry, because we store the data so you don't need to waste your time!

Don't believe me?

## :eyes: See it in action

<p>See these stories <a href="https://6411132c8debbccc1a851060-nlposxqaxb.chromatic.com/?path=/story/trigger-ref--trigger-ref" target="_blank">by clicking here</a></p>

Others example will be provided through the documentation.

## :thinking: Show me how

Take a look at this diagram:

<img src="https://raw.githubusercontent.com/gabrieldeavila/react-trigger-state/master/public/diagram.png" alt="React Trigger State Diagram" />

So, with React Trigger State, two components can communicate with each other without having a parent-child relationship.

## :crystal_ball: useTriggerState

This hook makes it possible to trigger state changes from anywhere in the application.

First you need to initialize it:

```js
import { useTriggerState } from "react-trigger-state";

// in a component
const [state, setState] = useTriggerState({
  name: "my_first_state",
  initial: "Wow, looks like it's magic!",
});
```

Then, you can get its value:

```js
import { useTriggerState } from "react-trigger-state";

// in another component
const [state, setState] = useTriggerState({
  name: "my_first_state",
});
```

Yep, that's only it!

And you can use it like a normal state.

Didn't get it?
Ok, try these CodeSandbox examples:

<p><a href="https://codesandbox.io/s/usetriggerstate-example-js-z3dzlu?file=/src/App.js" target="_blank">For JS lovers 🥰</a></p>

<p><a href="https://codesandbox.io/s/usetriggerstate-basic-example-9ukf2s?file=/src/App.tsx" target="_blank">For TS lovers 🤗</a></p>

## :inbox_tray: Installation

So simple, right?

Why don't you try it?

Install it and start using it right now!

NPM

```bash
npm i react-trigger-state
```

Yarn

```bash
yarn add react-trigger-state
```

PS: please, I'd really appreciate if you could give me a star on the project.
