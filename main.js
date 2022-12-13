// task-1

// mark and johns data
const Mark = {
    // mass : 78,
    // height : 1.69,
    mass : 95,
    height : 1.88,


}
const John = {
    // mass :92,
    // height : 1.95,
    mass : 85,
    height :1.76,
}

let MarksBMI = Mark.mass / (Mark.height * Mark.height);
let JohnsBMI = John.mass / (John.height * John.height);

let MarkshigherBMI = MarksBMI > JohnsBMI
  if(MarkshigherBMI){
    console.log(`Mark's BMI (${MarksBMI} is higher than John's BMI(${JohnsBMI}!)`)
  }else{
    console.log(`John's BMI(${JohnsBMI}) is higher than Mark's BMI (${MarksBMI})`)
  }



//   task-2

const Steven ={
    NormalTip : 15,
    ExtraTip : 20,
    Bill : 275,
    // Bill : 40,
    // Bill :430,
}
let TipNor = Steven.NormalTip/100*Steven.Bill;
let TipExt = Steven.ExtraTip/100*Steven.Bill;
if(Steven.Bill>=50 && Steven.Bill <=300){
    console.log(TipNor);
}else{
    console.log(TipExt);
}
const Total = Steven.Bill + TipNor;
console.log(`The bill was(${Steven.Bill}) , The tip was(${TipNor}), and the total(${Total})`)



