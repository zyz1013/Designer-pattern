import React from "react";
import { Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import SinglePattern from "./SinglePattern";
import FactoryMethodPattern from "./FactoryMethodPattern";
import ObserverPattern from "./ObserverPattern";
import SimpleFactoryPattern from "./SimpleFactoryPattern";
import AbstractFactoryPattern from "./AbstractFactoryPattern";
import BuilderPattern from "./BuilderPattern";
import PrototypePattern from "./PrototypePattern";
import AdapterPattern from "./AdapterPattern";
import FacadePattern from "./FacadePattern";
import CompositePattern from "./CompositePattern";
const { Content, Sider } = Layout;
class DesignerPattern extends React.Component {
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{ background: "#fff" }}
        >
          <Menu theme="light" mode="inline" defaultSelectedKeys={["single"]}>
            <Menu.Item key="single">
              <Link to="/designer/single">单例模式</Link>
            </Menu.Item>
            <Menu.Item key="simplefactory">
              <Link to="/designer/simplefactory">简单工厂模式</Link>
            </Menu.Item>
            <Menu.Item key="factoryMethod">
              <Link to="/designer/factoryMethod">工厂方法模式</Link>
            </Menu.Item>
            <Menu.Item key="abstractFactory">
              <Link to="/designer/abstractFactory">抽象工厂模式</Link>
            </Menu.Item>
            <Menu.Item key="observer">
              <Link to="/designer/observer">观察者模式</Link>
            </Menu.Item>
            <Menu.Item key="builder">
              <Link to="/designer/builder">建造者模式</Link>
            </Menu.Item>
            <Menu.Item key="prototype">
              <Link to="/designer/prototype">原型模式</Link>
            </Menu.Item>
            <Menu.Item key="adapter">
              <Link to="/designer/adapter">适配器模式</Link>
            </Menu.Item>
            <Menu.Item key="facade">
              <Link to="/designer/facade">门面模式/外观模式</Link>
            </Menu.Item>
            <Menu.Item key="composite">
              <Link to="/designer/composite">组合模式</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <Route path="/designer/single" component={SinglePattern} />
            <Route
              path="/designer/simplefactory"
              component={SimpleFactoryPattern}
            />
            <Route
              path="/designer/factoryMethod"
              component={FactoryMethodPattern}
            />
            <Route
              path="/designer/abstractFactory"
              component={AbstractFactoryPattern}
            />
            <Route path="/designer/observer" component={ObserverPattern} />
            <Route path="/designer/builder" component={BuilderPattern} />
            <Route path="/designer/prototype" component={PrototypePattern} />
            <Route path="/designer/adapter" component={AdapterPattern} />
            <Route path="/designer/facade" component={FacadePattern} />
            <Route path="/designer/composite" component={CompositePattern} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default DesignerPattern;
