class Employee {
    constructor(id, first_name, last_name, role_id, manager_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }
    getId() {
        return this.id;
    }
    getfirst_name() {
        return this.first_name;
    }
    getlast_name() {
        return this.last_name;
    }
    getrole_id() {
        return this.getrole_id;
    }
    getmanager_id() {
        return this.manager_id;
    }
}

module.exports = Employee;