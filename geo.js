let questions = [
    {
      text: "What is the currency of Switzerland?",
      options: [
        "a.Koruna",
        "b.Euro",
        "c.Swiss Franc",
        "d.Sterling"
      ],
      ans: 1
    },
    {
      text: "The westerlies blow between …………",
      options: [
        "a.40° and 65°",
        "b.30° and 60°",
        "c.10° and 25°",
        "d.0° and 15°"
      ],
      ans: 4
    },
    {
      text: "‘Surma’ is a …",
      options: [
        "a.Tribe of Nagaland",
        "b.Hill Station of Manipur",
        "c.River flows in Bangladesh",
        "d.A type of herbal"
      ],
      ans: 3
    },
    {
      text: "In which of the following states, blood rain occurs?",
      options: ["a.Tamil Nadu", "b.Himachal Pradesh", "c.Kerala", "d.Assam"],
      ans: 1
    }
  ];
let ans_list=[];
const submit=(el1,el2)=>{

    const div=document.getElementById(el1);
    for(let i=1;i<=4;i++){
        const id=String(i)+el1;
        const bttn=document.getElementById(id);
        if(parseInt(el2.id.charAt(0))==i){
            bttn.classList.add("bttn-change");
            //console.log(ans);
        }
        else{
            bttn.classList.remove("bttn-change");
        }
    }
    const text=document.getElementById(el1+"-text");
    const ans={id:el2.id,que:text.textContent};
    if(ans_list.length==0){
        ans_list.push(ans);
    }
    else{
        let find=false;
        let remove_index=-1;
        for(let i=0;i<ans_list.length;i++){
            if(ans_list[i].que==text.textContent){
                find=true;
                remove_index=i;
            }
        }
        if(find){
            ans_list.splice(remove_index,1);
        }
        ans_list.push(ans);
    }
    //console.log(ans_list);
}
const finalsubmit=()=>{
    let score=0;
    //console.log(ans_list);
    for(let i=0;i<ans_list.length;i++){
        if(questions.some(a=>a.text==ans_list[i].que && a.ans==parseInt(ans_list[i].id.charAt(0)))){
            score+=10;
        }
        else if(questions.some(a=>a.text==ans_list[i].que && a.ans != parseInt(ans_list[i].id.charAt(0)))){
            score-=2.5;
        }
    }
    const scoreset=document.getElementById("score");
    scoreset.innerHTML=score+"/40";
    document.getElementById("popup-1").classList.toggle("active");
    if(score>20){
      fire();
      console.log("sbdh");
    }
    console.log(score);
}

const fire=()=>{
  const content=document.getElementById("firework-content");
  for(let i=1;i<4;i++){
    const firework=document.createElement("div");
    firework.classList.add("firework");
    firework.id=["firework1","firework2","firework3"][i];
    for(let i=1;i<13;i++){
      const explosion=document.createElement("div");
      explosion.classList.add("explosion");
      firework.appendChild(explosion);
    }
    content.appendChild(firework);
  }
  console.log(content);
}