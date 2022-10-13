export const postRequest = (URL, body)=>{
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then(response => response.text())
        .then(table => document.querySelector('#result_table').innerHTML=table);
}