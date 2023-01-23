const app = Vue.createApp({
	data() {
		return {
			hammerCards: hammerCards,
		};
	},

	methods: {},
});

app.component('HunterCardComponent', HunterCardComponent);

app.config.globalProperties.$log = console.log;

app.mount('#app');

window.app = app;