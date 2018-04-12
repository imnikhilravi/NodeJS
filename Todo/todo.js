const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuidv1 = require('uuid/v1');

async function createTask(title, description)
{
    const task = {
        '_id': uuidv1(),
        'title': title,
        'description': description,
        'completed': false,
        'completedAt': null
    };
    todoCollection = await todoItems(); 
    let created = await todoCollection.insertOne(task);
    if(created.insertedCount === 0) throw "Task can't be created";
    return task;
}

async function getAllTasks(){
    todoCollection = await todoItems();
    return await todoCollection.find({}).toArray();
}

async function getTask(id){
    todoCollection = await todoItems();
    let task = await todoCollection.findOne({'_id': id});
    if (task != null)
        return task;
    else 
        throw "task not found";
}

async function completeTask(taskId){
    let task = await getTask(taskId);
    if(task != null){
        todoCollection = await todoItems();
        let complete = await todoCollection.updateOne({'_id': taskId},{$set: {'completed': true, 'completedAt': new Date(new Date().getTime()).toLocaleString()}});
        if (complete.updatedCount === 0)
            return "task can't be updated";
        else return await getTask(taskId);
    }
    else throw "No task found";
}

async function removeTask(id){
    let task = await getTask(id);
    if(task != null){
        todoCollection = await todoItems();
        let remove = await todoCollection.removeOne({'_id':id});
        if (remove.deletedCount === 0)
            throw "Cannnot delete the task"
        else return true;

    }
}

module.exports = {createTask: createTask, getAllTasks: getAllTasks, getTask: getTask, completeTask: completeTask, removeTask: removeTask}