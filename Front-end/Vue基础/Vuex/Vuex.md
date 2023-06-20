  ## VUEX

Vuex 是实现组件全局状态（数据）管理的一种机制，可以方便实现组件之间数据的共享。

### 优势

1. vuex 集中管基共享数据，易于开发和维护
2. 高效实现数据共享，提高开发效率
3. 响应式存储，实时保持数据与页面同步

#### 配置 Vuex

### 安装 vuex

npm install vuex -- save

#### 导入

import Vuex from 'vuex'

#### 创建 store 对象

const store = new Vuex.Store({

<!-- state存放全局共享数据 -->

state: {
count: 0
}
})

#### 挂载到 vue 实例中

new Vue ({
el: "app",
render: h => h(app),
router,
store
})

### 核心概念

#### State

State 提供唯一的公共数据源，所有共享的数据统一放在 Store 中的 state

#### Mutation

Mutation 用于变更 Store 中的数据，
只有 mutation 有权利修改 state 中数据

方式一： this.$store.commit()
方式二： ...mapMutations([""]),

mutation 只能处理同步操作，异步任务使用 action

#### Action

Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作
(action 要通过 mutation 访问 state 中的数据)

##### 注册 action

actions: {
increment (context) {
context.commit('increment')
}
}

##### dispatch 触发 mutation 中的函数事件

方式一： this.$store.dispatch("")
方式一： ...mapActions([""])

#### Getter

Getter 用于对 Store 中的数据进行加工处理形成新的数据

1. Getter 对于 Store 中的数据进行加工处理形成新的数据，类似 Vue 的计算属性
2. Store 中数据发生变化，Getter 中数据也会发生相应变化

注意： getter 不会改变 state 中的数据，只是起包装作用

方式一： this.$store.getters.名称
方式二： ...mapGetters([""])
