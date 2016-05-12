# node-forum
express node forum bootstrap

- babel 设置
**babel src -d target**

- 更新project-core模块
npm install project-core@latest --save
 
  - method/user.js 
  ### async function 
  不需要callback返回数据，通过promise的then和catch拿到对象
  - mongoose对象 promise 也可以callback使用
  callback不太容易理解，通过async可以取消callback， 直接return
  需要异步的加 await
  
- 索引
  查询的时候根据某列名进行搜索
- trim: true 自动去掉收尾空白字符
  
  