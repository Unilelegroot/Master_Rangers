var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(get_image, function(Img){
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);
	});
	// para enviar imagens
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		new_image('rr1.png');
		console.log("r");
		// enviar ranger escarlate
	}
	if(keyPressed == '86')
	{
		new_image('gr.png');
		console.log("g");
		blockX = 200;
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		new_image('yr.png');
		console.log("y");
		blockX =350;
		// enviar ranger amarelo
	}
	if(keyPressed == '82')
	{
		new_image('pr.png');
		console.log("p");
		blockX = 600;
		// enviar ranger rosa
	}
	if(keyPressed == '73')
	{
		new_image('br.png');
		console.log("b");
		blockX = 700;
	// enviar ranger índigo
	}
	
}

