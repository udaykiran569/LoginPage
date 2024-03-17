let pa=document.querySelector("#pass");
let ch=document.querySelector("#check");
let us=document.querySelector("#user");
ch.addEventListener("change",()=>{
   let val=pa.getAttribute("type");
   if(val==='password'){
       pa.setAttribute('type','text');
   }
   else
       pa.setAttribute("type",'password');
});
let person={
    username:"udaykiransiddilla@gmail.com",
    password:"12345"
}
// let sub1=document.querySelector("#but2");
let sub=document.querySelector("#but1");
let shadow=document.querySelector(".box-shadow1");
let hd=document.querySelector("#heading");
sub.addEventListener("click",()=>{
    if(us.value==="" && pa.value==="")
        alert("plz entred the username and password");
    else if(pa.value === "")
        alert("plz entred the password");
    else if(us.value === "")
        alert("plz entered the username");
    else if(us.value !== person.username  && pa.value !== 12345)
    {

        // shadow.style.boxShadow="20 20 10px light green ";
        shadow.classList.remove("box-shadow1");
        shadow.classList.add("down-right"); // to down-rightmake permanent
        // document.body.style.backgroundColor='red';
        hd.style.color="red";
        shadow.style.boxShadow="20px 20px 10px red";
    }
    else if(us.value === person.username && pa.value==12345)
    {
        shadow.classList.remove("box-shadow1");
        shadow.classList.add("down-right");
        shadow.style.boxShadow="20px 20px 10px green";
        hd.style.color="green";
        window.location.href = "https://www.google.com";

    }

});
