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
    '"Je kan anderen blij maken met jouw leuke verhalen."',
    '"Het mooiste wat je kan zijn is jezelf."',
    '"Als je iets goeds ziet geef dan een compliment. Als je een fout ziet biedt dan hulp aan."',
    '"Een comfortzone is een mooie plek maar er groeit nooit iets."',
    '"Je faalt nooit zolang niet opgeeft."',
    '"Wees de reden dat iemand glimlacht vandaag."',
    '"Alleen ga je sneller, samen kom je verder."'
];

var okSpreuken = [
    '"Wacht niet op een goede dag. Maak die goede dag."', 
    '"Als je moe bent, rust dan uit maar geef niet op."', 
    '"Geloof dat je het kan, dan ben je al halverwege."',
    '"Je lacht wanneer je blij bent en je wordt blij wanneer je lacht."',
    '"Het is nooit fout om jezelf te zijn, onthoud dat."',
    '"Alles waar je ogen van gaan stralen, moet je doen."',
    '"Moeilijk, ja. Onmogelijk, nooit."',
    '"Het mooiste wat je kan zijn is jezelf."',
    '"Een comfortzone is een mooie plek maar er groeit nooit iets."',
    '"Het lijkt altijd onmogelijk totdat het gedaan is."',
    '"Je moet eerst verdwalen voordat je jezelf kan vinden."',
    '"Je faalt nooit zolang niet opgeeft."',
    '"Alleen ga je sneller, samen kom je verder."',
    '"Ik kan niet beloven dat ik al je problemen oplos maar ik kan wel beloven dat je er niet alleen voor staat. @EASE"'
];

var nietOkSpreuken = [
    '"Ik vind je geweldig. Nu moet je jezelf nog geweldig vinden."', 
    '"Je bent moediger dan je gelooft, sterker dan je lijkt en slimmer dan je denkt."', 
    '"Het is nooit fout om jezelf te zijn, onthoud dat."',
    '"Geloof niet alles wat je denkt."',
    '"Als je moe bent, rust dan uit maar geef niet op."',
    '"Moeilijk, ja. Onmogelijk, nooit."',
    '"Als je beter voor jezelf zorgt ga je jezelf beter voelen. Dan ga je betere keuzes maken en mooiere dingen aantrekken."',
    '"Het mooiste wat je kan zijn is jezelf."',
    '"Aan het einde komt het altijd goed, en als het niet goed komt, is het nog niet het einde."',
    '"Je moet eerst verdwalen voordat je jezelf kan vinden."',
    '"Alleen ga je sneller, samen kom je verder."',
    '"Ik kan niet beloven dat ik al je problemen oplos maar ik kan wel beloven dat je er niet alleen voor staat. @EASE"'

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
    if(nietOkSpreuk == nietOkSpreuken[6]) {
        timeout = 11;
    }
    document.getElementById("spreuk").innerHTML = nietOkSpreuk;
};