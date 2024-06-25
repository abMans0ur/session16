let container = document.querySelector('.container')
async function products() {
    await fetch('https://dummyjson.com/products?limit=100')
        .then(res => res.json())
        .then((response) => {
            response.products.map((el) => {
                container.innerHTML += `
            <div class="card">
            <img src=${el.thumbnail}  />
            <h1>${el.title}</h1>
            <h3>${el.category}</h3>
            <h4>${el.price}</h4>
            <p>${el.description}</p>
            </div>
            `
            })
            console.log("object")
        })
        .catch(err => console.log(err))
}
products();
// setTimeout(()=>{
//     console.log("object")
// },0)
console.log("hello")