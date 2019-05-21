import React from "react";

export default class DefaultCompontent extends React.Component {
  public render() {
    return (
      <div>
        <div>
          <a href="https://segmentfault.com/a/1190000017233625" target="_blank">
            点击跳转链接
          </a>
          <br />
          1、react-virtualized简介
          react-virtualized是一个实现虚拟列表较为优秀的组件库，react-virtualized提供了一些基础组件用于实现虚拟列表，虚拟网格，虚拟表格等等，它们都可以减小不必要的dom渲染。此外还提供了几个高阶组件，可以实现动态子元素高度，以及自动填充可视区等等。
          react-virtualized的基础组件包含：
          <br />
          <p>
            Grid：用于优化构建任意网状的结构，传入一个二维的数组，渲染出类似棋盘的结构。
          </p>
          <p>List：List是基于Grid来实现的，但是是一个维的列表，而不是网状。</p>
          <p>
            Table：Table也是基于Grid来实现，表格具有固定的头部，并且可以在垂直方向上滚动
          </p>
          <p>
            Masonry：同样可以在水平方向，也可以在垂直方向滚动，不同于Grid的是可以自定义每个元素的大小，或者子元素的大小也可以是动态变化的
          </p>
          <p>Collection：类似于瀑布流的形式，同样可以水平和垂直方向滚动。</p>
          值得注意的是这些基础组件都是继承于React中的PureComponent，因此当state变化的时候，只会做一个浅比较来确定重新渲染与否
          。
          除了这几个基础组件外，react-virtualized还提供了几个高阶组件，比如ArrowKeyStepper
          、AutoSizer、CellMeasurer、InfiniteLoader等，本文具体介绍常用的AutoSizer、CellMeasurer和InfiniteLoader。
          <br />
          <p>
            AutoSizer：使用于一个子元素的情况，通过AutoSizer包含的子元素会根据父元素Resize的变化，自动调节该子元素的可视区的宽度和高度，同时调节的还有该子元素可视区真实渲染的dom元素的数目。
          </p>
          <p>
            CellMeasurer：这个高阶组件可以动态的改变子元素的高度，适用于提前不知道长列表中每一个子元素高度的情况。
          </p>
          <p>
            InfiniteLoader：这个高阶组件用于Table或者List的无限滚动，适用于滚动时异步请求等情况
          </p>
        </div>
      </div>
    );
  }
}
