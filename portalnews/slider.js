
var images=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUb7D8unSGbdXOoPThp9tgkhrRpE4Hkno5VhmR_ian79pLNLZ3Q',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36wilZmxylNDFR49OXjW5CYRXL9Sf002ijyW_0RNAvsG_6wIC',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40kVG-F2At-e8GiGuN_avG6pweXS6hwlnOldtXCQOL44omGh5BQ'];
//console.log(images)

let i=0;
document.addEventListener('DOMContentLoaded', function(event){
		var rbutt=document.getElementById('rightButton');
		var lbutt=document.getElementById('leftButton')
		var img=document.getElementById('image');
		img.style.border='solid 5px #f30a26';
		
		rbutt.addEventListener('click', function(){
			
			if (images.length<=i){
				i=0;
				
			}
			img.src=images[i], i++;
		})
		var arr =images.reverse();
		//console.log(arr)

		lbutt.addEventListener('click', function(){
			if (arr.length<=i){
				i=0;
				
			}
			img.src=arr[i], i++;
		})


			
});


