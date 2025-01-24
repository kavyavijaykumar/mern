function handle(){
    const username=document.getElementById("uname").value;
    const password=document.getElementById("pass").value;
    const errormsg=document.getElementById("error");

    const data=[
        {username:"kavya",password:"abc@123"}
    ]

    const isvalid=data.some((user)=>user.username===username && user.password===password);

    if(isvalid){
        window.location.href="table.html"
        errormsg.innerText="login succesful"
    }
    else{
        errormsg.innerText="Invalid"
    }
}