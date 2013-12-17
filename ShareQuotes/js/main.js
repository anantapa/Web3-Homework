// JS

var sW = window.innerWidth;
var posts = [];

console.log(sW);
//var testText = ["test1","test2","test3"];





window.addEventListener('resize', function() {
	sW = window.innerWidth;
	var imgSeq = parseInt(map_range(sW, 200, 1440, 0, 24));
	$('#explode').css({
		'background-image': 'url(\'../ShareQuotes/img/' + imgSeq + '.png\')'
	});
	
	//$('#feed p').html(imgSeq);
	//console.log(testText);
	
	//$('#feed p').html(testText[imgSeq]);
		/*
	
	if(state == 0 && imgSeq == 22){
		
		if(state == 0){
		$('#shareBox').empty();
		state = 1;
		} 
		

	if(state == 1){
		
		var html2 = '<input  id="share" name="share" placeholder="Share a quote.">'
				+'<button class = "myButton" id = "shareText"></button>';
		$('#shareBox').prepend(html2);
		
			
		}
		
		}
*/
		
		
	
	
	
	if(imgSeq == 3){
	
	//$('#feed p').html(posts[1]);
	//$('#feed p').html(imgSeq);
	
	

	
    $('#feed').empty();
	
	//add stuff
	var p = Math.floor((Math.random()*(posts.length)));
	console.log(posts);
	var html = '<article><h2>'+ posts[p].share +'</h2><p>'+ '</p></article>';
    $('#feed').prepend(html);
    
	}
	
	if(imgSeq <= 15){
		$('#shareBox').css("opacity","0");
		$('#resizeToReveal').empty();
		
	} else
	if(imgSeq >= 16){
		$('#shareBox').css("opacity","1");
	}
	
	

	var newFontSize =imgSeq*(0.04) + 'em';
	var newWidth = imgSeq*30 +'px';
	var newMargin = (imgSeq*(-30))/2 +'px';
	$('#feed').css("font-size",newFontSize)
			  .css("width",newWidth)
			  .css("margin-left",newMargin)
			  .css("top","50%");
		
});

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}



  
    


// 0-27
// map sW into 0-27


//store text


$('#shareText').click( function(event){

    // stop form from trying to send & refresh page
    event.preventDefault();

    // create post from form
    var post = {};
   
    post.share = $('#share').val();

    // add post to posts
    posts.push(post);

    console.log('post: ',post);
    console.log('posts: ',posts);

    //displayPost(post);
    storePosts(posts);

});

//display posts ---change to randomly display post

function displayPost(post){
    
    var html = '<article><h2>'+ post.share +'</h2><p>'+ '</p></article>';
    $('#feed').prepend(html);
    
}


//store posts

function storePosts(posts){

    console.log('array: ' + posts);

    // make the array a string
    posts = JSON.stringify(posts);
    console.log('json: ' + posts);

    // store the string
    localStorage.posts = posts;

}


function loadPosts(){

    // check for posts in storage
    if (localStorage.posts) { 

        posts = localStorage.posts;

        // turn string into an array
        posts = JSON.parse(posts);

        // loop thru items in the array
        for( i=0, count=posts.length; i<count; i++ ){

            var post = posts[i]
            console.log( post );
            /* displayPost(post); */
        }
    } else { // nothing in storage?
    
        posts = []; 
    
    }

}

// load posts on page load
loadPosts();





var app = {
    load : function(){
        if (localStorage.posts) { 
            posts = localStorage.posts;
            posts = JSON.parse(posts);
            for( i=0, count=posts.length; i<count; i++ ){
                var post = posts[i]
                displayPost(post);
            }
        }        
    },
    store : function(posts){
        posts = JSON.stringify(posts);
        localStorage.posts = posts;
    }
}

// app.load();
// app.store(posts);

