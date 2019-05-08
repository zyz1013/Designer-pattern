import React from "react";

class Axis {
  public draw() {
    console.log("画坐标轴");
  }
}

class Line {
  public draw() {
    console.log("画线");
  }
}
class FanShape {
  public draw() {
    console.log("画扇形");
  }
}

interface Graph {
  drawLineChart(): void;
  drawPieChart(): void;
}

class Chart implements Graph {
  public drawLineChart() {
    new Axis().draw();
    new Line().draw();
  }
  public drawPieChart() {
    new FanShape().draw();
  }
}

class FacadePattern extends React.Component {
  public componentDidMount() {
    console.log("===外观模式======");
    let chart = new Chart();
    chart.drawLineChart();
    chart.drawPieChart();
  }
  public render() {
    return (
      <div>
        <p>
          特点：给子系统定义一个统一的接口来方便外面调用，并且可以减少对子系统的直接依赖。
        </p>
        <p>
          用处：当系统实现一个功能需要调用其他库或第三方库的很多功能时，需要有个统一调用维护的地方，这时可以考虑外观模式。
        </p>
        <p>注意：和适配器的区别。</p>
        <p>
          外观模式的目的主要在于简化调用，只需要一个简单的接口就可以解除对其他类的依赖。
        </p>
        <p>
          与适配器相同的点是同样是一种封装处理，不同的是适配器已有一个接口，而用这个接口不能使用另外一个系统，这时需要把那个系统做个适配来匹配现有接口，重点在于兼容接口,解决冲突。
          而外观则是封装现有系统来对外提供一种简单的使用方式，重点在于简化调用。
        </p>
        <pre>{`
              class Axis {
                public draw() {
                  console.log("画坐标轴");
                }
              }
              
              class Line {
                public draw() {
                  console.log("画线");
                }
              }
              class FanShape {
                public draw() {
                  console.log("画扇形");
                }
              }
              
              interface Graph {
                drawLineChart(): void;
                drawPieChart(): void;
              }
              
              class Chart implements Graph {
                public drawLineChart() {
                  new Axis().draw();
                  new Line().draw();
                }
                public drawPieChart() {
                  new FanShape().draw();
                }
              }
              console.log("===外观模式======");
              let chart = new Chart();
              chart.drawLineChart();
              chart.drawPieChart();
          `}</pre>
      </div>
    );
  }
}
export default FacadePattern;
