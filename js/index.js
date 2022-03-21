import CardCarousel from './modules/CardCarousel.js';

const content = {

    "development":{

        1:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"assets/png/projectsImages/1.png"
        },
        2:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"assets/png/projectImages/2.png"
        },
        3:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"assets/png/projectImages/3.png"
        },
        4:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"assets/png/projectImages/4.png"
        },
        5:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"assets/png/projectImages/5.png"
        },
        6:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"assets/png/projectImages/6.png"
        }
    },

    "videos":{
        1:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/1.png"
        },
        2:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/2.png"
        },
        3:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/3.png"
        },
        4:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/4.png"
        },
        5:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/5.png"
        },
        6:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/6.png"
        }
    },
    "design":{
        1:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/1.png"
        },
        2:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/2.png"
        },
        3:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/3.png"
        },
        4:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/4.png"
        },
        5:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/5.png"
        },
        6:{
            href:"https://github.com/ivansanguezax/PortafiolioElemental",
            src:"Assets/png/projectImages/6.png"
        }
    }

}

window.cards = document.querySelectorAll(".item-portafolio");
const cardC = new CardCarousel(content,window.cards);

for(let index = 0; index < 3; index++){
    console.log(document.querySelector(`portafolio-nav-item-${index+1}`).addEventListener("click",()=> cardC.changePage(index)));
}