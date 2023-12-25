const chatboxcontainer = document.getElementById("chatboxcontainer");
const sentbutton = document.getElementById("sentbutton");
const chatbox = document.getElementById("chatbox");
const emo = document.getElementById("emo");
const form = document.getElementById("typebox");
const addbutton = document.getElementById("addbutton");
const warning = document.getElementById("warning");
/* addbutton.addEventListener("click",(event)=>{
    const newbox=document.createElement("div");
    newbox.innerText="";
    chatboxcontainer.appendChild(newbox);

}); */
localStorage.setItem("io",0);
let io = 0
chatboxcontainer.innerHTML=localStorage.getItem(io);
sentbutton.addEventListener("click", (event) => {
  chatbox.style.borderColor = "";
  warning.innerText = "";
  const chatboxs = document.getElementById("chatbox").value;
  const e = document.getElementById("emo").value;
  if (chatboxs !== "" || (e !== "") == 1) {
    console.log("yes");
    const newbox = document.createElement("div");
    const button = document.createElement("BUTTON");
    const completechat = document.createElement("div");
    button.addEventListener("click", (event) => {
        console.log("hai")
        localStorage.removeItem(io);
       newbox.innerHTML="completed";
      });
    
    button.innerText = "🗑️";
    completechat.setAttribute("id", "cr");
    newbox.innerText = chatboxs + e;
    completechat.appendChild(newbox);
    completechat.appendChild(button);
    button.setAttribute("id", "button");
    chatboxcontainer.appendChild(completechat);
    localStorage.setItem(io, chatboxs + e);
    document.getElementById("chatbox").value = "";
    document.getElementById("emo").value = "";
    io += 1;
   
  } else {
    console.log("no");
    chatbox.style.borderColor = "red";
    warning.innerText = "*Please type the message";
  }
});
const button = document.getElementById("button");
button.addEventListener("click", (event) => {
    localStorage.clear();
    document.getElementById("chatboxcontainer").innerHTML="";
    io=0;
  });
/* localStorage.clear()
 */
localStorage.setItem("io",io);
