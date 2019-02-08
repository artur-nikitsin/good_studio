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
