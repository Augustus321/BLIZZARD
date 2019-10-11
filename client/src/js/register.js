// email,password,name,ID_number,pone

$(function () {
    $(".btn-blue").click(function () {
        // 单选框验证
    if($('.change').prop('checked') == false){
        alert('请勾选同意并接受隐私政策。')
        return;
    }
    if((sessionStorage['pone-satate'] == "false") || (sessionStorage['card-satate'] == "false") || (sessionStorage['email-satate'] == "false")){
        alert("请填写有效字段");
        return;
    }
        let user = {
            email: $(".email").val(),
            password: $(".password").val(),
            usename: $(".useName").val(),
            ID_number: $(".card").val(),
            pone: $(".phone-number").val()
        }
        if (!user.email || !user.password || !user.usename || !user.ID_number || !user.pone) {
            alert("请填写所有字段");
            return;
        }
        
        fetch("http://127.0.0.1:8081/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.errMsg);
                if (data.status == "200") {
                    alert("该用户已注册，请更换邮箱注册或直接登录。");
                } else if (data.status == "201") {
                    alert("注册成功！");
                    sessionStorage['login'] = "1";
                    sessionStorage['email']  = `${data.errMsg.email}`;
                    sessionStorage['name'] = `${data.errMsg.usename}`
                    location.href = "http://localhost:8090";
                }
            });
    })
})

