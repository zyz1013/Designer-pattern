import React from "react";
import { InfiniteLoader, List } from "react-virtualized";
import "react-virtualized/styles.css";
interface State {
  list: any[];
}

class InfiniteLoaderCompontent extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: [
        "开始",
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
        "ooo"
      ]
    };
  }

  public componentDidMount() {}
  public render() {
    return (
      <InfiniteLoader
        isRowLoaded={this.isRowLoaded}
        loadMoreRows={this.loadMoreRows}
        rowCount={300}
      >
        {({ onRowsRendered, registerChild }) => (
          <List
            height={200}
            onRowsRendered={onRowsRendered}
            ref={registerChild}
            rowCount={300}
            rowHeight={20}
            rowRenderer={this.rowRenderer}
            width={300}
          />
        )}
      </InfiniteLoader>
    );
  }
  private isRowLoaded = ({ index }: any) => {
    return !!this.state.list[index];
  };

  private loadMoreRows = ({ startIndex, stopIndex }: any) => {
    console.log("加载更多");
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }).then(() => {
      const list = [
        "又开始",
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
      const oldList = this.state.list;
      let newList = [...oldList, ...list];
      this.setState({ list: newList });
    });
  };

  private rowRenderer = ({ key, index, style }: any) => {
    return (
      <div key={key} style={style}>
        {this.state.list[index]}
      </div>
    );
  };
}
export default InfiniteLoaderCompontent;
