import {loader} from './loader'
export function fetchPost(route, data, success) {

    loader('show');

    fetch(route, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : data
    }).then(response => response.json())
      .then(body => {
            loader('hide');
            success(body)
      })
      .catch((error) => {

          console.log(error)
    });
}


export function fetchGet(route, success) {

    loader('show');

    fetch(route,{
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    }).then(response => response.json())
      .then(body => {
            loader('hide');
            success(body)
        })
      .catch((error) => {

            console.log(error)
        });
}