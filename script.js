var name = 'Tomasz';
var age = 11;

document.querySelector('.baner__title').textContent = 'Hi ' + name +', nice to see You!';

if (age < 18 || age > 65 || !age) {
document.querySelector('.mostPopular__course').setAttribute('class', 'hidden');
document.querySelector('.mostPopular__course:last-child').setAttribute('class',
'mostPopular__course visibleFlex');
}



function ukryjOpinie(ileOpinii, ileWybrac)  {
  var opinie = [];

  opinie[0] = document.querySelector('.opinions__opinion:nth-child(1)');
  opinie[0] = document.querySelector('.opinions__opinion:nth-child(1)');

  for (var i=0; i<6; i++) {

  opinie[i] = document.querySelector('.opinions__opinion:nth-child(' + (i+1) + ')');

  }
  for (var i=0; i<(ileOpinii - ileWybrac); i++) {

    opinie[i].setAttribute('class', 'hidden');


  }
}


var date = new Date();

var godzina = date.getHours();

if (godzina > 17 || godzina < 7) {
document.querySelector('.baner').setAttribute('class', 'baner baner--night');

}





ukryjOpinie(6,2);
