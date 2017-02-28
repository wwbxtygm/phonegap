
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady() {
	document.getElementById("camera").onclick=function(){
		navigator.camera.getPicture(onPhotoURISuccess, fail, {
			quality : 75,
			destinationType : Camera.DestinationType.FILE_URI,
			sourceType : Camera.PictureSourceType.CAMERA,
			allowEdit : true,
			encodingType : Camera.EncodingType.JPEG,
			targetWidth : 100,
			targetHeight : 100
		});
	}
	
}
// 显示图片
   function onPhotoURISuccess(imageURI) {
	
		// 取消注释以查看图片文件的URI
		// console.log(imageURI);
		// 获取图片句柄
		var largeImage = document.getElementById('largeImage');
		 
		// 取消隐藏的图像元素
		largeImage.style.display = 'block';
	
		// 显示拍摄的照片
		// 使用内嵌CSS规则来缩放图片
		largeImage.src = imageURI;
	}
   function fail(message){
   	console.log(message);
   }
