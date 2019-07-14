
let h1str = '没 想 到 吧 没 想 到 吧 ';


document.querySelector('h1').textContent = h1str;

document.querySelector('img').onclick = function(){
  alert('啊 啊 啊 啊');
}

let h1counter = 0;
document.querySelector('h1').onclick = function(){
  h1counter = h1counter + 2;
  RollString(h1str, h1counter, 'h1');
};


let pcounter = 0;
let pstr = document.querySelector('.allme').textContent;
document.querySelector('.allme').onclick = function(){
  pcounter = pcounter + 2;
  RollString(pstr, pcounter, '.allme');
};


let backgroundSize = 0;
document.querySelector('body').onclick = function(){
  // alert('backgroundSize');
  h1counter = h1counter + 2;
  RollString(h1str, h1counter, 'h1');
  pcounter = pcounter + 2;
  RollString(pstr, pcounter, '.allme');

  if (backgroundSize % 2 === 0) {
    document.querySelector('body').style.backgroundSize = "600px 100px";
    document.querySelector('body').style.backgroundColor = "yellow";
    document.querySelector('html').style.backgroundSize = "600px 100px";
    document.querySelector('html').style.backgroundColor = "green";
    document.querySelector('img').style.width = "360px";
  } else {
    document.querySelector('body').style.backgroundSize = "100px 100px";
    document.querySelector('body').style.backgroundColor = "green";
    document.querySelector('html').style.backgroundSize = "100px 100px";
    document.querySelector('html').style.backgroundColor = "yellow";
    document.querySelector('img').style.width = "120px";
  };
  backgroundSize = backgroundSize + 1;
};









function RollString(s, clickcounter, element){
  slen = s.length;
  ind = clickcounter % slen;
  document.querySelector(element).textContent = s.slice(ind, slen) + s.slice(0, ind);
}
