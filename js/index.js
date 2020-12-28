import header from './Header';
import footer from './Footer';
import form from './Form';
import teams from './Teams';

const data = {
    teams : [],
    teamDetail : {}
};

header(document.body, "Sports App", " | The place to look up your favourite team ");
form(document.body, data);
const teamsdata = teams(document.querySelector("form"), data)
window.addEventListener('getTeams', teamsdata.renderTeams);


footer(document.body);
