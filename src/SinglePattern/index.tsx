import React from "react";

class MyFactory {
  private static instance = new MyFactory();
  public static get Instance() {
    return this.instance;
  }
}

class SinglePattern extends React.PureComponent {
  public componentDidMount() {
    const myFactory1 = MyFactory.Instance;
    const myFactory2 = MyFactory.Instance;
    console.log("======================");
    console.log("单例模式：对象是否相同");
    console.log(myFactory1 === myFactory2);
  }

  public render() {
    return (
      <pre>
        {`
          class MyFactory {
            private static instance = new MyFactory();
            public static get Instance() {
              return this.instance;
            }
          }

          const myFactory1 = MyFactory.Instance;
          const myFactory2 = MyFactory.Instance;
          console.log("======================");
          console.log("单例模式：对象是否相同");
          console.log(myFactory1 === myFactory2);

          `}
      </pre>
    );
  }
}
export default SinglePattern;
