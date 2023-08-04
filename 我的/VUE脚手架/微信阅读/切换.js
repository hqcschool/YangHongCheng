 // 获取所有的按钮和盒子元素
 var buttons = document.querySelectorAll(".fenls");
 var boxes = document.querySelectorAll(".tab-box");

 // 为每个按钮添加点击事件处理程序
 buttons.forEach(function (button) {
   button.addEventListener("click", function () {
     // 获取要显示的盒子的ID
     var tabId = this.getAttribute("data-tab");

     // 隐藏所有的盒子
     boxes.forEach(function (box) {
       box.classList.remove("active");
     });

     // 显示对应的盒子
     var targetBox = document.getElementById(tabId);
     targetBox.classList.add("active");
   });
 });