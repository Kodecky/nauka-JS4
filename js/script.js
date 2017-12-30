var femaleNames = [' Ula ', ' Kasia ', ' Magda ', ' Ola '];
var maleNames = [' Damian ', ' Tomek ', ' Krystian ', ' Paweł'];
var allNames = femaleNames.concat(maleNames);
alert('Lista po połączeniu: ' + allNames);
console.log('Lista po połączeniu: ' + allNames);

var newName = ' Marian ';

if (allNames.indexOf(newName) === -1) {
    var addNewName = allNames.push(newName);
}
alert('Lista po dodaniu imienia: ' + allNames);
console.log('Lista po dodaniu imienia: ' + allNames);