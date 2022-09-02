export class Model{
    user;
    items;

    constructor(){
        this.user="Hüseyin Ozcan ";
        this.items=[
            new toDoItem("Go to Gym",true),
            new toDoItem("Have a breakfeast",false),
            new toDoItem("Reading a book",false),
            new toDoItem("Watching movie",false)
        ];
    }
}

export class toDoItem{
    description;
    action;
    constructor(description: string,action: boolean){
        this.description=description;
        this.action=action;
    }
}