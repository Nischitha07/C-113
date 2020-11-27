function preload()
{
    
}
function setup()
{
   canvas = createCanvas(500 , 400);
   canvas.position(300 , 100);
   video = createCapture(VIDEO);
   video.hide();
   color1 = " " ;
}
function draw()
{
    image(video , 0 , 0 , 500 , 400);
    tint(color1);

}
function take_snapshot()
{
    save('Nischitha_filter.png');
}
function apply_filter()
{
    color1 = document.getElementById("color_input").value;

}