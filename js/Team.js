class Team {
    constructor(holder,teamObject){
        
        this.holder = holder;
        this.teamObject = teamObject;
        this.teamRef = this.start();
        this.setUpEvents();
    }

    start() {
        this.holder.insertAdjacentHTML('beforeend', `
            <div class="team" data-id="${this.teamObject.idTeam}">

            <img src="${this.teamObject.strTeamBadge}"></img>
            <p>${this.teamObject.strTeam}</p>
            <p>${this.teamObject.strStadium}</p>
            <p>${this.teamObject.strWebsite}</p>
            
            </div>
        `)
        return this.holder.querySelector('.team:last-child');
    }

    setUpEvents(){
        this.teamRef.addEventListener('click',  (e) => {
            console.log(e.target)
            var event = new CustomEvent('myDetailEvent', {
                detail: e.target.dataset.id
            });
            dispatchEvent(event)
        })
    }}

export default (holder,teamObject) =>
    new Team(holder,teamObject);