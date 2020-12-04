
class User {
    constructor(id, firstname, lastname, birthday, email, gender, interest, username, password){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.email = email;
        this.gender = gender;
        this.interest = interest;
        this.username = username;
        this.password = password;
    }
}

export default User;

class users {
    constructor(){
    this.users = [
        {username: 'Chris', password: '123'},
        {username: 'Phil', password: '1234'},
        {username: 'Mo', password: '12345'}
    ]};
}

export default users;