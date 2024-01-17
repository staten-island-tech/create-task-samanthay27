import '../styles/style.css'
import { fortune } from './array';

const DOMselectors = {
    changetheme: document.querySelector("#changetheme"),
};

DOMselectors.changetheme.addEventListener("click", function (){
  if (document.body.classList.contains("redtheme")){
    document.body.classList.add("greentheme");
    document.body.classList.remove("redtheme");
   } else {
    document.body.classList.add("redtheme");
    document.body.classList.remove("greentheme");
   }
});



console.log("klfsa");
console.log(fortune);
