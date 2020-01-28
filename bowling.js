


let currentFrame = 1;
let currentRoll = 1;
let rollNumber = 0;

let rolls = [];

function throwBall(pins) {
    let standingPins  = 10;
    rollNumber++;
    if (currentFrame <= 10)
    {
        if (pins === 10){
        let findFrame = Math.round(rollNumber/2);
            document.getElementById(`frame-${findFrame}s${2}`).innerHTML = "x";
            wasStrike();
        }
        else {
            document.getElementById(`frame-${currentFrame}s${currentRoll}`).innerHTML = pins;
            checkScore();
        }
    }

}

function wasStrike() {
    currentFrame++;
    rollNumber++;
    currentRoll = 1;
}

function checkScore() {

    if (currentFrame === 10)
    {
        if (currentRoll === 3)
        {
            console.log("game over")
        }
    }
    currentRoll++;
    if (currentRoll > 2 && currentFrame !== 10)
    {
        currentRoll = 1;
        currentFrame++;
    }

}

function updateFrameScore(){


}


