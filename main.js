var text = (function() {
    const textbox     = document.querySelector('.textbox'),
          displayText = document.querySelector('h1'),
          button      = document.querySelector('button'),
          select      = document.querySelector('select');

          const error = function () {
              var index = select.selectedIndex,
              inputText = select.children[index].innerHTML.trim();
              displayText.style.color = "red";
              if(textbox.value.length <= 1) {
                  displayText.innerHTML = "error: please enter two or more characters";
              }
          };

          const isNumber = (n) => {
              return n == Number(n);
          };

          const resetTxtBox = () => {
            $(textbox).val('');
          };

          const resetTxtColor = () => {
             displayText.style.color = "#fff";
          };

          const countVowels = () => {
              resetTxtColor();
              const string = textbox.value,
                    str = string.split('');
              let arr = [],
                  vwel = "vowel";
              for(let i = 0; i < str.length; i++) {
                  let strChar = str[i].toLowerCase();
                  if(strChar === "a" || strChar === "e" || strChar === "i" || strChar === "o" || strChar === "u" || strChar === "y") {
                      arr.push(strChar);
                  }
              }
              arr = arr.filter(function(item, index, inputArray ) {
                  return inputArray.indexOf(item) == index;
              });
              const vowelLen = arr.length;
              const vowelChars = arr.toString().replace(/,/g , ", ");
              if(arr.length === 0 || arr.length > 1) {
                  vwel += "s";
              }
              displayText.innerHTML = "I found " + arr.length + " " + vwel + ": " + '<span style="color:green;">' + vowelChars + '</span>';
              resetTxtBox();
          }

          var buttonClick = function(fn) {
              button.addEventListener('click', fn);
          };

            buttonClick(() => {
                if(textbox.value.length > 1) {
                    countVowels();
                } else {
                    error();
                }
            });
}());
