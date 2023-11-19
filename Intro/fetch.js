//adding event 

document.getElementById("btn").addEventListener("click", makeRequest);

// function 
function makeRequest() {
    const promisObj = fetch('data.txt')

  console.log(promisObj);// it will show you promise is pending 
//   we have to use than 
promisObj.then((res)=>{
  console.log(res);
})
}