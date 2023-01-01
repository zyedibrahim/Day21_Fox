var heading = document.querySelector('.heading')
var heading2 = document.querySelector('.heading2')
var container = document.querySelector(".container")

var create_card_f = document.createElement('div')
create_card_f.setAttribute('class','black')
create_card_f.classList.add('mt-5')
// container.append(create_card_f)
heading.insertAdjacentElement("afterend",create_card_f)

var row = document.createElement('div')
row.setAttribute('class','row')
create_card_f.append(row)



for( var i=0;i<18;i++){

async function dogs(){

    var dogsurl = 'https://randomfox.ca/floof/'

var fetch_dogs = await fetch(dogsurl)
var json_dogs = await fetch_dogs.json()

console.log(json_dogs.image);


    var catsurl = 'https://catfact.ninja/fact'

var fetch_cats = await fetch(catsurl)
var json_cats = await fetch_cats.json()



console.log(json_cats.fact);


var create_col_md_3 = document.createElement('div')
create_col_md_3.setAttribute('class','col-md-4')
row.append(create_col_md_3)

    var create_card_f = document.createElement('div')
    create_card_f.setAttribute('class', 'card')
    create_card_f.classList.add('mb-5')
    create_col_md_3.append(create_card_f)

    var create_img = document.createElement('img')
    create_img.setAttribute('src',json_dogs.image)
    create_img.setAttribute('class', 'card-img')
    create_img.classList.add('h-100vh')

    create_card_f.append(create_img)

var create_card_body_f = document.createElement('div')
create_card_body_f.setAttribute('class','card-body')
create_card_body_f.innerHTML=` <p><small class='text-muted' >${json_cats.fact}</small></p> `
create_card_f.append(create_card_body_f)


}

dogs()



}