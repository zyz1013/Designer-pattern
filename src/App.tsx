import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SinglePattern from "./SinglePattern";
import FactoryMethodPattern from "./FactoryMethodPattern";
import ObserverPattern from "./ObserverPattern";
import SimpleFactoryPattern from "./SimpleFactoryPattern";
import AbstractFactoryPattern from "./AbstractFactoryPattern";
import BuilderPattern from "./BuilderPattern";
import PrototypePattern from "./PrototypePattern";
import AdapterPattern from "./AdapterPattern";
const { Content, Sider } = Layout;
const pathname = window.location.pathname;
class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{ height: "100%" }}>
          <Sider breakpoint="lg" collapsedWidth="0">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[pathname, "single"]}
            >
              <Menu.Item key="/single">
                <Link to="/single">单例模式</Link>
              </Menu.Item>
              <Menu.Item key="/simplefactory">
                <Link to="/simplefactory">简单工厂模式</Link>
              </Menu.Item>
              <Menu.Item key="/factoryMethod">
                <Link to="/factoryMethod">工厂方法模式</Link>
              </Menu.Item>
              <Menu.Item key="/abstractFactory">
                <Link to="/abstractFactory">抽象工厂模式</Link>
              </Menu.Item>
              <Menu.Item key="/observer">
                <Link to="/observer">观察者模式</Link>
              </Menu.Item>
              <Menu.Item key="/builder">
                <Link to="/builder">建造者模式</Link>
              </Menu.Item>
              <Menu.Item key="/prototype">
                <Link to="/prototype">原型模式</Link>
              </Menu.Item>
              <Menu.Item key="/adapter">
                <Link to="/adapter">适配器模式</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <Route path="/single" component={SinglePattern} />
              <Route path="/simplefactory" component={SimpleFactoryPattern} />
              <Route path="/factoryMethod" component={FactoryMethodPattern} />
              <Route
                path="/abstractFactory"
                component={AbstractFactoryPattern}
              />
              <Route path="/observer" component={ObserverPattern} />
              <Route path="/builder" component={BuilderPattern} />
              <Route path="/prototype" component={PrototypePattern} />
              <Route path="/adapter" component={AdapterPattern} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
export default App;
