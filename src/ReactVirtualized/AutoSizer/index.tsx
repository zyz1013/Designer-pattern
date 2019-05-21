import React from "react";
import { List, AutoSizer } from "react-virtualized";

interface State {
  list: any[];
}
class AutoSizerCompontent extends React.Component<{}, State> {
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
            rowHeight={20}
            rowRenderer={this.rowRenderer}
          />
        )}
      </AutoSizer>
    );
  }
  private rowRenderer = ({
    key,
    index,
    isScrolling,
    isVisible,
    style
  }: any) => {
    return (
      <div key={key} style={style}>
        {this.state.list[index]}
      </div>
    );
  };
}
export default AutoSizerCompontent;
