// todo : Apply dynamic title name for webpage
document.title = "Dynamic Title"

// todo : Display nav-list items on webpage
let navList = document.getElementById('navList')
let navItems = ['All' , 'Mobile' , 'Laptop' , 'KItchen' , 'Toys' , 'Furniture' , 'Fashion' , 'Cosmetics']
navItems.map((elem) => {
    navList.innerHTML += `<li><a href = ""> ${elem} </a></li>`
})

let cardsContainer = document.getElementById("cards-container")


let aside = document.getElementById('aside')

asidelistdata = ['Samsung' , 'Oppo', 'Oneplus' , 'Apple' , 'Realme' , 'Redmi']

asidelistdata.map((elem) => {
    aside.innerHTML += `<input type="checkbox"><label>${elem}</label><br>`
})

// todo : Create card in Main container
let cardData = [
    {
        id : 1,
        title : "Mobile",
        Image : "https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis tenetur sunt quaerat, unde minima obcaecati a dolores." 
    },
    {
        id : 2,
        title : "Laptop",
        Image : "https://cdn.pixabay.com/photo/2017/06/20/23/15/coffee-2425303_1280.jpg",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis tenetur sunt quaerat, unde minima obcaecati a dolores." 
    },
    {
        id : 3,
        title : "TV",
        Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3gWYGu_8C-OhgHcsLlTq9BA0EeCAIbZXFNksemZ55QhYIRaEpLkRZXs&s=10",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis tenetur sunt quaerat, unde minima obcaecati a dolores." 
    },
    {
        id : 4,
        title : "Monitor",
        Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvsD6D5zCzpw-pqIedpIJMJ3rCMNVt0M2H3V--PeJolT9Wmv-1H4kz0-Y&s=10",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis tenetur sunt quaerat, unde minima obcaecati a dolores." 
    },
    {
        id : 5,
        title : "Headphone",
        Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWa4b0RYbQv6KXHhn5PsoG7Z3ruhjA0FPlHlfqGveN_lOU8V05nRp6hjc&s=10",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis tenetur sunt quaerat, unde minima obcaecati a dolores." 
    },
    {
        id : 5,
        title : "Headphone",
        Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWa4b0RYbQv6KXHhn5PsoG7Z3ruhjA0FPlHlfqGveN_lOU8V05nRp6hjc&s=10",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis tenetur sunt quaerat, unde minima obcaecati a dolores." 
    },
    {
        id : 5,
        title : "Headphone",
        Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWa4b0RYbQv6KXHhn5PsoG7Z3ruhjA0FPlHlfqGveN_lOU8V05nRp6hjc&s=10",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis tenetur sunt quaerat, unde minima obcaecati a dolores." 
    }
]


cardData.map((obj) => {
    let {id , title ,Image, desc} = obj
    cardsContainer.innerHTML += `
    <div class = "card" >
        <img src = ${Image} alt = "No image">
        <div class = "title" > ${title} </div>
        <p>${desc}</p>
    </div>
    `
})