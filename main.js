var dog_image = ""
var status1 = ""
var objects = []
function preload(){
    dog_image = loadImage("dog_cat.jpg")
}
function setup(){
    canvas = createCanvas(640,420)
    canvas.center()
    object_detector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "Status:Detecting Objects"
}
function draw(){
    image(dog_image,0,0,640,420)
    if (status1 != ""){
        for (i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML = "Status:The Objects have Been Detected"
            Percent = floor(objects[i].confidence * 100)
            fill("red")
            text(objects[i].label + " "+Percent + "%",objects[i].x+15,objects[i].y+15)
            noFill()
            stroke("Red")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }
    }
   
}
function modelLoaded(){
    console.log("Model is initializing")
    status1 = "true"
    object_detector.detect(dog_image,gotResults)
}
function gotResults(error,results){
    if (error){
        console.log(error)
    }
    console.log(results)
    objects = results;
}