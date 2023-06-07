console.log('hello')
// https://newsapi.org/v2/everything?q=tesla&from=2022-11-25&sortBy=publishedAt&apiKey=69aee0db285c4d6a9cc48137aa1786db
// https://newsapi.org/v2/everything -G \
//     -d q=Apple \
//     -d from=2022-12-25 \
//     -d sortBy=popularity \
//     -d apiKey=69aee0db285c4d6a9cc48137aa1786db
// https://newsapi.org/v2/top-headlines?country=us&apiKey=69aee0db285c4d6a9cc48137aa1786db
const newsapi = {
    apikey: '69aee0db285c4d6a9cc48137aa1786db',
    
}




let today = new Date()
let date = today.getDate()
let month = today.getUTCMonth()+1
let year = today.getFullYear()
let total = `${year}-${month}-${date}`
console.log(total)

let form = document.getElementById('form')


form.addEventListener('submit', function (work){
    work.preventDefault()
    let user = document.getElementById('search1').value
    console.log(user)
    let p = fetch(`https://newsapi.org/v2/everything?q=${user}&from=${total}&sortBy=popularity&apiKey=${newsapi.apikey}`)
    let p1 = fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${newsapi.apikey}`)
    p1.then((more)=>{
        return more.json()
    }).then((more1) =>{
        console.log(more1)
        shownews1(more1)
    })
p.then((value1) =>
{
    return value1.json()
}).then((value2) =>
{
    shownews(value2)
})

})
function shownews(value)
{
   
    console.log(value)
    let author = document.getElementById('title')
    let content = document.getElementById('description')
    let image1 = document.getElementById('image1')
    let url = document.getElementById('read')
    author.innerHTML = value.articles[0].title
    content.innerText = value.articles[0].content
    image1.innerHTML = `<img src="${value.articles[0].urlToImage}">`;
    url.innerHTML = `<a href="${value.articles[0].url}">Read more</a>`
    console.log(value.articles[0].content)



}
// function shownews1(asg)
// {
//     let image1 = document.getElementById('image1')
//     let car1 = document.getElementById('car1')
    
//     image1.innerHTML = `<img src="${articles[0].urlToImage}"`;
//     car1.innerHTML =` ${articles.title}`
// }