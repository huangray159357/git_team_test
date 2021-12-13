//陣列項目不重複

// let gacha_box_a = [1,2,3,4,5,6,7,8,9];

// let gacha_new_box_a = [];

// for(let i = 0; i < gacha_box_a.length; i++){
//     if( !gacha_new_box_a.includes(gacha_box_a[i]) ){
//         gacha_new_box_a.push(gacha_box_a[i])
//     }
// };

// console.log(gacha_new_box_a);


//1-9隨機產生一個數字
// parseInt(Math.random() * 9) + 1
// console.log(parseInt(Math.random() * 9) + 1);


//陣列中隨機選一個數字

let gacha_box_b = [1,2,3,4,5,6,7,8,9];
// console.log(parseInt(Math.random(gacha_box_b) * 9) + 1);

//點箱子增加灰階的style
var gacha_box_c = document.getElementsByClassName('box');
console.log(gacha_box_c);

// console.log(gacha_box_c[0]);

for(let i = 0; i < gacha_box_c.length; i++){
    // gacha_box_c.addEventListener("click",function(){
    //     // this.setAttribute("style", "color:gray");
    //     console.log('test');
        
    // });
    console.log("test")
}
// console.log(gacha_box_c);

let gacha_div = document.getElementById("flex");
// console.log(gacha_div);
// console.log("test");

