// useful to have them as global variables
var canvas, ctx;

window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#myCanvas");
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // ready to go !
    // filled rectangle
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 30, 30);
  
    // wireframe rectangle
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 4;
    ctx.strokeRect(100, 40, 40, 40);
  
    // fill circle, will use current ctx.fillStyle
    ctx.beginPath();
    ctx.arc(60, 60, 10, 0, 2*Math.PI);
    ctx.fill();
  
    // some text
    ctx.fillStyle = "purple";
    ctx.font = "20px Arial";
    ctx.fillText("Hello!", 60, 20);
}

/* 
Explanations:

1. We use a function (line 4) called after the page is loaded (we say "after the DOM is ready"), 
so that the querySelector at line 6 will return the canvas.  If the page was not completely loaded 
and if this code had been run before it had finished loading, the canvas value would have been "undefined".

2. Once we have the canvas, we request a "graphic context" (line 8). This is a variable for 2D or 3D  drawing 
on a canvas (in our case: 2D!) that we will use for drawing or setting colors, line widths, text fonts, etc.

3. Then we can draw. Here we show only a few things you can do with the canvas API, but believe me, you can 
do much more (draw images, gradients, textures, etc.)!

4. At line 15, we draw a filled rectangle. Parameters are the x and y coordinates of the top left corner 
(x goes to the right, y to the bottom of your screen), and the width and the height of the rectangle. 
At line 14, we used the fillStyle property of the context to set the color of filled shapes. This means: "now,
all filled shapes you are going to draw will be in red!". It's like a global setting.

5. Lines 17-20 draw a green wireframe rectangle, with a line width equal to 4 pixels. Notice the use of 
"stroke" instead of "fill" in the property name strokeStyle/fillStyle and in the context method for drawing
a rectangle strokeRect/fillRect.

6. Lines 23-25 draw a filled circle. The syntax is a bit different as circles are parts of a "path" 
(see the HTML5 fundamentals course, we explain the concept of "path" in the canvas API). Just keep in mind 
for now that before drawing a circle you need to call beginPath(). The call to arc(x, y, radius, start_angle, 
end_angle) does not draw the circle, it defines it. The next instruction ctx.fill() at line 25 will draw all 
shapes that have been defined since a new path began, as filled shapes. Calling ctx.stroke() here, instead of 
ctx.fill() would have drawn a wireframe circle instead of a filled one. Also note that the filled circle 
is red even if we did not specify the color. Remember that we set ctx.fillStyle = 'red' at line 14. Unless 
we change this, all filled shapes will be red.

7. Lines 28-30 draw a filled text. The call to filltext(message, x, y) draws a filled text at the x,y 
position; this time in purple as we called ctx.fillStyle='purple' before calling fillText(...) */