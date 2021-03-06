import React from "react";
import { Grid } from "react-virtualized";
import "./index.css";
interface State {
  list: any[];
}

class GridCompontent extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: [
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"],
        ["Jony yu", "Software Engineer", "Shenzhen", "CHINA", "GUANGZHOU"]
      ]
    };
  }

  public componentDidMount() {}
  public render() {
    return (
      <div>
        <Grid
          className="dm_ReactVirtualized_Grid"
          cellRenderer={this.cellRenderer}
          columnCount={this.state.list[0].length}
          columnWidth={100}
          height={300}
          rowCount={this.state.list.length}
          rowHeight={30}
          width={600}
        />
      </div>
    );
  }
  private cellRenderer = ({ columnIndex, key, rowIndex, style }: any) => {
    return (
      <div key={key} style={style} className="dm_ReactVirtualized_Grid_Row">
        {this.state.list[rowIndex][columnIndex]}
      </div>
    );
  };
}
export default GridCompontent;
