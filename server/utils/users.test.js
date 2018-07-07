const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'boooring room'
        },{
            id: '2',
            name: 'Jen',
            room: 'boooring room'
        },{
            id: '3',
            name: 'Sasha',
            room: 'kitchen'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Ron',
            room: 'Fancy guys'
        }
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for boooring room', () => {
        var userList = users.getUserList('boooring room');

        expect(userList).toEqual(['Mike', 'Jen']);
    });

    it('should return names for kitchen', () => {
        var userList = users.getUserList('kitchen');

        expect(userList).toEqual(['Sasha']);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '666';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '3';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '666';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });
});
