// text= " ";
// for (i=1;i<=10;i++){
//     if (i==5){break;}
//     text += "The number is" + i + "<br>"
//     console.log(text)
// }




// weeks = 3;
// days = 7;
// for (i=1; i<=weeks; i++){
//     console.log("week: " + i);
//     for (e=1; e<=days; e++){
//         console.log("day: " + e);
//     }
// }




let e = "#";
pattern = "";
for(i=0;i<=20;i++){
    pattern+=e
    if(pattern.length==5){
        console.log(pattern);
        pattern="";
    }
}



// let a = "*";
// pattern2 = "";
// for(i=0;i<=15;i++){
//     pattern2+=a
//     if(pattern2.length==5){
//         console.log(pattern2);
//         pattern2="";
//      }
// }


let temp="";
for(i=0;i<4;i++){
    for(j=0;j<5;j++){
        if ((i==3)&&((j==0)||(j==4))){
            temp+=" ";
          }
          else{
              temp+="*";
          }
    }
    console.log(temp);
    temp="";
}



let c = "";
for(let i=1; i<5; i++){
        c+="#"
        console.log(c);
}