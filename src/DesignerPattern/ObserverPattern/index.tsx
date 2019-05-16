import React from "react";
import img from "./image.png";
// 发布类
class Subject {
  private Observers: Observer[] = new Array<Observer>();
  private state: number = 0;
  //新增订阅
  public subscribe(listener: Observer): void {
    this.Observers.push(listener);
  }
  //取消订阅
  public unsubscribe(observer?: Observer) {
    if (!observer) {
      this.Observers = new Array<Observer>();
    } else {
      this.Observers.splice(this.Observers.indexOf(observer), 1);
    }
  }
  public setState(state: number): void {
    this.state = state;
    this.publish();
  }
  public getState(): number {
    return this.state;
  }
  public publish(): void {
    for (let observer of this.Observers) {
      observer.update();
    }
  }
}
//订阅者抽象类
abstract class Observer {
  //抽象方法 子类必须实现
  public abstract update(): void;
}

//订阅者A
class AObserver extends Observer {
  public constructor(subject: Subject) {
    super();
    subject.subscribe(this);
  }
  public update() {
    console.log("======观察者模式==========");
    console.log("我是订阅者A，我收到更新通知了");
  }
}

//订阅者B
class BObserver extends Observer {
  public constructor(subject: Subject) {
    super();
    subject.subscribe(this);
  }
  public update() {
    console.log("======观察者模式==========");
    console.log("我是订阅者B，我收到更新通知了");
  }
}

class ObserverPattern extends React.Component {
  public componentDidMount() {
    const subjcet = new Subject();
    new AObserver(subjcet);
    new BObserver(subjcet);
    subjcet.setState(1000);
  }
  public render() {
    return (
      <div>
        <pre>
          {`
        思路：
        指定发布者；
        给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者；
        最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数


        // 发布类
        class Subject {
          private Observers: Observer[] = new Array<Observer>();
          private state: number = 0;
          //新增订阅
          public subscribe(listener: Observer): void {
            this.Observers.push(listener);
          }
          //取消订阅
          public unsubscribe(observer?: Observer) {
            if (!observer) {
              this.Observers = new Array<Observer>();
            } else {
              this.Observers.splice(this.Observers.indexOf(observer), 1);
            }
          }
          public setState(state: number): void {
            this.state = state;
            this.publish();
          }
          public getState(): number {
            return this.state;
          }
          public publish(): void {
            for (let observer of this.Observers) {
              observer.update();
            }
          }
        }
        //订阅者抽象类
        abstract class Observer {
          //抽象方法 子类必须实现
          public abstract update(): void;
        }
        
        //订阅者A
        class AObserver extends Observer {
          public constructor(subject: Subject) {
            super();
            subject.subscribe(this);
          }
          public update() {
            console.log("======观察者模式==========");
            console.log("我是订阅者A，我收到更新通知了");
          }
        }
        
        //订阅者B
        class BObserver extends Observer {
          public constructor(subject: Subject) {
            super();
            subject.subscribe(this);
          }
          public update() {
            console.log("======观察者模式==========");
            console.log("我是订阅者B，我收到更新通知了");
          }
        }
        const subjcet = new Subject();
        new AObserver(subjcet);
        new BObserver(subjcet);
        subjcet.setState(1000);
      `}
        </pre>
        <img src={img} width="100%" />
      </div>
    );
  }
}
export default ObserverPattern;
