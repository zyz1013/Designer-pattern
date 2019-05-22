import React from "react";
import {
  Route,
  Switch,
  NavLink,
  RouteComponentProps,
  withRouter
} from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import DesignerPattern from "./DesignerPattern";
import ReduxTodoDemo from "./ReduxTodoDemo";
import ReactVirtualized from "./ReactVirtualized";

class HeaderNav extends React.Component {
  public render() {
    return (
      <div className="header_nav">
        <NavLink to="/designer" activeClassName="active">
          设计者模式示例
        </NavLink>
        <NavLink to="/reduxTodoDemo" activeClassName="active">
          Redux示例
        </NavLink>
        <NavLink to="/reactVirtualized" activeClassName="active">
          ReactVirtualized 示例
        </NavLink>
      </div>
    );
  }
}
interface PageProps extends RouteComponentProps {}
interface PageState {}
class App extends React.Component<PageProps, PageState> {
  public constructor(props: PageProps) {
    super(props);
  }
  public componentDidMount() {}

  public render() {
    const path = window.location.hash.substr(1).split("/");
    if (path[1] === "") {
      this.props.history.push("/designer/classification");
    }
    if (path[1] === "designer") {
      if (!path[2]) {
        this.props.history.push("/designer/classification");
      }
    }
    if (path[1] === "reactVirtualized") {
      if (!path[2]) {
        this.props.history.push("/reactVirtualized/default");
      }
    }
    return (
      <Layout
        style={{ height: "100%", background: "#000", overflow: "hidden" }}
      >
        <HeaderNav />
        <div
          style={{
            marginTop: "4px",
            display: "flex",
            flexDirection: "row",
            flex: "auto"
          }}
        >
          <Switch>
            <Route path="/" exact={true} component={DesignerPattern} />
            <Route path="/designer/:type" component={DesignerPattern} />
            <Route path="/reduxTodoDemo" component={ReduxTodoDemo} />
            <Route
              path="/reactVirtualized/:type"
              component={ReactVirtualized}
            />
          </Switch>
        </div>
      </Layout>
    );
  }
}
export default withRouter(App);
