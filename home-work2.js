var letters = []
var str = "Backend As A Service"
newStr = str.split(' ')
for (var i = 0; i < newStr.length; i++){
    letters.push((newStr[i].charAt(0)))
}
alert(letters)

//2 (4 points)
function func(param) {
    console.log ( typeof param === 'number' ? new Date().toLocaleString()  : 'Неверный тип данных' )
}