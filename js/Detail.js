import jPopup from 'jPopup';
import '../node_modules/jpopup/dist/css/index.min.css'




class Detail {
    constructor(){
        this.myPopup = new jPopup({ // initialize jPopup
            content: '',
            transition: 'fade',
            onOpen: function ($popupElement) {
                console.log('popup open');
            },
            onClose: function ($popupElement) {
                console.log('popup closed');
            }
        });
    }

    getData = (id) => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + id)
        .then(resp => resp.json())
        .then((data) => {
            this.myPopup.setContent(`
            <h1>${data.strTeam}</h1>
            <p>${data.strAlternate}</p>
            <p>${data.strLeague}</p>
            <p>${data.strStadiumDescription}</p>
            `
            );
            this.myPopup.open();
        })
        .catch(console.log)
    }
}

export default () => 
new Detail();