import React from "react";
import { List } from "react-virtualized";

interface State {
  list: any[];
}
class ListCompontent extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: []
    };
  }

  public componentDidMount() {
    const list = [
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
      <div style={{ position: "absolute" }}>
        <List
          width={300}
          height={300}
          rowCount={this.state.list.length}
          rowHeight={20}
          rowRenderer={this.rowRenderer}
        />
      </div>
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
export default ListCompontent;
