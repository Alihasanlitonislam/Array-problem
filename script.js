// তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

// var taka = 10000;
// if(taka>=80000) console.log("Mac")
// else if(taka>=60000) console.log("Gaming lapto")
// else if(taka>=40000) console.log("lenova yoga")
// else if(taka>=20000) console.log("Computer")
// else console.log("mobail")
// আসকে আমার মন ভালো নেই এই কথা 
// var x = " আসকে আমার মন ভালো নেই এই কথা "
// for(i =412; i<=466; i++){
//     if(i%2!=0){
//         console.log(i)

//     }
// }
//একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
// var number = 30;
// while(number<86){
//     if(number>50){
//         break
//     }
//     console.log(number)
//     number++
// }

//  var items = [20, 10, 40, 30, 60, 70, 90, 33, 54, 35, 65, 76, 11, 32]

// for(i=0; i<items.length; i++){
//     var item = items[i]
//     if(item>50){
//         continue
//     }
//     console.log(item)
// }

var name= ['ali hasan','liton islam','milon islam','saddem hosain','jonaeid islam','moklasah rhaman','shathi akther foiew']
var heiIndex = 0;
var index = null;
for(i=0;i<name.length;i++){
    if(name[i].length>heiIndex){
        heiIndex = name[i].length;
        index=i
    }
}
console.log(heiIndex,index)




// var heightArray = 0;
// var index = null;
// for(i=0; i<name.length; i++){
//     if(name[i].length>heightArray){
//         heightArray = name[i].length;
//         index=i
//     }
// }
// console.log(heightArray,index)