let timeout = 8;

let timer = setTimeout(function() {
    window.location='../'
}, ((timeout) *1000)  );

let x = setInterval(function() {
    document.getElementById("seconden").innerHTML = timeout-1;
    timeout--
}, 1000)


//Perfect:

var perfectSpreuken = [
    '"Een glimlach geven kost niets. Een glimlach krijgen kan een groot verschil maken."', 
    '"Alles waar je ogen van gaan stralen, moet je doen."',
    '"Je kan anderen blij maken met jouw leuke verhalen."'
];

var okSpreuken = [
    '"Wacht niet op een goede dag. Maak die goede dag."', 
    '"Als je moe bent, rust dan uit maar geef niet op."', 
    '"Geloof dat je het kan, dan ben je al halverwege."'
];

var nietOkSpreuken = [
    '"Ik vind je geweldig. Nu moet je jezelf nog geweldig vinden."', 
    '"Je bent moediger dan je gelooft, sterker dan je lijkt en slimmer dan je denkt."', 
    '"Het is nooit fout om jezelf te zijn, onthoud dat."'
]

var perfectSpreuk = perfectSpreuken[Math.floor(Math.random()*perfectSpreuken.length)];
var okSpreuk = okSpreuken[Math.floor(Math.random()*okSpreuken.length)];
var nietOkSpreuk = nietOkSpreuken[Math.floor(Math.random()*nietOkSpreuken.length)];

function perfectText() {
    document.getElementById("spreuk").innerHTML = perfectSpreuk;
};

function okText() {
    document.getElementById("spreuk").innerHTML = okSpreuk;
};

function nietOkText() {
    document.getElementById("spreuk").innerHTML = nietOkSpreuk;
};