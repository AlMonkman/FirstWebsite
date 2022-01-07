let age;



function something(){

    alert("Wazuuuppppppp");

    age = prompt('What is your age?');
 
}

something();

if (age >26) {
    document.write('You\'re Old!');
}

else {
    document.write('You\'re Young!');
}

function loop(){

    let lovesAM = confirm('Do you love AM'); 

    while(!lovesAM){
        lovesAM=confirm('Are you sure you don\'t?');

    }


}

loop();

function Donut(){
    let Maple = prompt('How many maple bars can you eat?');

    for (let i=0; i <Maple;i++) {
        document.write('<img src="MapleBar.jpg" alt="maplebars" class="donuts"></img>');
    }




}

Donut();