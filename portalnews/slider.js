
var images=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo54wHJkuYDIs_dNFXLjsfPPn8WKI6SIHL4Z1ja-54yEVFnGlnOQ',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUAqZNQm35OR0UwAx-iuW5J6RPeYLvM6o4DCtBB4ias_HBSVyog',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyAWQHScDPh7wYxmf0LOku477u1FlkKmTDmEUwhN1rreX9GYUqQ'];
console.log(images)

let i=0;
document.addEventListener('DOMContentLoaded', function(event){
		var rbutt=document.getElementById('rightButton');
		var lbutt=document.getElementById('leftButton')
		var img=document.getElementById('image');
		var arr =images.reverse();
		rbutt.addEventListener('click', function(){
			
			
			if (images.length<=i){
				i=0;
				
			}
			img.src=images[i], i++;
		})
		
		console.log(arr)

		lbutt.addEventListener('click', function(){
			if (arr.length<=i){
				i=0;
				
			}
			img.src=arr[i], i++;
		})


			
});


