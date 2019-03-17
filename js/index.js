//雪花飘落函数
var sf = new Snowflakes({
          color: "#ffffff",
          count: 75,
          minOpacity: 0.2,
          maxOpacity: 0.6
        });

   var myArray=new Array();
  
   	var oForm = document.getElementById('Form');
   	var oInput = oForm.getElementsByTagName('input');
   	var oBtn = document.getElementById('btn')
   	oBtn.onclick = function(){
   			if (oInput[0].value==''|| oInput[1].value==''|| oInput[2].value=='') {
   		alert('还没有输入完内容哟')
   	} else{
   		alert('你四不四傻，这你也信？！！')
   	}
   	}
   	
   	console.log(Float32Array)
   	
    // 背景图切换	
   !function(){
   	clearInterval(bg);
		var	bg=	setInterval(function(){
			console.log(1)
			document.body.style.background = "url(https://img.infinitynewtab.com/wallpaper/"+Math.floor(Math.random()*(1001))+".jpg) no-repeat";
					//解决某些图片无法百分百显示
			document.body.style.backgroundSize ="cover"
				
				},4000)
   }()
