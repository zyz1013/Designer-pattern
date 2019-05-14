import React from "react";

class Classification extends React.Component {
  public componentDidMount() {}
  public render() {
    return (
      <div>
        <pre>
          {`
            1.创建型模式，共五种：
            单例模式、工厂方法模式、抽象工厂模式、建造者模式、原型模式。
            
            2.结构型模式，共七种：
            适配器模式、装饰者模式、代理模式、门面模式（外观模式）、桥梁模式、组合模式、享元模式。
            
            3.行为型模式，共十一种：
            策略模式、模版方法模式、观察者模式、迭代器模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。
            
            4.扩展模式：
            规则模式、对象池模式、雇工模式、黑板模式、空对象模式。

            =======================中英文===============================
            1.工厂方法模式	    Factory Method Pattern
            2.抽象工厂模式	    Abstract Factory Pattern
            3.建造者模式	            Builder Pattern
            4.原型模式	            Prototype Pattern
            5.单例模式	            Singleton Pattern
            6.适配器模式	            Adapter Pattern
            7.桥梁模式/桥接模式	    Bridge Pattern
            8.组合模式  	            Composite Pattern
            9.装饰模式	            Decorator Pattern
            10.门面模式/外观模式	    Facade Pattern
            11.享元模式	            Flyweight Pattern
            12.代理模式	            Proxy pattern
            13.责任链模式	    Chain of Responsibility Pattern
            14.命令模式	            Command Pattern
            15.解释器模式	    Interpreter Pattern
            16.迭代器模式	    Iterator Pattern
            17.中介者模式	    Mediator Pattern
            18.备忘录模式	    Memento Pattern
            19.观察者模式	    Observer Pattern
            20状态模式	            State Pattern
            21.策略模式	            Strategy Pattern
            22.模板方法模式	    Template Method Pattern
            23.访问者模式	    Visitor Pattern
             `}
        </pre>
      </div>
    );
  }
}
export default Classification;
