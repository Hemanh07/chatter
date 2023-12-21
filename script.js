const chatboxcontainer=document.getElementById("chatboxcontainer");
const sentbutton=document.getElementById("sentbutton");
const chatbox=document.getElementById("chatbox");
const emo=document.getElementById("emo");
const form=document.getElementById("typebox")
const addbutton=document.getElementById("addbutton");
/* addbutton.addEventListener("click",(event)=>{
    const newbox=document.createElement("div");
    newbox.innerText="";
    chatboxcontainer.appendChild(newbox);

}); */
sentbutton.addEventListener("click",(event)=>{
    const chatboxs=document.getElementById("chatbox").value;
    const e=document.getElementById("emo").value;
    const newbox=document.createElement("div");
    newbox.innerText=chatboxs+e;
    chatboxcontainer.appendChild(newbox)
    
    
    document.getElementById("chatbox").value='';
    document.getElementById("emo").value='';
}
);
