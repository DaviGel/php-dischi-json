const { createApp } = Vue;

createApp({
  data() {
    return {
      dischi: [],
      disco: null,
    };
  },
  methods: {
    getDischi() {
      axios.get('index.php').then((response) => {
        this.dischi = response.data;
      });
    },

    getDisco(index) {
      axios.get('index.php/?index=' + index).then((response) => {
        this.disco = response.data;
      });
    },

    changeStatus() {
      this.disco = null;
    },
  },
  created() {
    this.getDischi();
  },
}).mount('#app');
