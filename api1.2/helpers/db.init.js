//Zbierzność imion,nazwisk i maili jest przypadkowa(dane testowe)

var User = require('../dal/models/user.model');
var Task = require('../dal/models/task.model');
var Notification = require('../dal/models/notification.model');
var Project = require('../dal/models/project.model');

module.exports = function() {
    var projects = [
        new Project.model({
            name: 'Project1',
            description: 'desc1',
            creationDate: null,
            _creator: null
        }),
        new Project.model({
            name: 'Project2',
            description: 'desc2',
            creationDate: null,
            _creator: null
        }),
        new Project.model({
            name: 'Project3',
            description: 'desc3',
            creationDate: null,
            _creator: null
        }),
        new Project.model({
            name: 'Project4',
            description: 'desc4',
            creationDate: null,
            _creator: null
        })
    ].forEach(function(project) {
        project.save();
    });


    var users = [
        new User.model({
            name: {
                first: 'Jan',
                last: 'Kowalski'
            },
            email: 'jan@kowalski.noeamil',
            password: 'test',
            role: User.role.ADMIN,
            tasks: [],
            notifications: []
        }),
        new User.model({
            name: {
                first: 'Mariusz',
                last: 'Nowak'
            },
            email: 'marius@nowak.noemail',
            password: 'test',
            role: User.role.DEV,
            _tasks: [],
            _notifications: []
        }),
        new User.model({
            name: {
                first: 'Antoni',
                last: 'Przybysz'
            },
            password: 'test',
            email: 'antoni@przybysz.noeamil',
            role: User.role.DEV,
            _tasks: [],
            _notifications: []
        }),
        new User.model({
            name: {
                first: 'Mariusz',
                last: 'Zawadzki'
            },
            password: 'test',
            email: 'mariusz@zawadzki,noemail',
            role: User.role.ADMIN,
            _tasks: [],
            _notifications: []
        }),
        new User.model({
            name: {
                first: 'Antoni',
                last: 'Borowiecki'
            },
            password: 'test',
            email: 'antoni@borowiecki.noemail',
            role: User.role.DEV,
            _tasks: [],
            _notifications: []
        }),
        new User.model({
            name: {
                first: 'Zenon',
                last: 'Borowski'
            },
            password: 'test',
            email: 'zenon@borowski.noemail',
            role: User.role.DEV,
        })].forEach(function(user) {
            user.save();
        });



    var tasks = [
        new Task.model({
            title: 'Task1',
            description: 'implementacja metody 1',
            type: Task.type.STANDARD_REQUEST,
            status: Task.status.UNRESOLVED,
            creationDate: '01-02-2016 21:10:36',
            startDate: '01-02-2016 21:10:36',
            endDate: '01-03-2016 11:10:36',
            _project: null,
            _creator: null,
            _contractor: null
        }),
        new Task.model({
            title: 'Task2',
            description: 'implementacja metody 2',
            type: Task.type.STANDARD_REQUEST,
            status: Task.status.UNRESOLVED,
            creationDate: '02-02-2016 21:10:36',
            startDate: '02-03-2016 21:10:36',
            endDate: '02-13-2016 11:10:36',
            _project: null,
            _creator: null,
            _contractor: null
        }),
        new Task.model({
            title: 'Task3',
            description: 'implementacja metody 3',
            type: Task.type.INCIDEND,
            status: Task.type.UNRESOLVED,
            creationDate: '03-02-2016 21:10:36',
            startDate: '04-02-2016 10:10:36',
            endDate: '04-03-2016 11:10:36',
            _project: null,
            _creator: null,
            _contractor: null
        }),
        new Task.model({
            title: 'Task4',
            description: 'implementacja metody 4',
            type: Task.type.FOR_TESTING,
            status: Task.type.UNRESOLVED,
            creationDate: '01-02-2016 10:10:36',
            startDate: '02-12-2016 11:10:36',
            endDate: '04-11-2016 09:10:36',
            _project: null,
            _creator: null,
            _contractor: null
        }),
        new Task.model({
            title: 'Task5',
            description: 'implementacja metody 5',
            type: Task.type.INCIDEND,
            status: Task.status.UNRESOLVED,
            creationDate: '01-02-2016 11:10:36',
            startDate: '01-03-2016 11:10:36',
            endDate: '01-04-2016 10:10:36',
            _project: null,
            _creator: null,
            _contractor: null
        }),
        new Task.model({
            title: 'Task6',
            description: 'implementacja metody 6',
            type: Task.type.STANDARD_REQUEST,
            status: Task.status.INPROGRESS,
            creationDate: '01-02-2016 21:10:36',
            startDate: '01-02-2016 21:10:36',
            endDate: '01-03-2016 11:10:36',
            _project: null,
            _creator: null,
            _contractor: null
        }),
        new Task.model({
            title: 'Task7',
            description: 'implementacja metody 7',
            type: Task.type.FOR_TESTING,
            creationDate: '04-21-2016 21:10:36',
            startDate: '04-21-2016 21:10:36',
            endDate: '04-21-2016 11:10:36',
            _project: null,
            _creator: null,
            _contractor: null
        }),
    ].forEach(function(task) {
        task.save();
    });


    var notifications = [
        new Notification.model({
            title: 'notif1',
            description: 'You are contributor of Task1',
            crationDate: null,
            _userId: null,
        }),
        new Notification.model({
            title: 'notif2',
            description: 'You are contributor of Task2',
            crationDate: null,
            _userId: null,
        }),
        new Notification.model({
            title: 'notif3',
            description: 'You are contributor of Task3',
            crationDate: null,
            _userId: null,
        }),
        new Notification.model({
            title: 'notif4',
            description: 'You are contributor of Task4',
            crationDate: null,
            _userId: null,
        }),
        new Notification.model({
            title: 'notif5',
            description: 'You are contributor of Task5',
            crationDate: null,
            _userId: null,
        })].forEach(function(notification) {
            notification.save();
        });

    return console.log('db TaskManager has been created...');
}

