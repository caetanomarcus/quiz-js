const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');

const quiz1L1 = document.getElementById('ze');
const quiz1L2 = document.getElementById('nz');
const quiz1L3 = document.getElementById('cc');
const quiz1 = ['quiz1L1', 'quiz1L2', 'quiz1L3'];

const quiz2L1 = document.getElementById('l3');
const quiz2L2 = document.getElementById('l80');
const quiz2L3 = document.getElementById('l4');
const quiz2 = ['quiz2L1', 'quiz2L2', 'quiz2L3'];

const quiz3L1 = document.getElementById('dor');
const quiz3L2 = document.getElementById('cor');
const quiz3L3 = document.getElementById('flor');
const quiz3 = ['quiz3L1', 'quiz3L2', 'quiz3L3'];

const quizList = ['']

let total = 0;

let send = document.getElementById('send');

let points = document.getElementById('points');

var inputs = document.getElementsByTagName('input');

let randomNumber = Math.floor(Math.random() * 3);

let counter = 0;



console.log(randomNumber);


points.innerHTML = ` <p> Você acertou  ${total}/3 questões </p>`;

function randomSelector() {
    if (randomNumber === 1) {
        q2.style.display = "none";
        q3.style.display = "none";
    } else if (randomNumber === 2) {
        q1.style.display = "none";
        q3.style.display = "none";
    } else {
        q1.style.display = "none";
        q2.style.display = "none";
    }
}
randomSelector();

function changeQuestion() {
    if (randomNumber == 1) {
        q1.style.display = "none";
        q3.style.display = "none";
        q2.style.display = "block";
        randomNumber++;
        return;


    };

    if (randomNumber == 2) {
        q1.style.display = "none";
        q2.style.display = "none";
        q3.style.display = "block";
        randomNumber -= 2;
        return;

    };

    if (randomNumber == 0) {
        q2.style.display = "none";
        q3.style.display = "none";
        q1.style.display = "block";
        randomNumber++;

        return;


    }
};




function sendAnswer() {

    if (quiz1L2.checked == true || quiz2L3.checked == true || quiz3L2.checked == true) {
        total++;
        points.innerHTML = ` <p> Você acertou ${total}/3 questões </p>`;
        alert('Você acertou!');
        points.style.backgroundColor = 'green';
        counter++;
        if (counter == 3 && total == 3) {
            document.getElementById('win').style.display = "flex";
            document.getElementById('winButton').addEventListener('click', function(event) {
                event.preventDefault();
                points.style.backgroundColor = 'green';
                location.reload();
            })
        } else if (counter == 3 && total < 3) {
            document.getElementById('loose').style.display = 'flex';
            points.style.backgroundColor = 'red';
            document.getElementById('looseButton').addEventListener('click', function(event) {
                event.preventDefault();
                location.reload();
            });
        } else {
            changeQuestion();
        }

    } else {
        alert('Você errou!');
        counter++;
        if (counter == 3 && total < 3) {
            points.style.backgroundColor = 'red';
            document.getElementById('loose').style.display = 'flex';
            document.getElementById('looseButton').addEventListener('click', function(event) {
                event.preventDefault();

                location.reload();
            });
        } else {
            points.style.backgroundColor = 'red';
            changeQuestion();
        }
    }
};

send.addEventListener('click', function(event) {
    event.preventDefault();
    sendAnswer();
});