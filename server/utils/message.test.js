var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Admin';
        var latitute = 16541652;
        var longitute = 2654665413;
        var message = generateLocationMessage(from, latitute, longitute);
        var url = 'https://www.google.com/maps?q=16541652,2654665413';

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});
