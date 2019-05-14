import React from "react";
import AddTodo from "./container/AddTodo";
import TodoList from "./container/TodoList";
import Footer from "./container/Footer";

const reducers: any = {
  reducersA: () => {
    console.log("返回了stateA部分");
  },
  reducersB: () => {
    console.log("返回了stateB部分");
  }
};
const finnalReducers: any = {};
const reducerKeys = Object.keys(reducers);
for (let i = 0; i < reducerKeys.length; i++) {
  const key: any = reducerKeys[i];
  finnalReducers[key] = reducers[key];
}

// const combination = (state: any, action: any) => {
//   let hasChanged = false;
//   const nextState: any = {};
//   for (let i = 0; i < reducerKeys.length; i++) {
//     const key = reducerKeys[i];
//     const reducer = finnalReducers[key];
//     const prevStateForKey = state[key];
//     const nextStateForKey = reducer(prevStateForKey, action);
//     nextState[key] = nextStateForKey;
//     hasChanged = hasChanged || nextStateForKey !== prevStateForKey;
//   }
//   return hasChanged ? nextState : state;
// };
// let currentState: any;
// const dispatch = (action: any) => {
//   currentState = combination(currentState, action);
// };

class ReduxTodoDemo extends React.Component {
  render() {
    return (
      <div className="TodoWrapper">
        <div>React-Redux</div>
        <AddTodo />
        <TodoList />
        <Footer />
        <br />
        <br />
        <br />
        <br />
        <br />
        <pre>
          <p>
            combineReducers的基本原理，以及如何根据key处理对应的state数据，合并成一个新的state对象
          </p>
          {`
          const reducers: any = {
            reducersA: () => {
              console.log("返回了stateA部分");
            },
            reducersB: () => {
              console.log("返回了stateB部分");
            }
          };

          const finnalReducers: any = {};

          const reducerKeys = Object.keys(reducers);
          for (let i = 0; i < reducerKeys.length; i++) {
            const key: any = reducerKeys[i];
            finnalReducers[key] = reducers[key];
          }
          
          const combination = (state: any, action: any) => {
            let hasChanged = false;
            const nextState: any = {};
            for (let i = 0; i < reducerKeys.length; i++) {
              const key = reducerKeys[i];
              const reducer = finnalReducers[key];
              const prevStateForKey = state[key];
              const nextStateForKey = reducer(prevStateForKey, action);
              nextState[key] = nextStateForKey;
              hasChanged = hasChanged || nextStateForKey !== prevStateForKey;
            }
            return hasChanged ? nextState : state;
          }; 
          `}
        </pre>
        <p>
          有多个reducer，action是如何找到对应的reducer进行状态的转换？
          store根据dispatch之后返回的action对象中的 type
          属性来执行相关任务，也就是说只要带有相同 type
          属性值的reducer都会执行。
        </p>
        <pre>{`
          let currentState: any;
          const dispatch = (action: any) => {
             currentState = combination(currentState, action);
          };
          
        `}</pre>
      </div>
    );
  }
}

export default ReduxTodoDemo;
