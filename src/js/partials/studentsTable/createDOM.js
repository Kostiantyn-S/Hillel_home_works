function studentsTableCreateDOM () {
    let element = new CreateElement;

    (function clear () {
        if (document.getElementById('article').innerHTML !== "") {
            clearInterval(slider.timerId);
            clearInterval(slider1.timerId);
            document.getElementById('article').innerHTML = "";
        }
    })();

    (function createForm () {
        element.create('article', 'div').id('studentsTable-title').class('studentsTable-title').innerHTML('Students table').position(0);

        element.create('article', 'form').id('studentsForm').class('studentsForm').position(1);

        element.create('studentsForm', 'div').id('studentsForm-inputs').class('studentsForm-inputs').position(0);

        element.create('studentsForm-inputs', 'div').id('studentsForm-name').class('studentsForm-inputConteiner').position(0);
        element.create('studentsForm-name', 'label').id('label-name').class('studentsForm-label').
        for('input-name').innerHTML('Name: ').position(0);
        element.create('studentsForm-name', 'input').id('input-name').class('studentsForm-input').type('text').
        required(true).placeholder('Kostiantyn').position(1);
        element.create('studentsForm-name', 'span').id('message-name').class('studentsForm-message').
        innerHTML('The name must consist of uppercase or lowercase latin letters or symbols "-" and "space", max length 20 symbols.').position(2);

        element.create('studentsForm-inputs', 'div').id('studentsForm-surname').class('studentsForm-inputConteiner').position(1);
        element.create('studentsForm-surname', 'label').id('label-surname').class('studentsForm-label').
        for('input-surname').innerHTML('Surname: ').position(0);
        element.create('studentsForm-surname', 'input').id('input-surname').class('studentsForm-input').type('text').
        required(true).placeholder('Starchyk').position(1);
        element.create('studentsForm-surname', 'span').id('message-surname').class('studentsForm-message').
        innerHTML('The surname must consist of uppercase or lowercase latin letters or symbols "-" and "space", max length 20 symbols.').position(2);

        element.create('studentsForm-inputs', 'div').id('studentsForm-admission').class('studentsForm-inputConteiner').position(2);
        element.create('studentsForm-admission', 'label').id('label-admission').class('studentsForm-label').
        for('input-admission').innerHTML('Admission year: ').position(0);
        element.create('studentsForm-admission', 'input').id('input-admission').class('studentsForm-input').
        type('number').required(true).placeholder('2006').position(1);
        element.create('studentsForm-admission', 'span').id('message-admission').class('studentsForm-message').
        innerHTML('The admission year must be positive integer consists of four numbers.').position(2);

        element.create('studentsForm-inputs', 'div').id('studentsForm-ending').class('studentsForm-inputConteiner').position(3);
        element.create('studentsForm-ending', 'label').id('label-ending').class('studentsForm-label').
        for('input-ending').innerHTML('Year of ending: ').position(0);
        element.create('studentsForm-ending', 'input').id('input-ending').class('studentsForm-input').
        type('number').required(true).placeholder('2011').position(1);
        element.create('studentsForm-ending', 'span').id('message-ending').class('studentsForm-message').
        innerHTML('The year of ending must be positive integer consists of four numbers.').position(2);

        element.create('studentsForm-inputs', 'div').id('studentsForm-site').class('studentsForm-inputConteiner').position(4);
        element.create('studentsForm-site', 'label').id('label-site').class('studentsForm-label').
        for('input-site').innerHTML('Site: ').position(0);
        element.create('studentsForm-site', 'input').id('input-site').class('studentsForm-input').type('text').
        placeholder('www.google.com').position(1);

        element.create('studentsForm-inputs', 'div').id('studentsForm-filter').class('studentsForm-inputConteiner').position(5);
        element.create('studentsForm-filter', 'label').id('label-filter').class('studentsForm-label').
        for('input-filter').innerHTML('Filter: ').position(0);
        element.create('studentsForm-filter', 'input').id('input-filter').class('studentsForm-input').type('text').
        placeholder('St').position(1);

        element.create('studentsForm', 'div').id('studentsForm-buttons').class('studentsForm-buttons').position(1);
        element.create('studentsForm-buttons', 'input').type('button').value('Add to table').id('button-add').
        class('studentsForm-button').position(0);
        element.create('studentsForm-buttons', 'input').type('button').value('Clear form').id('button-clear').
        class('studentsForm-button').position(1);
        element.create('studentsForm-buttons', 'input').type('button').value('Save table').id('button-save').
        class('studentsForm-button').position(2);
        element.create('studentsForm-buttons', 'input').type('button').value('Apply filter').id('button-applyFilter').
        class('studentsForm-button').position(3);
        element.create('studentsForm-buttons', 'input').type('button').value('Delete filter').id('button-delFilter').
        class('studentsForm-button').position(4);
    })();

    (function createTable () {
        element.create('article', 'table').id('studentsTable').class('studentsTable').position(2);
        element.create('studentsTable', 'tr').id('studentsTable-head').class('studentsTable-head').position(0);
        element.create('studentsTable-head', 'td').id('head-name').class('head-name').innerHTML('Name').position(0);
        element.create('studentsTable-head', 'td').id('head-surname').class('head-surname').innerHTML('Surname').position(1);
        element.create('studentsTable-head', 'td').id('head-admission').class('head-admission').
        innerHTML('Admission year &#11015&#11014').position(2);
        element.create('studentsTable-head', 'td').id('head-ending').class('head-ending').
        innerHTML('Year of ending &#11015&#11014').position(3);
        element.create('studentsTable-head', 'td').id('head-site').class('head-site').innerHTML('Site').position(4);
        element.create('studentsTable-head', 'td').id('head-edit').class('head-edit').position(5);
        element.create('studentsTable-head', 'td').id('head-delete').class('head-delete').position(6);
    })();

    (function loadTable () {
        if (localStorage.getItem('table') !== null) {
            document.getElementById('studentsTable').innerHTML = localStorage.getItem('table');
        }
    })();
}