$(document).ready(function () {
    //清空,显示为0
    //一类是显示，一类是数组
    let m = [];
    $(".gl").click(function () {
        $(".calc-in").text("0")
        m = [];
    });
    let a = [];
    function Answer(num1,num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.add = function (num1,num2) {
             $(".calc-in").text(num1 + num2)
        };
        this.subt = function (num1,num2) {
            $(".calc-in").text(num1 - num2)
        };
        this.mul = function (num1,num2) {
            $(".calc-in").text(num1 * num2)
        };
        this.divi = function (num1,num2) {
            $(".calc-in").text(num1 % num2)
        }
    }

    const rf = new Answer(0,0);

    //点击显示数字
    function showNum() {
        //添加输入
        $(".calc-operation td").click(function () {
            let b = 0;
            m.push(parseInt(this.innerText));
            console.log(m);
            //清空按钮
            if(this.innerText === "AC"){
                $(".calc-in").text("0");
                m = [];
                a = [];
                return
            }

            //转换输入到数字
            if(this.innerText === "+"){
                m.pop();
                a.push(parseInt(m.join("")));
                a.push("add")
                $(".calc-in").text("0");
                m = [];
            }
            //显示数字
             $(".calc-in").text(m.join(""));
            //等号，计算
            if(this.innerText === "="){
                m.pop();
                a.push(parseInt(m.join("")));
                console.log(a);
                if(a[1] == "add"){
                  rf.add(a[0],a[2])
                }
            }

        })
    }
    showNum();
});
