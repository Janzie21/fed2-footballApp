import Team from './Team';

class Teams {
    constructor(holder, data) {
        this.holder = holder;
        this.data = data;
        this.gridElement = this.start();

    }

    start() {
        this.holder.insertAdjacentHTML('beforeend', `

            <div class="teamHolder">

            </div>
        `

        );
        return this.holder.querySelector('.teamHolder')
    }

    renderTeams = () => {
        this.gridElement.innerHTML = "";
        if(this.data.teams.length > 0){
            this.data.teams.forEach(team => {
                new Team(this.gridElement,team)
            });
        }
        else this.gridElement.innerHTML = "No teams yet";
        
    }
}

export default (holder, data) =>
    new Teams(holder, data);