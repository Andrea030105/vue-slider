const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            imgArray: [
                {
                    urlImg: "./img/01.webp",
                    titolo: "Spider-Man",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
                },
                {
                    urlImg: "./img/02.webp",
                    titolo: "Ratchet & Clank",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
                },
                {
                    urlImg: "./img/03.webp",
                    titolo: "Fortnite",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
                },
                {
                    urlImg: "./img/04.webp",
                    titolo: "Stray",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
                },
                {
                    urlImg: "./img/05.webp",
                    titolo: "Avengers",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
                },
            ],

            itemsActive: 0,

            autoPlay: null,
        }
    },

    created() {
        this.startAutoPlay();
    },

    methods: {
        changeImg(index) {
            this.itemsActive = index;
        },

        next() {
            this.itemsActive++
            if (this.itemsActive > this.imgArray.length - 1) {
                this.itemsActive = 0
            }
        },

        prev() {
            this.itemsActive--
            if (this.itemsActive < 0) {
                this.itemsActive = this.imgArray.length - 1
            }
        },

        startAutoPlay() {
            this.autoPlay = setInterval(() => {
                this.next();
            }, 300)
        },

        stopAutoPlay() {
            clearInterval(this.autoPlay)
        },
    }
}).mount('#app')