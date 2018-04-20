document.addEventListener('DOMContentLoaded',function(){

 var date = new Date(new Date().getTime() + 10 * 1000);
 let cookie = document.cookie = "name=value; path=/; expires=" + date.toUTCString();

 console.log(cookie)


setInterval ( function() {


 if(document.cookie.match){
 console.log('yes')
 }
 else{
 console.log('no', document.cookie, "no")
 }


}, 3000);


})
