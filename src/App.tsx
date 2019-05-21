import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./App.css";
import DesignerPattern from "./DesignerPattern";
import ReduxTodoDemo from "./ReduxTodoDemo";
import ReactVirtualized from "./ReactVirtualized";
const { Header } = Layout;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{ height: "100%" }}>
          <Header className="header">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["designer"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="designer">
                <Link to="/designer/classification">设计者模式</Link>
              </Menu.Item>
              <Menu.Item key="reduxTodoDemo">
                <Link to="/reduxTodoDemo">Redux(Todo)示例</Link>
              </Menu.Item>
              <Menu.Item key="reactVirtualized">
                <Link to="/reactVirtualized/grid">React virtualized 示例</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Switch>
              <Route path="/" exact={true} component={DesignerPattern} />
              <Route path="/designer/:type" component={DesignerPattern} />
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
