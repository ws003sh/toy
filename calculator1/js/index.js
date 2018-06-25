$(document).ready(function () {
    //清空,显示为0
    //一类是显示，一类是数组
    let m = [];
    $(".gl").click(function () {
        $(".calc-in").text("0")
         m = [];
    });
    //点击显示数字
    function showNum() {
        $(".calc-operation td").click(function () {
            let a = 0;
            let b = 0;
            m.push(this.innerText);
            console.log(m);
            //清空按钮
            if(this.innerText === "AC"){
                $(".calc-in").text("0");
                 m = [];
                 return
            }
            //回退 ??
            if(this.innerText === "←"){
                  m.pop();
                // $(".calc-in").text(m.join(""));
                 console.log(m)
            }
            if(this.innerText === "+"){
                m.pop();
                a = m.join("");
                getResoult(a,"+");
                $(".calc-in").text("0");
                m = [];
            }
            // if(this.innerText === "-"){
            //     // m.pop();
            //     getResoult(m);
            // }
            // //乘法
            // if(this.innerText === "×"){
            //     // m.pop();
            //     getResoult(m);
            // }
            // //除法
            // if(this.innerText === "÷"){
            //     // m.pop();
            //     getResoult(m);
            // }
            //等号，计算
            if(this.innerText === "="){
                m.pop();
                // getResoult(m);
            }
            $(".calc-in").text(m.join(""));
        })
    }
    showNum();
    //计算结果
    let res = [];
    function getResoult(num1,num2) {
        res.push(num1);
        res.push(num2);
        console.log("输入是:"+ res);

    }

});
