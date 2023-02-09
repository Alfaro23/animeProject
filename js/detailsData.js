export const detailsData = () => {
    const preloder = document.querySelector(".preloder");
    
    const renderGanreList = (ganres) => {
        const dropdownBlock = document.querySelector(".header__menu .dropdown");

        dropdownBlock.innerHTML = "";

        ganres.forEach((ganre) => {
            dropdownBlock.insertAdjacentHTML("beforeend", `
            
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `);
        });
    }

    const renderAnimeDetails = (anime, itemID) => {
        const animeItem = anime.find(item => item.id === +itemID);
        const rowBlock = document.querySelector(".anime__details__content");
        const breadCrumb = document.querySelector(".breadcrumb__links span");
        rowBlock.innerHTML = "";
        
        console.log(breadCrumb)
        if(animeItem){
            const cardAnime = `
                <div class="row">
                    <div class="col-lg-3">
                        <div class="anime__details__pic set-bg" data-setbg="${animeItem.image}">
                            <div class="view">
                                <i class="fa fa-eye"></i> ${animeItem.views}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="anime__details__text">
                            <div class="anime__details__title">
                                <h3>${animeItem.title}</h3>
                                <span>${animeItem["original-title"]}</span>
                            </div>

                            <p>${animeItem.description}</p>
                            <div class="anime__details__widget">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <ul>
                                            <li><span>Year aired:</span> ${animeItem.date}</li>
                                            <li><span>Rating:</span> ${animeItem.rating}</li>
                                            <li><span>Genre:</span> ${animeItem.tags.join(", ")}</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            `;
            console.log(breadCrumb)
            breadCrumb.textContent = animeItem.ganre;
            
            
            rowBlock.insertAdjacentHTML("beforeend", cardAnime);
            

            document.querySelectorAll(".set-bg").forEach((elem) => {
                console.log(animeItem)
                elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
            });

            setTimeout(() => {
                preloder.classList.remove("active")
            }, 500);
        }else{
            console.log("Nema");
        }
    }

    // preloder.classList.add("active")

    fetch("./db.json") //"https://animeweb-bf09a-default-rtdb.firebaseio.com/db.json" "./db.json"
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const ganres = new Set();

        const animeID = new URLSearchParams(window.location.search).get("itemId");
        
        data.anime.forEach((item) => {
            ganres.add(item.ganre)
        })

        
        if(animeID){
            renderAnimeDetails(data.anime, animeID);
        }else{
            console.log("Nema")
        }
        
        renderGanreList(ganres);
    })
}