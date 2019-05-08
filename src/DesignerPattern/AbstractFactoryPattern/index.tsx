import React from "react";

interface Shootable {
  Shoot(): void;
}

abstract class Gun implements Shootable {
  // private _bullet: Bullet;
  public abstract Shoot(): void;
  public addBullet(bullet: Bullet) {
    console.log("换子弹");
  }
}

abstract class Bullet {
  public abstract name: string;
}
class AkBullet {
  public name: string = "ak bullet";
}

class M4Bullet {
  public name: string = "m4 bullet";
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

abstract class ArmFactory {
  public abstract createGun(): Gun;
  public abstract createBullet(): Bullet;
}

class AK47Factory extends ArmFactory {
  public createGun(): Gun {
    console.log("====抽象工厂模式====");
    let gun = new AK47();
    this.clean(gun);
    this.applyTungOil(gun);
    return gun;
  }
  private clean(gun: Gun) {
    console.log("Ak:清洗ak");
  }
  private applyTungOil(gun: Gun) {
    console.log("Ak:涂上桐油");
  }
  public createBullet(): Bullet {
    console.log("生产子弹");
    return new AkBullet();
  }
}

class M416Factory extends ArmFactory {
  public createGun(): Gun {
    console.log("====抽象工厂模式====");
    let gun = new M416();
    this.clean(gun);
    this.sprayPaint(gun);
    return gun;
  }
  private clean(gun: Gun) {
    console.log("M4:清洗m416");
  }
  private sprayPaint(gun: Gun) {
    console.log("M4:涂上土豪金");
  }
  public createBullet(): Bullet {
    console.log("生产子弹");
    return new M4Bullet();
  }
}

function shoot(gun: Gun, bullet: Bullet) {
  gun.addBullet(bullet);
  gun.Shoot();
}

class AbstractFactoryPattern extends React.Component {
  public componentDidMount() {
    shoot(new AK47Factory().createGun(), new AK47Factory().createBullet());
    shoot(new M416Factory().createGun(), new M416Factory().createBullet());
  }
  public render() {
    return (
      <div>
        <pre>
          {`
            interface Shootable {
              Shoot(): void;
            }
            
            abstract class Gun implements Shootable {
              // private _bullet: Bullet;
              public abstract Shoot(): void;
              public addBullet(bullet: Bullet) {
                // this._bullet = bullet;
              }
            }
            
            abstract class Bullet {
              public abstract name: string;
            }
            class AkBullet {
              public name: string = "ak bullet";
            }
            
            class M4Bullet {
              public name: string = "m4 bullet";
            }
            
            class AK47 extends Gun {
              public Shoot() {
                console.log("====抽象工厂模式====");
                console.log("我是Ak47");
              }
            }
            class M416 extends Gun {
              public Shoot() {
                console.log("====抽象工厂模式====");
                console.log("我是M416");
              }
            }
            
            abstract class ArmFactory {
              public abstract createGun(): Gun;
              public abstract createBullet(): Bullet;
            }
            
            class AK47Factory extends ArmFactory {
              public createGun(): Gun {
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
              public createBullet(): Bullet {
                return new AkBullet();
              }
            }
            
            class M416Factory extends ArmFactory {
              public createGun(): Gun {
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
              public createBullet(): Bullet {
                return new M4Bullet();
              }
            }
            
            function shoot(gun: Gun, bullet: Bullet) {
              gun.addBullet(bullet);
              gun.Shoot();
            }
            shoot(new AK47Factory().createGun(), new AK47Factory().createBullet());
            shoot(new M416Factory().createGun(), new M416Factory().createBullet());
            `}
        </pre>
      </div>
    );
  }
}
export default AbstractFactoryPattern;
