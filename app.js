const { createApp } = Vue

createApp({
  data() {
    return {
      friends: 25,
      photos: 5,
      comments: 15,
      name: "Jenna Stones",
      city: "Los Angeles, California",
      date: null
    }
  },
  methods: {
    showDate(){
      this.date =  Date();
    }
  }
}).mount('#app')
