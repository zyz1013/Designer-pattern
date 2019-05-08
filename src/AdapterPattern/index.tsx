import React from "react";

interface Graph {
  drawLine(): void;
  drawPie(): void;
}

class Canvas2D implements Graph {
  public drawLine() {
    console.log("2d line");
  }
  public drawPie() {
    console.log("2d pie");
  }
}

class Canvas3D {
  public draw3DLine() {
    console.log("3d line");
  }

  public draw3DPie() {
    console.log("3d pie");
  }
}

class Canvas3DAdapater implements Graph {
  private canvas3D: Canvas3D = new Canvas3D();

  public drawLine() {
    this.canvas3D.draw3DLine();
  }
  public drawPie() {
    this.canvas3D.draw3DPie();
  }
}

class AdapaterPattern extends React.PureComponent {
  public componentDidMount() {
    console.log("========适配器模式=========");
    let canvas2D: Graph = new Canvas2D();
    canvas2D.drawLine();
    canvas2D.drawPie();
    let canvas3D: Graph = new Canvas3DAdapater();
    canvas3D.drawLine();
    canvas3D.drawPie();
  }

  public render() {
    return (
      <div>
        <p>特点：把类或接口转换成另一个接口以便系统调用。</p>
        <p>
          用处：当系统需要引入多个功能类并且这些功能的接口不统一时可以考虑用适配器模式把它们转成统一的接口，现实中的例子很多，比如充电器接口适配器。
        </p>
        <pre>
          {`
              interface Graph {
                drawLine(): void;
                drawPie(): void;
              }
              
              class Canvas2D implements Graph {
                public drawLine() {
                  console.log("2d line");
                }
                public drawPie() {
                  console.log("2d pie");
                }
              }
              
              class Canvas3D {
                public draw3DLine() {
                  console.log("3d line");
                }
              
                public draw3DPie() {
                  console.log("3d pie");
                }
              }
              
              class Canvas3DAdapater implements Graph {
                private canvas3D: Canvas3D = new Canvas3D();
              
                public drawLine() {
                  this.drawLine = this.canvas3D.draw3DLine;
                }
                public drawPie() {
                  this.drawPie = this.canvas3D.draw3DPie;
                }
              }

              let canvas2D: Graph = new Canvas2D();
              canvas2D.drawLine();
              canvas2D.drawPie();
              let canvas3D: Graph = new Canvas3DAdapater();
              canvas3D.drawLine();
              canvas3D.drawPie();
          `}
        </pre>
      </div>
    );
  }
}
export default AdapaterPattern;
