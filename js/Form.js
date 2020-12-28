class Form {
    constructor(holder, data) {
        this.holder = holder;
        this.data = data;
        this.formEl = this.start();
        this.getTeamsStart = new CustomEvent("getTeamsStart");
        this.getTeamsEnd = new CustomEvent("getTeamsEnd"); 
        this.setUpEvents();
    }

    start(){
        this.holder.insertAdjacentHTML('beforeend', `
        
        <form action="">
        <div class="search">
        <input
          type="text"
          name="searchString"
          id="searchString"
          placeholder="Search for a specific team. eg: Chelsea"
        />
        <input id="submitBtn" type="submit" value="search" />
        </div>
      </form>
      `
        );
        return this.holder.querySelector('form')
    }

    setUpEvents(){
        this.formEl.addEventListener('submit', this.getData);
    }

    getData = (e) => {
        e.preventDefault();
        const val = this.formEl.querySelector('#searchString').value;
        dispatchEvent(this.getTeamsStart)
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + val)
        .then(resp => resp.json())
        .then((data) => {
            this.data.teams = data.teams;
            dispatchEvent(this.getTeamsEnd)
        })
        .catch(console.log)
    }



}

export default (holder, data) => 
    new Form(holder, data);