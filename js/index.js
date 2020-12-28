import header from './Header';
import loading from './Loading';
import footer from './Footer';
import form from './Form';
import teams from './Teams';
import detail from './Detail';


const data = {
    teams : [],
    loading: false,
    teamDetail : {},
};

header(document.body, "Sports App", " | The place to look up your favourite team ");
form(document.body, data);
const loader = loading(document.querySelector('form'));
const teamsdata = teams(document.body, data);
window.addEventListener('getTeamsStart', loader.show);
window.addEventListener('getTeamsEnd', teamsdata.renderTeams);
window.addEventListener('getTeamsEnd', loader.hide);
footer(document.body);

const myDetail = detail();

 window.addEventListener('myDetailEvent', function(e){
     myDetail.getData(e.detail);
 });