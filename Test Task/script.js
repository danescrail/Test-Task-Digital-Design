function getDayInfo(str) {
    let month = {
        "Января": "0",
        "Февраля": "1",
        "Марта": "2",
        "Апреля": "3",
        "Майя": "4",
        "Июнья": "5",
        "Июлья": "6",
        "Августа": "7",
        "Сентября": "8",
        "Октября": "9",
        "Ноября": "10",
        "Декабря": "11",
    }

    let week = {
        "Воскресенье": "0",
        "Понедельник": "1",
        "Вторник": "2",
        "Среда": "3",
        "Четверг": "4",
        "Пятница": "5",
        "Суббота": "6",
    }

    let arr = str.split("."); //Создаем массив
    let result = [];
    let getResult = "";
    let now = new Date();

    for (let elem of arr) { //Убираем 0
        if (elem[0] === "0") {
            result.push(elem[1]);
        } else {
            result.push(elem)
        };
    }

    let date = new Date(result[2], result[1] - 1, result[0]);
    for (let key in week) { // Ищем день недели
        if (Number(week[key] == date.getDay())) {
            getResult += " " + key + ", ";
        }
    }

    getResult += Math.ceil(result[0] / 7) + " неделя"; // Ищем какая неделя

    for (let key in month) { // Ищем месяц
        if (Number(month[key]) + 1 == result[1]) {
            getResult += " " + key + " ";
        }
    }

    getResult += result[2] + " года"


    console.log(getResult);
    return(getResult);
}

getDayInfo("05.03.2022");