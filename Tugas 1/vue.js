const app = Vue.createApp({
    el: '#app'
    data() {
        return {
            products: [
                {
                    id: 1, name: 'Product 1', quantity: 0,
                }
            ],
            showCart: false
            
        };
    }
});