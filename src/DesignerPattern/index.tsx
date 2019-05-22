import React from "react";
import { Route, NavLink } from "react-router-dom";
import { Layout } from "antd";
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
import Classification from "./classification";
import StrategyPattern from "./StrategyPattern";
import TemplateMethodPattern from "./TemplateMethodPattern";
const { Content } = Layout;

class SiderNav extends React.Component {
  public render() {
    return (
      <div className="sider_nav">
        <NavLink to="/designer/classification" activeClassName="active">
          设计模式分类
        </NavLink>
        <NavLink to="/designer/single" activeClassName="active">
          单例模式
        </NavLink>
        <NavLink to="/designer/simplefactory" activeClassName="active">
          简单工厂模式
        </NavLink>
        <NavLink to="/designer/factoryMethod" activeClassName="active">
          工厂方法模式
        </NavLink>
        <NavLink to="/designer/abstractFactory" activeClassName="active">
          抽象工厂模式
        </NavLink>
        <NavLink to="/designer/builder" activeClassName="active">
          建造者模式
        </NavLink>
        <NavLink to="/designer/prototype" activeClassName="active">
          原型模式
        </NavLink>
        <NavLink to="/designer/facade" activeClassName="active">
          门面模式/外观模式
        </NavLink>
        <NavLink to="/designer/composite" activeClassName="active">
          组合模式
        </NavLink>
        <NavLink to="/designer/strategy" activeClassName="active">
          策略模式
        </NavLink>
        <NavLink to="/designer/template" activeClassName="active">
          模板方法模式
        </NavLink>
        <NavLink to="/designer/adapter" activeClassName="active">
          适配器模式
        </NavLink>
        <NavLink to="/designer/observer" activeClassName="active">
          观察者模式
        </NavLink>
      </div>
    );
  }
}

class DesignerPattern extends React.Component {
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
          <Content>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "auto",
                background: "#262629",
                color: "#C8C8C8"
              }}
            >
              <Route
                path="/designer/classification"
                component={Classification}
              />
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
              <Route path="/designer/strategy" component={StrategyPattern} />
              <Route
                path="/designer/template"
                component={TemplateMethodPattern}
              />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
export default DesignerPattern;
