import React from "react";

class ClassA {} // serverA返回的数据结构
class ClassB {} // serverB返回的数据结构

abstract class RequesterBase<T> {
  public constructor(private url: string) {
    console.log(this.url);
  }

  public requestData(): T {
    return this.handleResponse();
  }
  protected abstract handleResponse(): T;
}

class RequestForServerA extends RequesterBase<ClassA> {
  protected handleResponse(): ClassA {
    console.log("handle response for Server A");
    return new ClassA();
  }
}

class RequestForServerB extends RequesterBase<ClassB> {
  protected handleResponse(): ClassB {
    console.log("handle response for Server B");
    return new ClassB();
  }
}

class TemplateMethodPattern extends React.PureComponent<
  {},
  { showMore: boolean }
> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      showMore: false
    };
  }
  public componentDidMount() {
    console.log("============模板方法模式================");
    let requesterA: RequesterBase<ClassA> = new RequestForServerA(
      "server A url"
    );
    let requesterB: RequesterBase<ClassB> = new RequestForServerB(
      "server B url"
    );
    requesterA.requestData();
    requesterB.requestData();
  }
  private showMore = () => {
    this.setState({
      showMore: true
    });
  };
  public render() {
    const { showMore } = this.state;
    return (
      <div>
        <div style={{ display: showMore ? "block" : "none" }}>
          多态（Polymorphism）按字面的意思就是“多种状态”。在面向对象语言中，接口的多种不同的实现方式即为多态。引用Charlie
          Calverts对多态的描述——多态性是允许你将父对象设置成为一个或更多的他的子对象相等的技术，赋值之后，父对象就可以根据当前赋值给它的子对象的特性以不同的方式运作（摘自“Delphi4
          编程技术内幕”）。简单的说，就是一句话：允许将子类类型的指针赋值给父类类型的指针。多态性在Object
          Pascal和C++中都是通过虚函数实现的。
        </div>
        <br />
        <p>
          特点：通过
          <span onClick={this.showMore} style={{ cursor: "pointer" }}>
            多态
          </span>
          来实现在运行时使用不同的算法或逻辑，通常有一个整体架子，通过抽象方法或虚方法来把细节代码延迟到子类实现
        </p>
        <p>
          用处：当多个类似功能的类有很多相同结构或代码时，可以抽象出整体架子时可以考虑模板方法。
        </p>
        <p>
          注意：与策略模式的异同：同样是细节部分交出去，不同在于策略是对象行为，采用的是组合的方式，而模板方法是类行为，采用的是继承。
        </p>
        <p>
          下面用TypeScript简单实现一个模板方法模式：
          比方说发送http请求的代码，需要向两台不同的server(A和B)发送请求，两台server除了url不同，回来的数据格式也不一样，但由于都是http请求，主体架子是一样的，所以可以用模板方法来实现下
        </p>
        <pre>
          {`
                          
              class ClassA {} // serverA返回的数据结构
              class ClassB {} // serverB返回的数据结构

              abstract class RequesterBase<T> {
                public constructor(private url: string) {}

                public requestData(): T {
                  return this.handleResponse();
                }

                protected abstract handleResponse(): T;
              }

              class RequestForServerA extends RequesterBase<ClassA> {
                protected handleResponse(): ClassA {
                  console.log("handle response for Server A");
                  return new ClassA();
                }
              }

              class RequestForServerB extends RequesterBase<ClassB> {
                protected handleResponse(): ClassB {
                  console.log("handle response for Server B");
                  return new ClassB();
                }
              }

              let requesterA: RequesterBase<ClassA> = new RequestForServerA("server A url");
              let requesterB: RequesterBase<ClassB> = new RequestForServerB("server B url");
              requesterA.requestData();
              requesterB.requestData();


              ========================项目中应用====================
              export default async <D = any>(url: string, init?: RequestInit): Promise<D> => {
                try {
                  const myInit: RequestInit = ObjectUtils.getOrDefault(init, {});
                  const myHeaders: any = ObjectUtils.getOrDefault(myInit.headers, {});
                  myHeaders.userId = ObjectUtils.getOrDefault(myHeaders.userId, userId);
                  myInit.headers = myHeaders;
                  myInit.credentials = ObjectUtils.getOrDefault(myInit.credentials, "include");
                  const response = await fetch(url, myInit);
                  if (response.ok) {
                    const json = await response.json();
                    const result = plainToClass<RestResponse<any>, object>(RestResponse, json);
                    // if ((result.code === "0" || result.code === 0) && !ObjectUtils.isNullOrUndefined(result.data)) {
                    //   return new Promise<D>((resolve, reject) => resolve(result.data));
                    // }
                    if (result.code === "0" || result.code === 0) {
                      return new Promise<D>((resolve, reject) => resolve(result.data));
                    }
                    return new Promise<D>((resolve, reject) => reject(result.message));
                  }
                  return new Promise<D>((resolve, reject) => reject(response.statusText));
                } catch (error) {
                  return new Promise<D>((resolve, reject) => reject(error));
                }
              };
              
  
  
              public static getIssuerInfo(issuerId: number): Promise<BondComInfoDoc> {
                return apiFetch<BondComInfoDoc>(\`\${apiUrl}/bond-web/api/bond/issuers/\${issuerId}\`\);
              }
              
              
              public static getBondUniCodeList(params: GetBondUniCodeListParams): Promise<number[]> {
                const { query, limit, type } = params;
                return apiFetch(
                  \`\${apiUrl}/bond-web/api/bond/entity/quote/search?userId=\${userId}&query=\${query}&limit=\${limit || 200}&type=\${
                    typeof type === "undefined" ? 1 : type
                  }\`\
                );
              }

          `}
        </pre>
      </div>
    );
  }
}
export default TemplateMethodPattern;
