

document.addEventListener('DOMContentLoaded',function(){
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=73fde60a9149415caf70ef85ed0f6c5b', false);
    xhr.send();
    if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
    var content = document.getElementById('news-content')
    var DIV = document.createElement('div');
    
    let news = JSON.parse(xhr.responseText);
    console.log(news);
    for( i = 0;i < news.articles.length;i++){
        var img = document.createElement('img');
		
		img.src = news.articles[i].urlToImage;
        DIV.appendChild(img);
        
        var title = document.createElement('h1');
        
        
        title.innerHTML+= news.articles[i].title +"</br>";
        DIV.appendChild(title);
        var a = document.createElement('a');
        
        a.innerHTML+= news.articles[i].url +"</br>";
        DIV.appendChild(a);
        var descript = document.createElement('p');
        
        descript.innerHTML+= news.articles[i].description +"</br>";
        var publish= document.createElement('span');
        DIV.appendChild(publish);
        publish.innerHTML+= news.articles[i].publish +"</br>";
        var author= document.createElement('h4');
        DIV.appendChild(author);
        content.appendChild(DIV);
        author.innerHTML+= news.articles[i].author +"</br>";


    }
    
}

});