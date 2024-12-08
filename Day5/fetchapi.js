let url="https://api.github.com/users/VaishMittal";
let api=fetch(url);  //it return a promise
api.then((data)=>{
    console.log(data);
    return data.json();
}).then((data)=>{
    console.log(data.login);
    console.log(data.id);
    console.log(data.avatar_url);
    console.log(data.repos_url);

})

// async function apicall(){
//     let url="https://api.github.com/users/VaishMittal";
//     let b= await fetch(url);
//     let data = await b.json()
//     console.log(data);
// }
// apicall()
