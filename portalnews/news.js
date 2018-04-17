document.addEventListener('DOMContentLoaded', function(event) {
   
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=b81d46624f87401ab16b55076a8c1d66', false);

xhr.send();

if (xhr.status != 200) {

  alert( xhr.status + ': ' + xhr.statusText );

} else { 

 var news1 = JSON.parse (xhr.responseText);
 var articles = news1.articles;
  console.log (news1.articles[0]);
 var content = document.getElementById('news-content')
 for (i=0; i < articles.length; i++) {
  var statia=document.createElement('DIV')
  var title=document.createElement('H1');
  var image=document.createElement('IMG');
  	  title.innerHTML=articles[i].title;
	  statia.appendChild(title);
	  content.appendChild(statia);
	  
	
 }
}


});