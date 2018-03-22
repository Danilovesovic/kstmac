var text1 = `<div class="row">
         <div class="col-lg-8 col-lg-offset-1">
                
        <div class="col-lg-3">
            <button class="btn btn-danger form-control">00:00</button>
        </div>
    </div>`;
var text2 = `
function startGame() {
    setNewTextForTyping(text);
    if (this.innerHTML == "Start") {
        this.className = "btn btn-success form-control";
        $(this).html("i am done !");
        info.show();
        startTheClock();
    } 
}
`;
var text3 = `
<style>
p.one {
    border-style: dotted solid dashed double;
}
p.two {
    border-style: dotted solid dashed;
}
p.three {
    border-style: dotted solid;
}
p.four {
    border-style: dotted;
}
</style>
`;


var allTexts = [text1,text2,text3];