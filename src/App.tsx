import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SinglePattern from "./SinglePattern";
import FactoryPattern from "./FactoryPattern";
const { Content, Sider } = Layout;
class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{ height: "100%" }}>
          <Sider breakpoint="lg" collapsedWidth="0">
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["single"]}>
              <Menu.Item key="single">
                <Link to="/single">单例模式</Link>
              </Menu.Item>
              <Menu.Item key="factory">
                <Link to="/factory">工厂模式</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <span className="nav-text">观察者模式</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <Route path="/single" component={SinglePattern} />
              <Route path="/factory" component={FactoryPattern} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
export default App;
