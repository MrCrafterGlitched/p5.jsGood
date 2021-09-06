function preload() {
    
}
function setup() {
    canvas=createCanvas(720,340)
    canvas.position(100,200)
    video=createCapture()
    video.hide()
}
function draw() {
    image(video,0,0,720,340)
    tint("Blue")
}
function take_snapshot() {
save("Image1Neat.png")
}