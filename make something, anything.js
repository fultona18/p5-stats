var img1;
var img2;
var img3;
//This is where I put the setup all of the pictures (identifying the variable) of my statistic
function setup() {
  createCanvas(400,400);
  img1 = createImg('http://cliparting.com/wp-content/uploads/2017/05/Football-field-clipart-2.jpg');
  img1.hide();
	//This is where I put the "background" of my statistic
   img2 = createImg('https://www.patsfans.com/patriots/blog/wp-content/uploads/2015/10/2015-Week-4-Julian-Edelman-Catch-250x250.jpg');
  img2.hide();
	//This is where I put the "Tom Brady part" of my statistic
		img3 = createImg('http://s3.amazonaws.com/s3.weei.com/s3fs-public/456713272-tom-brady-of-the-new-england-patriots-passes-gettyimages_4.jpg');
  img3.hide();	
	//This is where I put the "Edleman part" of my statistic
background(100);
}

function draw() {
  image(img1, 0, 0, width/1, height/1); 
image(img2, 200, 100, width/2.5, height/2.5); 
	image(img3, 10, 100, width/2.5, height/2.5);
	//This is where I put sizes and locations of my  imagages in my statistic

	textSize(21)
text("Tom Brady Completes 67% of his passes", 10, 370)
fill (300, 17, 13)
	//This is where I put the "67%" of my statistic
	
}
