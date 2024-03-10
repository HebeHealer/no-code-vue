# no-code-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```


## 插件化机制


无代码平台

灵活+易用 就不会简单


组件设计和封装

插件化机制：
    插件底座： 实现插件的协议、生命周期

    例如：

```
class Calculator {
    plugins = [];
    constructor(initial) {
        this.num = initial
    }

    use(plugin) {
        this.plugins.push(plugin);
        this[plugin.name] = plugin.calculate.bind(this);
    }

    result() {
        return this.num;
    }
}

// 插件声明
interface Plugin {
    name: string;
    calculate(num: number) => this;
}
// 插件实现
class AddPlugin implements Plugin {
    name: 'add',
    calculate(num) {
        this.num = this.num + num;
        return this;
    }
}

const myCalculator = new Calculator(5);
// 插件安装
myCalculator.use(new AddPlugin());

myCalculator.add(5).result();
```
// h 运用以及如何将 Vue 组件策略渲染外部组件
/**
  <script>
  import {h} from "vue"
  export default {
    render() {
        return h('h2',{
            class:'text'
        },'hello word')
    },
  };
  </script>
 */

 插件化、策略模式实现组件内容，vee-validate