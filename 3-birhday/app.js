'use strict';

const user1 = {
    name: 'Vasily',
    birthday: '1996-06-03'
};

const user2 = {
    name: 'Tanya',
    birthday: '2021-01-01'
};

function calcAge(date){
    const today = new Date();
    const birthDate = new Date(date);

    let age = today.getFullYear() - birthDate.getFullYear();
    let diffMonth = today.getMonth() - birthDate.getMonth();
    let diffDay = today.getDate() - birthDate.getDate();

    if ( diffMonth < 0 || ( diffMonth === 0 && diffDay > 0 )){
        age--;
    };
    return age >= 14;
}

console.log(calcAge(user1.birthday));
console.log(calcAge(user2.birthday));