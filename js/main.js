const { createApp } = Vue;

createApp({
  data() {
    return {
      dischi: [],
    };
  },
  methods: {
    getDischi() {
      axios.get('index.php').then((response) => {
        this.dischi = response.data;
      });
    },
  },
  created() {
    this.getDischi();
  },
}).mount('#app');
