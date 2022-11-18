const { createApp } = Vue

createApp({
  data() {
    return {
      friends: 25,
      photos: 8,
      comments: 25,
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
