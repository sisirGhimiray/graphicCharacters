

let charNames="plus sign, asterisk, backward slash,less than sign, greater than sign, left parenthesis, left braces, left bracket, comma, single quotes, colon, question mark, ampersand, tilde sign, hash,minus sign(hyphen),percent sign,forward slash,equal to sign,underscore,right parenthesis,right braces,right bracket,period,double quotes,semicolon,exclamation sign,vertical bar,caret sign";
let graphicChar=`+,*,\\,<,>,(,{,[,comma,\',:,?,&,~,#,-,%,/,=,_,),},],.,",;,!,|,^`;

let charNameList=charNames.split(",");
let graphicCharList=graphicChar.split(",");


let htmlTemplate=`
<div class="char-name">
<div class="char"><span>Character</span></div>
<div class="name"><span>Name</span></div>
</div>
`;
const graphicBookList=document.querySelector(".graphicBookList")
const updateAllGraphicCharacter=function(charName,graphicChar){
let i=0;
while(i<=charName.length-1)
{
  if(graphicCharList[i]=="comma")
  {
    graphicCharList[i]=",";
  }
graphicBookList.insertAdjacentHTML("beforeend",`
<div class="char-name">
<span class="graphi-char">${graphicChar[i].trim()}</span>
<span>${charName[i].trim()}</span>
</div>
`)
  i++;
}
}

window.addEventListener('DOMContentLoaded', (event) => {
  updateAllGraphicCharacter(charNameList,graphicCharList);
});
let charName=document.querySelector(".char-name");

const checkMedia=function(media){
  if(media.matches)
  {
    document.getElementById("second-char-name").hidden=true;
    
  }
}

window.addEventListener("resize",function(){
  let media=window.matchMedia("(min-width:992px)");
  checkMedia(media);
},false);
