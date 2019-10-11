import "../less/store-detail.less";
import "./Navbar";
import Swiper from "swiper";
import {
    loaddingDetail
} from "./loadding-store-detail";
import "./loadding-store";
import "./logging-status";

// 加载商品详情
loaddingDetail().then(() => {
    $(".detail-car").on("click", function () {
        location.href = `./car.html`;
        if(!sessionStorage["email"]){
            alert("请登录！");
            location.href = `./login.html`;
            return;
        }

        let email = "";
        if(sessionStorage["email"]){
            email = sessionStorage.email;
        }
        let carInformation = {
            email:email,
            name: $(".detail-title h3").html(),
            title: $(".detail-title p").html(),
            price: $(".detail-price").html(),
            shopbg: $(".store-detail-information").data("img"),
            gamelogo:$(".store-detail-logo").data("img"),
        }
        fetch("http://10.2.0.202:8081/car/insert", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carInformation)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.errMsg);
                if (data.status == "200") {
                    alert("添加失败！");
                } else if (data.status == "201") {
                    console.log("添加成功！");
                    
                }
            });
    })
});
