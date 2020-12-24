class Header {
    constructor(holder, appName) {
        this.holder = holder;
        this.appName = appName;
        this.start();
    }

    start(){
        this.holder.insertAdjacentHTML('beforeend', `
        <h1> ${this.appName} </h1>
        `)
    }
}

export default Header;