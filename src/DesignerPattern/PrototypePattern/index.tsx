import React from "react";

interface Clonable<T> {
  clone(): T;
}

class Origin implements Clonable<Origin> {
  public name: string = "";
  public clone(): Origin {
    let target = new Origin();
    target.name = this.name;
    return target;
  }
}

class PrototypePattern extends React.Component {
  public componentDidMount() {
    let origin = new Origin();
    origin.name = "原对象";
    let cloneObj = origin.clone();
    console.log("===原型模式===");
    console.log(cloneObj.name);
  }
  public render() {
    return (
      <div>
        <p>
          特点：不需要知道对象构建的细节，直接从对象上克隆出来。
          用处：当对象的构建比较复杂时或者想得到目标对象相同内容的对象时可以考虑原型模式。
          注意：深拷贝和浅拷贝。
        </p>
        <pre>
          {`
          interface Clonable<T> {
            clone(): T;
          }
          
          class Origin implements Clonable<Origin> {
            public name: string = "";
            public clone(): Origin {
              let target = new Origin();
              target.name = this.name;
              return target;
            }
          }

          let origin = new Origin();
          origin.name = "原对象";
          let cloneObj = origin.clone();
          console.log("===原型模式===");
          console.log(cloneObj.name);

        `}
        </pre>
      </div>
    );
  }
}
export default PrototypePattern;
