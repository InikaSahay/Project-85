canvas=document.getElementById("Canvas1");

ctx=canvas.getContext("2d");
loat_img_array=["area.jpg","area1.jpeg","area2.jpeg","area.jpeg"];
random_numuber=Math.floor(Math.random()*4);
console.log(random_numuber);
background_Image=loat_img_array[random_numuber];
car_image="car.jpeg";
car_width=300;
car_height=90;
car_x_position=10;
car_y_position=10;

function add(){
    background_img=new Image();
    background_img.onload=upload_bakground;
    background_img.src=background_Image;
    car_img=new Image();
    car_img.onload=upload_car;
    car_img.src=car_image;    
}

function upload_bakground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);    
}

function upload_car(){
    ctx.drawImage(car_img,car_x_position,car_y_position,car_width,car_height);
}

window.addEventListener("keydown",keyDown);

function keyDown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
        console.log("up");        
    }
    if(keypressed=="37"){
        left();
        console.log("left");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }
    if(keypressed=="39"){
        right();
        console.log("right");
    }
}
function up(){
    if(car_y_position >=0){
        car_y_position-=10;
        console.log("When up arrowkey is pressed x="+car_x_position+" y="+car_y_position);
        upload_bakground(); 
        upload_car();   
    }
}
function down(){
    if(car_y_position <=500){
        car_y_position+=10;
        console.log("When down arrowkey is pressed x="+car_x_position+" y="+car_y_position);
        upload_bakground();   
        upload_car(); 
    }
}
function left(){
    if(car_x_position >=0){
        car_x_position-=10;
        console.log("When left arrowkey is pressed x="+car_x_position+" y="+car_x_position);
        upload_bakground();
        upload_car();
    }
}
function right(){
    if(car_x_position <=700){
        car_x_position+=10;
        console.log("When right arrowkey is pressed x="+car_x_position+" y="+car_x_position);
        upload_bakground();
        upload_car();
    }
}
