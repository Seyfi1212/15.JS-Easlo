let id = new URLSearchParams(window.location.search).get("id")
let ikia = document.querySelector(".ikia")

const getAllType = function () {
    fetch(`http://localhost:3000/Solutions/${id}`)
        .then(res => res.json())
        .then(data => {
            ikia.innerHTML = `<div class="ikia"> <img src="${data.img}" alt="">
           <span>${data.name}</span>
           <a>${data.sual}</a>
           <p>${data.info}</p>
        </div>
    `;
        })
        .catch(error=>console.log("error",error))
        
}
getAllType()