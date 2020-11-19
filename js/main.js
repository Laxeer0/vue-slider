const images = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
];

var slider = new Vue({
    el: '#main',
    data: {
      currentImg: 0,
      images,
    },
    methods: {
      btnForward(e) {
        if (this.currentImg == this.images.length - 1) {
          this.currentImg = 0;
        } else {
          this.currentImg++;
        }
      },
      btnBackward(e) {
        if (this.currentImg == 0) {
          this.currentImg = this.images.length - 1;
        } else {
          this.currentImg--;
        }
      },

      }
    }
  );