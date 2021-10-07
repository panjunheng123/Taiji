let html = document.querySelector('#html')
let style = document.querySelector('#style')
let n = 0
let str = `/* hello
 * 我们来做一个太极阴阳图
 * 首先准备一个 div
 */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 然后，把 div 变成一个圆*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border: none;
}
/* 太极图是由双阴阳鱼组成的
 * 一黑一白
 */
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 画上阴阳鱼 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: rgb(255,255,255);
    background: rgb(0,0,0);
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*最后让太极图动起来*/
@keyframes x{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
#div1{
    animation: x 10s infinite linear;
}
`
    // CSS 分号不能省略！
    // CSS 分号不能省略！！
    // CSS 分号不能省略！！！
let str2 = ''

// str = str.replace(/\n/g, "<br>")
// 利用正则表达式和 replace 把所有回车改成换行，但是会先打出"<"，再回车



function step() {
    setTimeout(function() {
        // str2 += str[n] === '\n' ? '<br>' : str[n]
        if (str[n] === '\n') {
            // 如果是回车就<br>
            str2 += '<br>'
        } else if (str[n] === ' ') {
            // 如果是空格改成'&nbsp'
            str2 += '&nbsp;'
        } else {
            // 否则就照搬
            str2 += str[n]
        }

        html.innerHTML = str2
        style.innerHTML = str.substring(0, n)
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)

        if (n < str.length - 1) {
            n++
            step()
        }
    }, 50)
}
step()

// let id = setInterval(() => {
//     n++
//     demo.innerHTML = n
//     if (n = 10)
//         clearInterval(id)
// }, 1000)