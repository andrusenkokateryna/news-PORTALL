
document.addEventListener('DOMContentLoaded',function(){
 var date = new Date(new Date().getTime() + 10 * 1000);
 let cookie = document.cookie = "name=value; path=/; expires=" + date.toUTCString();
console.log(cookie)
 /*if(cookie.length > 0){
  alert('yes')
 }
 else{
  alert('no')
 }*/
 

document.cookie='vasya'
setInterval(function(){
if(document.cookie==""){
	console.log('не показывать рекламу')
}else{
	console.log('показать рекламу')
}
},3000);
})