var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var width=screen.width;
    var newwidth=screen.width-70;
    var newheight=screen.height-300;
    if(width<992){
        document.getElementById("mycanvas").width=newwidth;
        document.getElementById("mycanvas").height=newheight;
        document.body.style.overflow="hidden";
    }
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchstart", mytouchstart);
    
    function mytouchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width = document.getElementById("width").value;
        //Addictonal Activity ends
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY=canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", mytouchmove);
    function mytouchmove(e)
    {
        console.log("my_touchMove");
         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
