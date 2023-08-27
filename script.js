var isstatus = document.querySelector("h5");

var addFriend = document.querySelector("#add");

var flag = 0;
addFriend.addEventListener("click", function(){

    if(flag == 0)
    {
        isstatus.innerHTML = "Friends";
        isstatus.style.color = "green";
        addFriend.innerHTML = "Remove";
        addFriend.style.backgroundColor = "black";
        addFriend.style.color = "white";
        flag =  1;
    }
    else{

        isstatus.innerHTML = "Stranger";
        isstatus.style.color = "red";
        addFriend.innerHTML = "Add Friend";
        addFriend.style.backgroundColor = "cadetblue";
        addFriend.style.color = "black";
        flag =  0;
    }

   
})
