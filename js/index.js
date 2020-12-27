import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Teams from './Teams';

const data = {
    teams : [],
    teamDetail : {}
};


new Header(document.body, "Football App", " | The place to look up your favourite team ");
new Form(document.body, data);
const teams = new Teams(document.querySelector("form"), data)
window.addEventListener('getTeams', teams.renderTeams);


new Footer(document.body);
