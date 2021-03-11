window.onload= function() {
    //var ewm=document.getElementById("ewm");
    //ewm.onmouseover=function{
    //    var Phone=document.getElementById("Phone");
    //    ewm.className="ewm";
    //    Phone.style.display="block";
    //}

    var right = document.getElementById("right");
    var left = document.getElementById("left");
    var form_img = document.getElementById("form_img");
    var form_list = document.getElementById("form_list");

    right.onclick=function () {
        right.style.color = "red";
        left.style.color = "#999";
        form_list.style.display = "block";
    }
    left.onclick =function () {
        left.style.color = "red";
        right.style.color = "#999";
        form_list.style.display = "none";
    }
}




