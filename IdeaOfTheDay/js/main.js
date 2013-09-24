


var color;
var pickRed = $('#PaintBucketRed');
var pickBlue = $('#PaintBucketBlue');
var pickGreen = $('#PaintBucketGreen');
var pickOrange = $('#PaintBucketOrange');
var pickPink = $('#PaintBucketPink');

var clickCanvas = $('#DropCanvas');
var dropDrops = $('#drops');
var drops = [];
var mouseX, mouseY;
var WhatToDo = $('#WhatToDo');


var myQuotes = [];

myQuotes[0] = "Ice skate in Central Park";
myQuotes[1] = "Movies at Conrad Hotel";
myQuotes[2] = "Mister Softy!!!";
myQuotes[3] = "Soju in Korian Town";
myQuotes[4] = "Long Island Beach";
myQuotes[5] = "Skydiving!";
myQuotes[6] = "Dancing Class";
myQuotes[7] = "Stay in and watch movies";


function randomNewQuotes(){
var randomQuotes = Math.floor(Math.random()*myQuotes.length);
return randomQuotes;   
}



function randomPercent(){    
    var p = Math.floor((Math.random()*60));
    return p + '%';    
};

function textRandomPercent(){    
    var p = Math.floor((Math.random()*600));
    return p + '%';    
};


pickRed.click(function(){
  color = 'Red is picked.';
  console.log(color);
      $('#drops').css({
  '-webkit-filter':'hue-rotate(80deg)'
  });
});
pickBlue.click(function(){
  color = 'Blue is picked.';
  console.log(color);
     $('#drops').css({
  '-webkit-filter':'hue-rotate(0deg)'
  });
});
pickGreen.click(function(){
  color = 'Green is picked.';
  console.log(color);
    $('#drops').css({
  '-webkit-filter':'hue-rotate(280deg)'
  });
});
pickOrange.click(function(){
  color = 'Orange is picked.';
  console.log(color);
  $('#drops').css({
  '-webkit-filter':'hue-rotate(130deg)'
  });
});
pickPink.click(function(){
  color = 'Pink is picked.';
  console.log(color);
  $('#drops').css({
  	'-webkit-filter': 'hue-rotate(60deg)'
  });
  
});

/*clickCanvas.click(function(){
 $('#drops').css({
  	'opacity': '0.8'
  });
  
  Math.floor((Math.random()*100)+30);

});*/

$(document).mousemove(function(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
	console.log(mouseX + ', ' + mouseY);
});

$('#DropCanvas').click(function() {
var x = randomPercent();
var y = randomNewQuotes();
var z = textRandomPercent();
var positionLeft = mouseX-170;
var positionTop = mouseY-170;
    
	console.log('Canvas is clicked.');
	dropDrops
	
	.clone()
	.animate({
		top: positionTop,
		left: positionLeft,
		opacity: 0.6
	})
	.css('width',x)
	.appendTo('body');
	
	WhatToDo
	.clone()
	.animate({
	    top: mouseY+100,
		left: mouseX,
		opacity: 1
	})
	.css('font-size',z)
	.html(myQuotes[y])
	.appendTo('body');
});

// document.getElementById('#DropCanvas').onclick(){
// 
// var makeDrop = dropDrops.clone();
// makeDrop.attr('id','drops')
//             .css('left',mouseX)
//             .css('top',mouseY)
//             .css('opacity','0.8');
// }