// fetch()

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    if(!response.ok){
        throw new Error('Network is not responding');
    }
    return response.json();
})
.then(data =>{
    data.forEach(element =>{
        console.log(element);
    })
})
.catch(error => {
    console.log(error);   
})



// share data to server using that api

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',   // use put for modify
    body: json.stringigy({  // it convert it into json formate
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8", 
    },

})
.then((response) => response.json())
.then((json) => console.log(json));