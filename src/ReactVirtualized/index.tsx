import React from "react";
import { Layout, Menu } from "antd";
import { Link, Route } from "react-router-dom";
import GridCompontent from "./Grid";
import ListCompontent from "./List";
import DefaultCompontent from "./Default";
import AutoSizerCompontent from "./AutoSizer";
import CellMeasurerCompontent from "./CellMeasurer";
import InfiniteLoaderCompontent from "./InfiniteLoader";
const { Sider } = Layout;
class ReactVirtualized extends React.Component {
  public render() {
    return (
      <Layout style={{ height: "100%" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{ background: "#fff" }}
        >
          <Menu theme="light" mode="inline" defaultSelectedKeys={["default"]}>
            <Menu.Item key="default">
              <Link to="/reactVirtualized/default">Default</Link>
            </Menu.Item>
            <Menu.Item key="grid">
              <Link to="/reactVirtualized/grid">Grid</Link>
            </Menu.Item>
            <Menu.Item key="list">
              <Link to="/reactVirtualized/list">List</Link>
            </Menu.Item>
            <Menu.Item key="autoSizer">
              <Link to="/reactVirtualized/autoSizer">AutoSizer</Link>
            </Menu.Item>
            <Menu.Item key="cellMeasurer">
              <Link to="/reactVirtualized/cellMeasurer">CellMeasurer</Link>
            </Menu.Item>
            <Menu.Item key="infiniteLoader">
              <Link to="/reactVirtualized/infiniteLoader">InfiniteLoader</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
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
        </Layout>
      </Layout>
    );
  }
}

export default ReactVirtualized;
