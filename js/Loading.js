class Loading {
    constructor(holder, data){
        this.holder = holder;
        this.data = data;
        this.loaderRef = this.start();
    }

    start() {
        this.holder.insertAdjacentHTML('beforeend', `
           
        <div class="loading hidden">LOADING... </div>

        `);
        return this.holder.querySelector('.loading');
    }

    show = () => {
        this.loaderRef.classList.remove('hidden')
    }

    hide = () => {
        this.loaderRef.classList.add('hidden')
    }
}

export default (holder, data) => 
    new Loading(holder, data);