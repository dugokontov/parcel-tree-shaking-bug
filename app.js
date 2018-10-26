import DataSource from './DataSource';

function showMessage(content) {
    console.log(content);
}

window.onload = function() {
    const foo = new DataSource();
    foo.on('EVENT', showMessage);
    foo.runEvent();
}
