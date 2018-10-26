import EventEmitter from 'eventemitter3';

class DataSource extends EventEmitter {
    runEvent() {
        this.emit('EVENT', 'some message');
    }
}

export default DataSource;
