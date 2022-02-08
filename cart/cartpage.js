function formCheck() {
    var username = document.getElementsByName("username")[0].value;
    var phonenumber=document.getElementsByName("tel")[0].value;
    var addressvalue=document.getElementsByName("address")[0].value;
    if (username[0] == null && phonenumber[0] == null && addressvalue[0] == null) {
      alert("請填寫姓名,電話及地址唷！");
      return false;
    }
    if ( phonenumber[0] == null && addressvalue[0] == null) {
      alert("請填寫電話及地址唷！");
      return false;
    }
    if ( addressvalue[0] == null) {
      alert("請填寫地址唷！");
      return false;
    }
  }
 