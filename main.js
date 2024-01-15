Webcam.set({
    width:340,
    height:263,
    image_format: 'png',
    png_quality:90
  });
camera= document.getElementById("camera");
Webcam.attach('#camera');
  
function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("camera_result").innerHTML='<img id="captured_image" width="350" height="266" src="'+data_uri+'"/>';
    })
}

console.log("ml5.version:", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NrUvtAopQ/model.json', modelLoaded);

function modelLoaded(){
    console.log("model-Loaded");
}

function identify_snap(){
  img =document.getElementById("captured_image");
  classifier.classify(img, gotResult); 
}

function gotResult(error, results){
  if(error){
      console.log(error);
  }
  else{
      console.log(results); 
      document.getElementById("object_result").innerHTML=results[0].label;
      document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);

  }
}