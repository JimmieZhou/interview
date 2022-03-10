const map = {
    'coder': ['code', 'dev'],
    'productor': ['doc', 'argue'],
    'boss': ['meeting', 'drinking']
}
function User(name, age, career, work) {
    this.name = name
    this.age = age
    this.career = career
    this.work = work
}

function Factory(name, age, career) {
    return new User(name, age, career, map[career])
}