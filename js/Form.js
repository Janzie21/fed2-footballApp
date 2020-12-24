class Form {
    constructor(holder, data) {
        this.holder = holder;
        this.data = data;
        this.start();
    }

    start(){
        this.holder.insertAdjacentHTML('beforeend', `
        <form action="">
        <input
          type="text"
          name="searchString"
          id="searchString"
          placeholder="Search for a specific team. eg: Chelsea"
        />
        <input id="submitBtn" type="submit" value="search" />
      </form>
        `)
    }
}

export default Form;