const chatdisplay=document.getElementById("chatdisplay");
const sentbutton=document.getElementById("sentbutton");
const chatbox=document.getElementById("chatbox");
const emo=document.getElementById("emo");
const form=document.getElementById("typebox")
sentbutton.addEventListener("click",(event)=>{
    const chatboxs=document.getElementById("chatbox").value;
    const e=document.getElementById("emo").value;
    chatdisplay.innerText=chatboxs+e;
    document.getElementById("chatbox").value=' ';
    document.getElementById("emo").value='';
}
);
