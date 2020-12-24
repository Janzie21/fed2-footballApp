class Footer {
    constructor(holder){
        this.holder = holder;
        this.start();
    }

    start(){
        this.holder.insertAdjacentHTML('beforeend', `
            <p>© Football app copyright Nick Janssen </p>
        `)
    }
}

export default Footer;