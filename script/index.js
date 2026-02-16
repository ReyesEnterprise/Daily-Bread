/*              
    
                     variables  

*/

const secContainterBtn = document.querySelector(".sec__container-button");
const secContainterChpt = document.querySelector(".sec__container__chapter");
const secContaintertxt = document.querySelector(".sec__container__text");
const body = document.querySelector("body");

/*              

                      functions  

*/

// const bibleApi = "https://bible-api.com/BOOK+CHAPTER:VERSE";

function getVerse() {
  fetch("https://labs.bible.org/api/?passage=random&type=json&callback")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      secContainterChpt.textContent = `
       ${data[0].bookname}
       ${data[0].chapter} :
       ${data[0].verse}`;

      secContaintertxt.textContent = `
       "${data[0].text}"`;
    })
    .catch((err) => {
      console.log(err);
    });
}

/*              
    
                     Event Listeners & Initialization

*/

secContainterBtn.addEventListener("click", getVerse);
