import Header from './Header';
import Footer from './Footer';
import Form from './Form';

const data = {
    teams : [],
    teamDetail : {}
};

new Header(document.body, "Football App", " | The place to look up your favourite team ");
new Form(document.body, data)
new Footer(document.body);
