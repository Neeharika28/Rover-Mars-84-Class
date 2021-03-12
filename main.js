canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;
bg_image="mars.jpg";
rove_image="rover.png";

function add(){
background_image=new Image();
background_image.onload=uploadBackground;
background_image.src=bg_image;

rover_image=new Image();
rover_image.onload=uploadRover;
rover_image.src=rove_image;
}

function uploadBackground(){
ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_image,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keypressed=e.keyCode;
    if (keypressed=="37"){
        left();
        console.log("left");}
    
        if(keypressed=="38"){
            up();
            console.log("up");
        }

        if(keypressed=="39"){
            right();
            console.log("right");
        }        

        if(keypressed=="40"){
            down();
            console.log("down");
        }
}

function up(){
if (rover_y >=0){
    rover_y-=10;
    console.log("roverx: "+rover_x+" rovery: "+rover_y);
    uploadBackground();
    uploadRover();
}
}

function down(){
    if(rover_y <=500){
        rover_y+=10;
        console.log("roverx: "+rover_x+" rovery: "+rover_y)
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if (rover_x <=700) {
        rover_x+=10;
        console.log("roverx: "+rover_x+"rovery: "+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x-=10;
        console.log("roverx: "+rover_x+"rovery: "+rover_y);
        uploadBackground();
        uploadRover();
    }
}