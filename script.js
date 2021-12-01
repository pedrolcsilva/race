function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}

function raceLap(min, max, der){
    let v = randomNumber(min, max);
    v = v - (v * der / 100);
    return v;
}

function race(laps){
    let minP = randomNumber(100, 150);
    let maxP = randomNumber(200, 280);
    let derP = randomNumber(1, 8);

    let minJ = randomNumber(100, 150);
    let maxJ = randomNumber(200, 280);
    let derJ = randomNumber(1, 8);

    let minE = randomNumber(100, 150);
    let maxE = randomNumber(200, 280);
    let derE = randomNumber(1, 8);
    console.log(derE);

    let pointsP = 0;
    let pointsJ = 0;
    let pointsE = 0;
    for(let i = 0; i < laps; i++){
        let vP = raceLap(minP, maxP, derP);
        let vJ = raceLap(minJ, maxJ, derJ);
        let vE = raceLap(minE, maxE, derE);
        console.log(vP);  
        console.log(vJ);  
        console.log(vE);  
        
        if(vP > vJ && vP > vE){
            pointsP++;
        }
        if(vJ > vP && vJ > vE){
            pointsJ++;
        }
        if(vE > vP && vE > vJ){
            pointsE++;
        }
    }

    let result = document.getElementById('result');

    if(pointsP > pointsJ && pointsP > pointsE){
        result.innerHTML = "O Vencedor é Pedro!!"
    }
    else if(pointsJ > pointsP && pointsJ > pointsE){
        result.innerHTML = "O Vencedor é Juca!!"
    }
    else if(pointsE > pointsJ && pointsE > pointsP){
        result.innerHTML = "O Vencedor é Edna!!"
    }
    else if(pointsP == pointsJ && pointsP == pointsE){
        result.innerHTML = "Os Três Empataram";
    }
    else if(pointsP == pointsE){
        result.innerHTML = "Pedro e Edna Empataram!!";
    }
    else if(pointsE == pointsJ){
        result.innerHTML = "Edna e Juca Empataram!!";
    }
    else if(pointsP == pointsJ){
        result.innerHTML = "Pedro e Juca Empataram!!";
    }
}


document.getElementById('btn-start-rap').addEventListener('click', function() {
    race(10)
})

document.getElementById('btn-start-pre').addEventListener('click', function() {
    race(70)
})

document.getElementById('btn-start-end').addEventListener('click', function() {
    race(160)
})

document.getElementById('btn-start-pers').addEventListener('click', function() {
    race(document.getElementById('pers').value)
})