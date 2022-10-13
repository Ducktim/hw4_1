export const clearRequest = (URL) =>{
    fetch(URL, {
        method: 'POST',
    })
        .then(response => response.text())
        .then(table => document.querySelector('#result_table').innerHTML=table);
}