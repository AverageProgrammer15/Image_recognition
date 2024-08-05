WebCam.set({
    width:350,
    height: 300,
    image_format: "png",
    png_quality:90
});

camera = document.getElementById("camera")
WebCam.attach('#camera')

function take_snapshot(){
    WebCam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src='+data_uri+'"/>"';
    });

    
 };
console.log('m15 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VZFrKp-A5/model.json",modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!')
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error)

    }else{
       console.log(error)
       document.getElementById("result_object_name").innerHTML = results[0].label;
       document.getElementById("results_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}