import React from "react";

interface Shootable {
  Shoot(): void;
}

abstract class Gun implements Shootable {
  public abstract Shoot(): void;
}

class AK47 extends Gun {
  public Shoot() {
    console.log("开枪");
  }
}
class M416 extends Gun {
  public Shoot() {
    console.log("开枪");
  }
}

abstract class GunFactory {
  public abstract create(): Gun;
}

class AK47Factory extends GunFactory {
  public create(): Gun {
    console.log("====工厂方法模式====");
    let gun = new AK47();
    this.clean(gun);
    this.applyTungOil(gun);
    return gun;
  }
  private clean(gun: Gun) {
    console.log("清洗ak");
  }
  private applyTungOil(gun: Gun) {
    console.log("涂上桐油");
  }
}

class M416Factory extends GunFactory {
  public create(): Gun {
    console.log("====工厂方法模式====");
    let gun = new M416();
    this.clean(gun);
    this.sprayPaint(gun);
    return gun;
  }
  private clean(gun: Gun) {
    console.log("清洗m416");
  }
  private sprayPaint(gun: Gun) {
    console.log("涂上土豪金");
  }
}

class FactoryMethodPattern extends React.Component {
  public componentDidMount() {
    const ak47 = new AK47Factory().create();
    ak47.Shoot();
    const m416 = new M416Factory().create();
    m416.Shoot();
  }
  public render() {
    return (
      <div>
        工厂方法模式定义一个用于创建对象的接口，让子类决定实例化哪一个类。工厂方法使一个类的实例化延迟到其子类。
        <pre>
          {`
            
            interface Shootable {
              Shoot(): void;
            }
            
            abstract class Gun implements Shootable {
              public abstract Shoot(): void;
            }
            
            class AK47 extends Gun {
              public Shoot() {
                console.log("====工厂方法模式====");
                console.log("我是Ak47");
              }
            }
            class M416 extends Gun {
              public Shoot() {
                console.log("====工厂方法模式====");
                console.log("我是M416");
              }
            }
            
            abstract class GunFactory {
              public abstract create(): Gun;
            }
            
            class AK47Factory extends GunFactory {
              public create(): Gun {
                let gun = new AK47();
                this.clean(gun);
                this.applyTungOil(gun);
                return gun;
              }
              private clean(gun: Gun) {
                console.log("清洗ak");
              }
              private applyTungOil(gun: Gun) {
                console.log("涂上桐油");
              }
            }
            
            class M416Factory extends GunFactory {
              public create(): Gun {
                let gun = new M416();
                this.clean(gun);
                this.sprayPaint(gun);
                return gun;
              }
              private clean(gun: Gun) {
                console.log("清洗m416");
              }
              private sprayPaint(gun: Gun) {
                console.log("涂上土豪金");
              }
            }

            const ak47 = new AK47Factory().create();
            ak47.Shoot();
            const m416 = new M416Factory().create();
            m416.Shoot();
            `}
        </pre>
      </div>
    );
  }
}
export default FactoryMethodPattern;
