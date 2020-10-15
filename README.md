# EchartSimple

> author : siroi
>
> time : 2020年10月15日16:02:54



# 开发目的

1. 本来是硕士期间做的搬砖项目用到echarts，实现简单的数据可视化
2. 方便后人搬砖维护

# 介绍

1. 基于`echarts.js`的二次封装。

2. 适用于短期开发，不对颜色有追求的项目

   

# 使用方法

## 1. 引入js

### 1.1. 在线CDN(白嫖)

```javascript
<script src='https://cdn.jsdelivr.net/gh/Gao-pw/EchartSimple@1.0/EchartSimple.js'></script>
```

### 1.2 本地引入js

```
不赘述了....
```

## 2. 使用方法

```js
var obj = new EChartSimple({参数});
```

##### 参数

遵循`ES6标准`语法，参数如下

1. `title`：主标题 （可选）
2. `subtitle`：小标题 （可选）
3. `idName`：所选区域类 （必选）
4. `dataName`：图例标题 （必选）
5. `dataValue`：对应值 （必选）
6. `type`：类型（可选，默认柱状图）

##### 示例

```js
let dataName = ['211人数','985人数'];
let dataValue = [100,200];

var obj = new EChartSimple({
	title:'生源统计',
	subtitle:'数据库统计',
	idName:'chartSimple',
	dataName:dataName,
	dataValue:dataValue,
	type:'bar',
});

obj.init();//该方法会进行参数自检，适用于生产模式，当自检通过后注释

obj.drewChart();//进行画图
```









