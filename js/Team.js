class Team {
    constructor(holder,teamObject){
        this.holder = holder;
        this.teamObject = teamObject;
        this.start();
    }

    start() {
        this.holder.insertAdjacentHTML('beforeend', `
            <div class="team">

            <img src="${this.teamObject.strTeamBadge}"></img>
            <p>${this.teamObject.strTeam}</p>
            <p>${this.teamObject.strStadium}</p>
            
            </div>
        `)
    }
}

export default (holder,teamObject) =>
    new Team(holder,teamObject);