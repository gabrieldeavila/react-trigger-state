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
  <a href="#eyes-see_it_in_action">See it in action</a> &#xa0; | &#xa0;
  <a href="#crystal_ball-useTriggerState">useTriggerState</a> &#xa0; | &#xa0;
  <a href="#crystal_ball-useTriggerFunction_and_useGetFunction">useTriggerFunction</a> &#xa0; | &#xa0;
  <a href="#crystal_ball-useTriggerRef">useTriggerRef</a> &#xa0; | &#xa0;
  <a href="#inbox_tray-installation">Installation</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
</p>

## :dart: About

Tired of passing props down the component tree?

Well, that's sucks, right?

So, with React Trigger State you can trigger state changes from anywhere in your application.

And the best part is that you don't need to use Redux or any other state management library.

Because it's just a simple hook.

And what about if the user goes to another page?

Well, don't worry, because we store the data so you don't need to waste your time!

<!-- to do: create website -->
<!-- example -->

## :eyes: See it in action

Also, don't think this is going to be a boring documentation:

Check these examples [Just click here](https://6411132c8debbccc1a851060-genjkthnwu.chromatic.com/?path=/story/function--function)

## :crystal_ball: useTriggerState

Initial state

```js
import { useTriggerState } from "react-trigger-state";

// in a component
const [state, setState] = useTriggerState({
  name: "my_first_state",
  initial: "Wow, looks like it's magic!",
});
```

Anywhere in the application

```js
import { useTriggerState } from "react-trigger-state";

// in another component
const [state, setState] = useTriggerState({
  name: "my_first_state",
});
```

Yep, that's only it!

And you can use it like a normal state.

## :crystal_ball: useTriggerFunction and useGetFunction

First you need to create a function

```js
import { useTriggerFunction } from "react-trigger-state";

// in a component
const myFirstFunction = useCallback(() => {
  // your complex logic here
  alert("wow, im a function!");
}, []);

useTriggerFunction({
  name: "my_first_function",
  function: myFirstFunction,
});
```

Anywhere in the application

```js
import { useGetFunction } from "react-trigger-state";

// in another component
const myFirstFunction = useGetFunction("my_first_function");

// and then you can call it
myFirstFunction();
```

Wow so magic again!

## :crystal_ball: useTriggerRef

Initial ref

```js
import { useTriggerRef } from "react-trigger-state";

// in a component
const [ref, setRef] = useTriggerRef({
  name: "ref_ex",
  initial: {"--"},
});
```

Anywhere in the application

```js
import { useTriggerRef } from "react-trigger-state";

// in another component
const [ref, setRef] = useTriggerRef({
  name: "ref_ex",
});

function handleClick() {
  setRef("wow, it's magic!");
}
```

We need to use the setRef to trigger the change, otherwise it won't work.

But you can use it like a normal ref.

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
