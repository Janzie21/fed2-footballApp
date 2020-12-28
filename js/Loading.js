class Loading {
    constructor(holder){
        this.holder = holder;
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

export default (holder) => 
    new Loading(holder);