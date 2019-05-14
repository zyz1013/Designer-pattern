import React from "react";

// 加减乘除
interface Compute<T> {
  computeF(num1: T, num2: T): T;
}

// 创建策略对象
class ComputeAdd implements Compute<number> {
  public computeF(num1: number, num2: number): number {
    return num1 + num2;
  }
}

class ComputeSub implements Compute<number> {
  public computeF(num1: number, num2: number): number {
    return num1 - num2;
  }
}

class ComputeMul implements Compute<String> {
  public computeF(num1: String, num2: String): String {
    return `${num1} + ${num2}`;
  }
}

// 创建行为类
class Context {
  public compute: Compute<any>;

  public constructor(compute: Compute<any>) {
    this.compute = compute;
  }

  public excuteCompute(num1: number, num2: number): number {
    return this.compute.computeF(num1, num2);
  }
}

class StrategyPattern extends React.PureComponent {
  public componentDidMount() {
    console.log("=========策略模式===============");
    let context1 = new Context(new ComputeAdd()).excuteCompute(1, 2);
    let context2 = new Context(new ComputeSub()).excuteCompute(1, 2);
    let content3 = new Context(new ComputeMul()).excuteCompute(1, 2);
    console.log(context1, context2, content3);
  }

  public render() {
    return (
      <div>
        <p>
          特点：用组合的方式调用一些算法或逻辑，并且可以根据状态不同而选用不同的算法或逻辑。
        </p>
        <p>用处：对象需要运行时切换算法或逻辑可以考虑使用策略模式。</p>
        <p>注意：策略的生成方式</p>
        <pre>
          {`
            // 方式一
            export function reducer(state = initialState, action: ActionTypes): State {
              switch (action.type) {
                case RESET_STATE:
                  return ObjectUtils.getOrDefault(action.payload, initialState);
                case UPDATE_STATE:
                  return Object.assign({}, state, { ...action.payload });
                case ADD_DETAIL:
                  const dl = [...state.detailList];
                  dl.push(action.payload);
                  return { ...state, detailList: dl };
                default:
                  return state;
              }
            }

            // 方式二
            const ACTION_HANDLERS = {
              [RESET_STATE]: () => {
                return $$state;
              },
              [UPDATE_STATE]: ($$s: $$State, action: any) => {
                return $$s.merge(action.payload);
              },
              [UPDATE_BROKER_CONTACTS]: ($$s: $$State, action: any) => {
                const $$oldBrokerContacts = $$s.get("brokerContacts");
                const $$newBrokerContacts = $$oldBrokerContacts.merge(action.payload);
                return $$s.set("brokerContacts", $$newBrokerContacts);
              },
            };
            
            export default function reducer($$s = $$state, action: any) {
              const handler = ACTION_HANDLERS[action.type];
              return handler ? handler($$s, action) : $$s;
            }



            // 加减乘除
            interface Compute<T> {
              computeF(num1: T, num2: T): T;
            }

            // 创建策略对象
            class ComputeAdd implements Compute<number> {
              public computeF(num1: number, num2: number): number {
                return num1 + num2;
              }
            }

            class ComputeSub implements Compute<number> {
              public computeF(num1: number, num2: number): number {
                return num1 - num2;
              }
            }

            class ComputeMul implements Compute<String> {
              public computeF(num1: String, num2: String): String {
                  return num1 + num2;
              }
            }

            // 创建行为类
            class Context {
              public compute: Compute<any>;

              public constructor(compute: Compute<any>) {
                this.compute = compute;
              }

              public excuteCompute(num1: number, num2: number): number {
                return this.compute.computeF(num1, num2);
              }
            }

            let context1 = new Context(new ComputeAdd()).excuteCompute(1, 2);
            let context2 = new Context(new ComputeSub()).excuteCompute(1, 2);
            let content3 = new Context(new ComputeMul()).excuteCompute(1, 2);

            console.log(context1, context2, content3); 
          `}
        </pre>
      </div>
    );
  }
}
export default StrategyPattern;
