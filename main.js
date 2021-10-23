function  startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/haEX_ZKfv/model.json', modelReady);
    }
    function modelReady(){
    classifier.classify(gotResults);
    }
    var dog=0;
    var cat=0;
    var duck=0;
    function gotResults(error,results){
    if(error){
    console.error(error);
    }
    
    else
    console.log(results);
    random_number_r=Math.floor(Math.random() * 255)+1;
    random_number_g=Math.floor(Math.random() * 255)+1;
    random_number_b=Math.floor(Math.random() * 255)+1;
    document.getElementById("result_label").innerHTML='i can hear-'+ results[0].label;
    document.getElementById('result_count').innerHTML='dectected dog-'+dog+'detected cat'+cat+'detected duck'+ duck;
    if(results[0].label=="cat"){
     cat= cat + 1
    img1.src='cat.gif';
    img2.src='dog.jpeg';
    img3.src='duck.jpeg';
    
    
    }  else if(results[0].label=="dog"){
        dog= dog + 1;
        img1.src='cat.png';
        img2.src='dog.gif';
        img3.src='duck.png';
       
        
    
    
    }

    else if(results[0].label=="duck"){
        duck= duck + 1;
        img1.src='cat.png';
        img2.src='dog.png';
        img3.src='duck.gif';
    }
}
