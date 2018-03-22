
var text = function () {
    var rand = Math.floor(Math.random()*allTexts.length);
    return allTexts[rand];
}();

console.log(typeof document.getElementById('userArea').onpaste);

// select elements
var startBtn = $('#startBtn');
var info = $('.info');
var userArea = $('#userArea');
var clock = $('#clock');

// set global loop for clock and time

var loop;
var time;
// clean text for typing
var rg = new RegExp(/\n/g);
var mainText = text.replace(rg, " ");
var textArray = mainText.trim().split("");
var textCopy = textArray.filter(function(e) {
    return e !== " ";
});

// add listeners
userArea.on('keydown', userTabed);
startBtn.on('click', startGame);

function userTabed(e) {
if (e.keyCode == 9) {
        e.preventDefault();
        $(this).val($(this).val() + "    ");
    }
}

function startGame() {
    setNewTextForTyping(text);
    userArea.focus();
    if (this.innerHTML == "Start") {
        this.className = "btn btn-success form-control";
        $(this).html("i am done !");
        info.show();
        startTheClock();
    } else if (this.innerHTML == "i am done !"){
        var userTyping = userArea.val();
        var userText = userTyping.replace(rg, " ");
        var userArray = userText.trim().split("");
        var userTextCopy = userArray.filter(function (e) {
            return e !== " ";
        });
        if(textCopy.toString() === userTextCopy.toString()){
            var userWin = confirm("Good job!" + "\nTvoje vreme je ")
        }else{

            for (var i = 0; i < textCopy.length; i++) {
                if(textCopy[i] !== userTextCopy[i]){
                    var position = i;
                    var userMistakeLetter = userTextCopy[position];
                    break;
                }
            }
            var userChoose = confirm(`
Wrong typing !
Slovo na poziciji ${position} je ${userMistakeLetter}
a trazeno slovo je ${textCopy[position]}

Zelis da pokusas ponovo ?
`);
        }
        if(userChoose){
            location.reload();
        }else{
            // vodite ga gde hocete !!!
        }
        clearInterval(loop);
    }
}

function startTheClock() {
    var s = 0;
    var m = 0;
  loop = setInterval(function() {
        s++;
        m = parseInt(m);
        (s < 10) ? s = "0"+s : s;
        (m < 10) ? m = "0"+m : m;
        if(s > 60){
            s = 0;
            m++;
        }
        time = m+":"+s;
        
        clock.text(time);
        if(m == 5){
            clearInterval(loop);
            alert("To slow, better luck next time !")
        }
    }, 1000)
}

function setNewTextForTyping(text) {
    $('pre').text(text);
}