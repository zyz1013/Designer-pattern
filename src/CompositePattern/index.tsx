import React from "react";

class CompositePattern extends React.Component {
  public componentDidMount() {}
  public render() {
    return (
      <div>
        <p>
          特点：以树的形式展示对象的组合，并且可以以类似的方式处理每个枝点。
        </p>
        <p>
          用处：当对象组合以树状存在，有父有子，并且对象的行为差不多时可以考虑组合模式，如菜单，游戏里的技能树。
        </p>
        <p>注意：遍历组合的性能要求。</p>
        <p>案例:文件夹-文件 树形结构</p>
        <pre>{`
         
          `}</pre>
      </div>
    );
  }
}
export default CompositePattern;
