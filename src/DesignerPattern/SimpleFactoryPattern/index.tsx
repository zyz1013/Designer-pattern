import React from "react";

enum GunType {
  AK47,
  M416
}

interface Shootable {
  Shoot(): void;
}

abstract class Gun implements Shootable {
  public abstract Shoot(): void;
}

class AK47 extends Gun {
  public Shoot() {
    console.log("Ak开枪");
  }
}
class M416 extends Gun {
  public Shoot() {
    console.log("M4开枪");
  }
}

class GunFactory {
  public static createGun(type: GunType) {
    switch (type) {
      case GunType.AK47:
        return new AK47();
      case GunType.M416:
        return new M416();
      default:
        throw Error("不支持");
    }
  }
}

class SimpleFactoryPattern extends React.Component {
  public componentDidMount() {
    console.log("====简单工厂模式====");
    GunFactory.createGun(GunType.AK47).Shoot();
    console.log("====简单工厂模式====");
    GunFactory.createGun(GunType.M416).Shoot();
  }
  render() {
    return (
      <pre>
        {`
        enum GunType {
          AK47,
          M416
        }
        
        interface Shootable {
          Shoot(): void;
        }
        
        abstract class Gun implements Shootable {
          public abstract Shoot(): void;
        }
        
        class AK47 extends Gun {
          public Shoot() {
            console.log("====简单工厂模式====");
            console.log("我是Ak47");
          }
        }
        class M416 extends Gun {
          public Shoot() {
            console.log("====简单工厂模式====");
            console.log("我是M416");
          }
        }
        
        class GunFactory {
          public static createGun(type: GunType) {
            switch (type) {
              case GunType.AK47:
                return new AK47();
              case GunType.M416:
                return new M416();
              default:
                throw Error("不支持");
            }
          }
        }
        GunFactory.createGun(GunType.AK47).Shoot();
        GunFactory.createGun(GunType.M416).Shoot();
        `}
      </pre>
    );
  }
}
export default SimpleFactoryPattern;
