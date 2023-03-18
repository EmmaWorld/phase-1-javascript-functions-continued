// code your solution here
// Define a Function Using Function Declaration

  function saturdayFun(someWhere="roller-skate") {
    return `This Saturday, I want to ${someWhere}!`
    }
    saturdayFun();
    
//Define a Function Using a Function Expression
    let mondayWork = function(willDo="go to the office"){
        return `This Monday, I will ${willDo}.` 
       }
       mondayWork();

       function wrapAdjective (style="*") {
        return function(stringOne="special"){
          return `You are ${style}${stringOne}${style}!`
        }
      }



