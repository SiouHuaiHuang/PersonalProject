function formCheck() {
    var username = document.getElementsByName("username")[0].value;
    var email=document.getElementsByName("useremail")[0].value;
    var addressvalue=document.getElementsByName("address")[0].value;
    if (username[0] == null && email[0] == null && addressvalue[0] == null) {
      alert("請填寫姓名,電話及地址唷！");
      return false;
    }
    if ( email[0] == null && addressvalue[0] == null) {
      alert("請填寫電話及地址唷！");
      return false;
    }
   
  }

$("#CHECKPASSWORD").keyup(
    function check(event){
        let value1 = $("#PASSWORD").val();
        let value2 = $(this).val();
        console.log(value1,value2);
        if(value1 !== value2){
            $("#non").text("請輸入相同的密碼");
        }else{
            $("#non").text("");
        }

    }
    
);