import React from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from "react-virtualized";

interface State {
  list: any[];
}
const cache = new CellMeasurerCache({ defaultHeight: 30, fixedWidth: true });
class CellMeasurerCompontent extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: []
    };
  }

  public componentDidMount() {
    const list = [
      "sadhaskldhakldhaslkhdsajkdhaskjdhksajdhskajdhakuweqwnbkza撒都好看ashdajhkjhjksdhkajhskjdhak",
      "bbbbb",
      "cccc",
      "ddd",
      "eeee",
      "fff",
      "ggg",
      "hhh",
      "iii",
      "jjjj",
      "kkkk",
      "lll",
      "mmm",
      "nnnn",
      "ooo",
      "ppp",
      "qqq",
      "aaaa",
      "bbbbb",
      "cccc",
      "ddd",
      "eeee",
      "fff",
      "ggg",
      "hhh",
      "iii",
      "jjjj",
      "kkkk",
      "lll",
      "mmm",
      "nnnn",
      "ooo",
      "ppp",
      "qqq"
    ];
    this.setState({ list });
  }
  public render() {
    return (
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            rowCount={this.state.list.length}
            rowHeight={cache.rowHeight}
            deferredMeasurementCache={cache}
            rowRenderer={this.cellRenderer}
          />
        )}
      </AutoSizer>
    );
  }
  private cellRenderer = ({ index, key, parent, style }: any) => {
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        <div style={style}>{this.state.list[index]}</div>
      </CellMeasurer>
    );
  };
}
export default CellMeasurerCompontent;
