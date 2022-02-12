"use strict"

fetch('https://www.googleapis.com/books/v1/volumes?q=python')
.then(res => res.json())
.then(data =>{
    // console.log(data.totalItems)
    document.getElementById('result__span').innerHTML=data.totalItems;   
    let dateWon = "";
    data.items.map((values)=>{
        console.log(values)
        dateWon+=` 
        <li class="hero__item card">
        <a class="readed___book" href="${values.previewLink}">
        <img class="card__img" src="${values.volumeInfo.imageLinks.smallThumbnail}" alt="book-img">
        </a>
        <div>
        <h2 class="card__title">${values.volumeInfo.title}</h2>
        <p class="card__text">${values.volumeInfo.authors}</p>
        <p class="card__text">${values.volumeInfo.publishedDate}</p>
        </div>
        <div>
        <div>
        <div>
        <button class="bookmark__btn">Bookmark</button>
        <button class="btn more__btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">More Info</button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
        <h3 id="offcanvasRightLabel">${values.volumeInfo.title}</h3>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        <div class="center-xs">
        <img class="canvas__img" src="${values.smallThumbnail}" alt="book-img">
        <p class="canvas__text">${values.description}</p>
        </div>
        <ul class="canvas__list">
        <li class="canvas__item">
        <h4 class="canvas__infotitle ">Author : <span class="canvas__infospan">${values.authors}</span></h4>
        </li>
        <li class="canvas__item">
        <h4 class="canvas__infotitle">Published : <span class="canvas__infospan">${values.publishedDate}</span></h4>
        </li>
        <li class="canvas__item">
        <h4 class="canvas__infotitle">Publishers: <span class="canvas__infospan">${values.publisher}</span></h4>
        </li>
        <li class="canvas__item">
        <h4 class="canvas__infotitle">Categories : <span class="canvas__infospan">${values.categories}</span></h4>
        </li>
        <li class="canvas__item">
        <h4 class="canvas__infotitle">Pages Count : <span class="canvas__infospan">${values.pageCount}</span></h4>
        </li>
        </ul>
        </div>
        <div class="canvas__read">
        <button class="canvas__btn" href="${values.previewLink}">Read</button>   
        </div>
        </div>          
        </div>
        </div>
        <button class="read__btn" href="${values.previewLink}" >Read</button>
        </div>
        </li>
        `
    });
    document.getElementById("hero__list").innerHTML+=dateWon;
    
}).catch((err)=>{
    console.log(err);

})



fetch('https://www.googleapis.com/books/v1/volumes?q=python').then(res => res.json).then(data =>data)
console.log(data);




