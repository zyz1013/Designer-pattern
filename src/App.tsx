import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./App.css";
import DesignerPattern from "./DesignerPattern";
import ReduxTodoDemo from "./ReduxTodoDemo";
import ReactVirtualized from "./ReactVirtualized";
const { Header } = Layout;

class App extends React.Component {
  public render() {
    const defaultType = window.location.hash.substr(1);
    return (
      <Router>
        <Layout style={{ height: "100%" }}>
          <Header className="header">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[defaultType]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="/designer/classification">
                <Link to="/designer/classification">设计者模式</Link>
              </Menu.Item>
              <Menu.Item key="/reduxTodoDemo">
                <Link to="/reduxTodoDemo">Redux示例</Link>
              </Menu.Item>
              <Menu.Item key="/reactVirtualized/default">
                <Link to="/reactVirtualized/default">
                  ReactVirtualized 示例
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Switch>
              <Route path="/" exact={true} component={DesignerPattern} />
              <Route path="/designer" component={DesignerPattern} />
              <Route path="/reduxTodoDemo" component={ReduxTodoDemo} />
              <Route path="/reactVirtualized" component={ReactVirtualized} />
            </Switch>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
export default App;
