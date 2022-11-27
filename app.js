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
      courses: 5
    }
  },
  methods: {
    showDate(){
      this.date =  Date();
    }
  }
}).mount('#app')
