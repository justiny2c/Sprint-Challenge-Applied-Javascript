class Carousel {
    constructor(element){
        this.element = element;
        this.lButton = document.querySelector(".left-button");
        this.rButton = document.querySelector(".right-button");
        this.images = document.querySelectorAll(".carousel img");
        this.index = 0;
        this.image = this.images[this.index]
        this.image.style.display = "block"

        this.lButton.addEventListener("mouseover", () => this.goLeft())
        this.lButton.addEventListener("mouseover", () => this.goReft())

    }
    goLeft(){

    }
    goReft(){
        
    }

}

let carousel = document.querySelector(".carousel");
carousel.forEach(element => newCarousel(element));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
