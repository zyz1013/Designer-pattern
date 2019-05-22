import React from "react";
import { Layout } from "antd";
import { Route, NavLink } from "react-router-dom";
import GridCompontent from "./Grid";
import ListCompontent from "./List";
import DefaultCompontent from "./Default";
import AutoSizerCompontent from "./AutoSizer";
import CellMeasurerCompontent from "./CellMeasurer";
import InfiniteLoaderCompontent from "./InfiniteLoader";
const { Content } = Layout;
class SiderNav extends React.Component {
  public render() {
    return (
      <div className="sider_nav">
        <NavLink to="/reactVirtualized/default">Default</NavLink>
        <NavLink to="/reactVirtualized/grid">Grid</NavLink>
        <NavLink to="/reactVirtualized/list">List</NavLink>
        <NavLink to="/reactVirtualized/autoSizer">AutoSizer</NavLink>
        <NavLink to="/reactVirtualized/cellMeasurer">CellMeasurer</NavLink>
        <NavLink to="/reactVirtualized/infiniteLoader">InfiniteLoader</NavLink>
      </div>
    );
  }
}

class ReactVirtualized extends React.Component {
  public render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: "auto"
        }}
      >
        <SiderNav />
        <Layout
          style={{ marginLeft: "10px ", overflowY: "auto", background: "#000" }}
        >
          <Content style={{ background: "#262629", color: "#C8C8C8" }}>
            <Route
              path="/reactVirtualized/default"
              component={DefaultCompontent}
            />
            <Route path="/reactVirtualized/grid" component={GridCompontent} />
            <Route path="/reactVirtualized/list" component={ListCompontent} />
            <Route
              path="/reactVirtualized/autoSizer"
              component={AutoSizerCompontent}
            />
            <Route
              path="/reactVirtualized/cellMeasurer"
              component={CellMeasurerCompontent}
            />
            <Route
              path="/reactVirtualized/infiniteLoader"
              component={InfiniteLoaderCompontent}
            />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default ReactVirtualized;
