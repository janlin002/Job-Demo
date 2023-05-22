import React, { useState, useEffect } from "react";

function createGlobalState(initialState = {}) {
  const state = initialState;
  const subscribers = {};

  // Subscribers per state slice/prop
  // e.g. state.user
  for (const i in state) {
    subscribers[i] = [];
  }

  function useGlobalState(key) {
    // To prevent getting/setting keys that aren't initialized
    // May go away with the TypeScript implementation
    if (!state.hasOwnProperty(key)) {
      throw new Error("This key does not exist in the store");
    }

    // Global state as React local state
    const [stateChunk, setStateChunk] = useState(state[key]);

    useEffect(() => {
      subscribers[key].push(setStateChunk);

      // Cleanup: subscriber removal after effect execution
      return () => {
        const index = subscribers[key].findIndex((fn) => fn === setStateChunk);
        subscribers[key].splice(index, 1);
      };
    }, [key]);

    return [
      stateChunk,
      (value) => {
        setGlobalState(key, value);
      },
    ];
  }

  // Useful for setting state outside React components
  const setGlobalState = (key, value = null) => {
    // To prevent setting keys that aren't initialized
    if (!state.hasOwnProperty(key)) {
      throw new Error("This key does not exist in the store");
    }

    state[key] = value;

    subscribers[key].forEach((subscriber) => {
      subscriber(value);
    });
  };

  // Useful for getting state outside React components
  const getGlobalState = (key) => {
    // To prevent getting keys that aren't initialized
    if (!state.hasOwnProperty(key)) {
      throw new Error("This key does not exist in the store");
    }
    return state[key];
  };

  return {
    useGlobalState,
    setGlobalState,
    getGlobalState,
  };
}

export default createGlobalState;

// import { setGlobalState, getGlobalState } from "../store.config.js";

// getGlobalState("user");

// setGlobalState("user", {
//   name: "Johny Bo",
//   age: 23,
// });


// import createGlobalState from "./createGlobalState.js";

// const initialState = {
//   user: {
//     name: "Justin Case",
//     age: 37,
//   },
// };

// export const { useGlobalState, setGlobalState, getGlobalState } =
//   createGlobalState(initialState);