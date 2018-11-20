import originJsonp from "jsonp";

const formatParameter = function(data) {
    let str = "";
    for (let key in data) {
        str += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
    }
    console.log(str);
    return str;
}
export default function jsonp(url, data, opt) {
    return new Promise((resolve, reject) => {
        url += url.indexOf("?") == -1 ? "?" + formatParameter(data) : formatParameter(data);
        originJsonp(url, opt, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    });
}