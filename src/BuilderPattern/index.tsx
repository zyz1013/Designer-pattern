import React from "react";

//食品包装接口
interface Packing {
  pack(): string;
}
//纸 包装 汉堡
class Paper implements Packing {
  public pack() {
    return "纸";
  }
}
//瓶子 包装 饮料
class Bottle implements Packing {
  public pack() {
    return "瓶子";
  }
}

//食品基本元素
interface Item {
  packing(): Packing;
  price(): number;
  name(): string;
}

//汉堡类
abstract class Burger implements Item {
  public abstract name(): string;
  public packing() {
    return new Paper();
  }

  public abstract price(): number;
}

//饮料类
abstract class Drink implements Item {
  public abstract name(): string;
  public packing() {
    return new Bottle();
  }

  public abstract price(): number;
}

//素食汉堡
class VegBurger extends Burger {
  public name() {
    return "素食汉堡";
  }
  public price() {
    return 25;
  }
}

//鸡肉汉堡
class ChickenBurger extends Burger {
  public name() {
    return "鸡肉汉堡";
  }
  public price() {
    return 50;
  }
}

// 咖啡
class Coffee extends Drink {
  public name() {
    return "coffee";
  }
  public price() {
    return 10;
  }
}
// 可乐
class Cola extends Drink {
  public name() {
    return "Cola";
  }
  public price() {
    return 5;
  }
}

class Meal {
  private _items: Item[] = [];
  public addItem(item: Item) {
    this._items.push(item);
  }
  public getCost(): number {
    let cost = 0;
    for (let item of this._items) {
      cost += item.price();
    }
    console.log("套餐合计消费:", cost);
    return cost;
  }
  public showItem() {
    for (let item of this._items) {
      console.log(`商品:${item.name()}`);
      console.log(`包装:${item.packing().pack()}`);
      console.log(`价格:${item.price()}`);
    }
  }
}

class MealBuilder {
  //准备素食套餐 组合在一起
  prepapreVegMeal() {
    let meal = new Meal();
    meal.addItem(new VegBurger());
    meal.addItem(new Coffee());
    return meal;
  }
  //准备非素食套餐 组合在一起
  parpapreNoteVegMeal() {
    let meal = new Meal();
    meal.addItem(new ChickenBurger());
    meal.addItem(new Cola());
    return meal;
  }
}

export { Meal, MealBuilder, VegBurger, Coffee, ChickenBurger, Cola };

class BuliderPattern extends React.Component {
  public componentDidMount() {
    console.log("========建造者模式==========");
    let meal1 = new MealBuilder().prepapreVegMeal();
    let meal2 = new MealBuilder().parpapreNoteVegMeal();
    console.log("====套餐1====");
    meal1.getCost();
    console.log("====套餐2====");
    meal2.getCost();
  }
  public render() {
    return (
      <div>
        <p>
          特点：一步一步来构建一个复杂对象，可以用不同组合或顺序建造出不同意义的对象，通常使用者并不需要知道建造的细节，通常使用链式调用来构建对象。
        </p>
        <p>
          用处：当对象像积木一样灵活，并且需要使用者来自己组装时可以采用此模式，好处是不需要知道细节，调用方法即可，常用来构建如Http请求、生成器等。
        </p>
        <p>
          注意：和工厂模式的区别，工厂是生产产品，谁生产，怎样生产无所谓，而建造者重在组装产品，层级不一样。
        </p>
        <pre>{`
          //食品包装接口
          interface Packing {
            pack(): string;
          }
          //纸 包装 汉堡
          class Paper implements Packing {
            public pack() {
              return "纸";
            }
          }
          //瓶子 包装 饮料
          class Bottle implements Packing {
            public pack() {
              return "瓶子";
            }
          }
          
          //食品基本元素
          interface Item {
            packing(): Packing;
            price(): number;
            name(): string;
          }
          
          //汉堡类
          abstract class Burger implements Item {
            public abstract name(): string;
            public packing() {
              return new Paper();
            }
            public abstract price(): number;
          }
          
          //饮料类
          abstract class Drink implements Item {
            public abstract name(): string;
            public packing() {
              return new Bottle();
            }
          
            public abstract price(): number;
          }
          
          //素食汉堡
          class VegBurger extends Burger {
            public name() {
              return "素食汉堡";
            }
            public price() {
              return 25;
            }
          }
          
          //鸡肉汉堡
          class ChickenBurger extends Burger {
            public name() {
              return "鸡肉汉堡";
            }
            public price() {
              return 50;
            }
          }
          
          // 咖啡
          class Coffee extends Drink {
            public name() {
              return "coffee";
            }
            public price() {
              return 10;
            }
          }
          // 可乐
          class Cola extends Drink {
            public name() {
              return "Cola";
            }
            public price() {
              return 5;
            }
          }
          
          class Meal {
            private _items: Item[] = [];
            public addItem(item: Item) {
              this._items.push(item);
            }
            public getCost(): number {
              let cost = 0;
              for (let item of this._items) {
                cost += item.price();
              }
              return cost;
            }
            public showItem() {
              for (let item of this._items) {
                  console.log('展示商品信息')
              }
            }
          }
          
          class MealBuilder {
            //准备素食套餐 组合在一起
            prepapreVegMeal() {
              let meal = new Meal();
              meal.addItem(new VegBurger());
              meal.addItem(new Coffee());
              return meal;
            }
            //准备非素食套餐 组合在一起
            parpapreNoteVegMeal() {
              let meal = new Meal();
              meal.addItem(new ChickenBurger());
              meal.addItem(new Cola());
              return meal;
            }
          }
          export { Meal, MealBuilder, VegBurger, Coffee, ChickenBurger, Cola };
          `}</pre>
      </div>
    );
  }
}
export default BuliderPattern;
