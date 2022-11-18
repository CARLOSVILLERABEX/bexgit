const { createApp } = Vue

createApp({
  data() {
    return {
      friends: 25,
      photos: 8,
      comments: 15,
      name: "Jenna Stones",
      city: "Los Angeles, California",
      date: null,
      edad: 21
    }
  },
  methods: {
    showDate(){
      this.date =  Date();
    }
  }
}).mount('#app')
