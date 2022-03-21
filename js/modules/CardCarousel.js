class CardCarousel{
    constructor(content, cards){
        this.content = content;
        this.pages = ["development", "videos", "design"];
        this.page = 0;
        this.cards = cards;
        this.changePage(0);
        this.updateContent = this.updateContent.bind(this); 
    }

    innerContent(data, div){
        div.innerHTML = `
            <a href="${data.href}">
            <img src="${data.src}" alt="Proyectos">
            </a>
        `;
    }

    updateContent(){
        this.cards.forEach((element, index)=>{
            this.innerContent(this.content[this.page[this.page]] [index+1], element);
        })
    }


    changePage(page){
        this.page = page;
        this.updateContent;
        for(let index = 0; index < 3; index++){
            document.querySelector(`#portafolio-nav-item-${index+1}`).className = index == 0 ? "active" :'';
        }
    }
}