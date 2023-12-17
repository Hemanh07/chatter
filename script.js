const chatdisplay=document.getElementById("chatdisplay");
const sentbutton=document.getElementById("sentbutton");
const chatbox=document.getElementById("chatbox");
sentbutton.addEventListener("click",(event)=>{
    const chatboxs=document.getElementById("chatbox").value;
    console.log(chatboxs);
    chatdisplay.innerText=chatboxs;

}
);
/* const emo=document.getElementById("emo")
emo.addEventListener("click",(event)=>{
    const e=document.getElementById("emo").value;
    chatbox.innerHTML=e;
    console.log(e);
})
 */