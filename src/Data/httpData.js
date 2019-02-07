export default class HttpData {
    getData(url) {
        return new Promise(function (resolve, reject) {
            let req = new XMLHttpRequest();

            req.open("GET", url, true);
            req.responseType = "json";
            req.send();
            req.onload = function () {
                resolve(req.response);
            };
            req.onerror = function () {
                reject(req.status);
            };
        });
    }

    postData(url, data) {
        return new Promise(function (resolve, reject) {
            let req = new XMLHttpRequest();

            req.onload = function () {
                resolve(req.response);
            };
            req.onerror = function () {
                reject(req.status);
            };
            req.open("POST", url);
            req.responseType = "json";
            req.setRequestHeader("Content-Type", "application/json");
            let nData = JSON.stringify(data);
            req.send(nData);
        });
    }

    putData(url, data) {
        return new Promise(function (resolve, reject) {
            let req = new XMLHttpRequest();
            req.onload = function () {
                resolve(req.response);
            };
            req.onerror = function () {
                reject(req.status);
            };
            req.open("PUT", url);
            req.responseType = "json";
            req.setRequestHeader("Content-Type", "application/json");
            let nData = JSON.stringify(data);
            req.send(nData);
        });
    }

}


/*
{
    "status": "ok",
    "token": "jFXq_DdJ0d-dai08jwPdin7Y_3E5tRvT",
    "user": {
    "_id": "5c5c9c52afc7450126d63dc2",
        "name": "artur",
        "username": "artur",
        "password": "1993",
        "date": 1549573202744,
        "__v": 0
}
}*/
