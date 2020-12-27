class Team {
    constructor(holder,filmObject){
        this.holder = holder;
        this.filmObject = filmObject;
        this.start();
    }

    start() {
        this.holder.insertAdjacentHTML('beforeend', `
            <div class="team">

            ${this.filmObject.strTeam}
            <img src="https://www.thesportsdb.com/images/media/team/jersey/">${this.filmObject.strTeamJersey}</img>
            

            </div>
        `)
    }
}

export default Team;