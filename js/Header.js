class Header {
    constructor(holder, appName, description) {
        this.holder = holder;
        this.appName = appName;
        this.description = description;
        this.start();
    }

    start(){
        this.holder.insertAdjacentHTML('beforeend', `
        <header>
            <h1> ${this.appName} | ${this.description}</h1>
        </header>
        `)
    }
}

export default (holder, appName, description) =>
    new Header(holder, appName, description);