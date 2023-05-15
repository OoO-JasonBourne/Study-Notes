## 属性
background： 
cover: 背景图像等比缩放
contain: 背景图像等比缩放



## 位置
### 居中
#### div中的div居中
display:flex; 与 float: right; 冲突

.div {
    display: flex;  // 弹性布局
    align-items: center;    // 垂直居中
    justify-content: center;    // 水平居中
}

.div1 {
    text-align: center; // 文字居中
}

.div2 {
    margin-left: auto;  // 靠右
}
#### div中 两个 span 上下放置
<!-- html -->
<div>
<span></span>
<span></span>
</div>
<!-- css -->
.div {
    display: flex;
    flex-direction: column;
    align-items: 10px;  <!-- //居中 -->
}

### 简写
#### font
顺序如下：
font-style
font-variant
font-weight
font-size/line-height
font-family
##### font: 400 16px/40px '微软雅黑';

#### background
顺序如下：
background-color
background-position
background-size
background-repeat
background-origin
background-clip
background-attachment
background-image
##### background: #00FF00 url(bgimage.gif) no-repeat fixed top；
##### background: url("path") no-repeat center/cover；

