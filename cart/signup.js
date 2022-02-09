function formCheck() {
    let username = document.getElementById("name").value;
    console.log(username);
    /*var email=document.getElementsByName("useremail")[0].value;
    var addressvalue=document.getElementsByName("useraddress")[0].value;*/
    if (username ="" ) {
      alert("請填寫姓名唷！");
      return false;
    }
    return true;
}

$("#CHECKPASSWORD").keyup(check);
$("#password").keyup(check);

function check(event) {
    let value1 = $("#password").val();
    let value2 = $("#CHECKPASSWORD").val();
    if (value1.length < 8 && value2.length < 8 ){
        $("#length").text("密碼長度需大於8個字");
    } else {
        $("#length").text("");
        
    }
    if (value1 !== value2){
        $("#non").text("請輸入相同的密碼");
    } else {
        $("#non").text("");
    }
    
}