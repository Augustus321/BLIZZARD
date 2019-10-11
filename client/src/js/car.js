import "../less/car.less";
import "./logging-status";
import "./Navbar";
import {
    loaddingCar
} from "./loadding-car";

loaddingCar().then(() => {
    $(".detail-car").on("click",function(){
        let shopid = {
          id: $(this).data("id")
        }
        fetch("http://10.2.0.202:8081/car/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shopid)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.errMsg);
                if (data.status == "200") {
                    alert("删除失败！");
                } else if (data.status == "201") {
                    console.log("删除成功！");
                    
                }
            });
    })
    
    
});