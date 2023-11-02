//lägg in text i rutan som förklarar bilderna och gör rutan synlig (opacity:1;)
//en eventlistener per bild. En funktion om byter text

const textRuta = document.getElementById('forklarandeTextRuta');
const bild1 = document.getElementById('fonsterBild1');
const bild2 = document.getElementById('fonsterBild2');
const bild3 = document.getElementById('fonsterBild3');

bild1.addEventListener('mouseover', function(){
    const textInnehåll= document.createTextNode('Fönster med slät yta, utan avdelare.');
    textRuta.appendChild(textInnehåll);
    textRuta.style.opacity='1';
    textRuta.style.transition='1s';
})
//bugg, det skapas flera elements i rutan med samma text. Ha en som tar bort 