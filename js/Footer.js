class Footer {
    constructor(holder){
        this.holder = holder;
        this.start();
    }

    start(){
        this.holder.insertAdjacentHTML('beforeend', `
        <footer>
            <p>© Football app copyright Nick Janssen </p>
        </footer>
        `)
    }
}

export default (holder) =>
    new Footer(holder);