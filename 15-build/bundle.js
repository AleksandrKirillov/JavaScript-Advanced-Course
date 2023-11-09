(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    class Task {
        #message;
        constructor(message) {
            this.#message = message;
        };

        run() {
            console.log(this.#message);
        };
    }

    class User {
        #task;
        constructor(task) {
            this.#task = task;
        }

        do() {
            this.#task.run();
        }
    }

    const task1 = new Task('Clean room');
    const user1 = new User(task1);

    user1.do();

}));
