const todo = require("./todo");
const connection = require("./mongoConnection");

async function main() {
    try{
        const firstTask = await todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        console.log(firstTask);

        const secondTask = await todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
        console.log(await todo.getAllTasks());

        await todo.removeTask(firstTask._id);
        console.log(await todo.getAllTasks());

        await todo.completeTask(secondTask._id);
        console.log(await todo.getTask(secondTask._id));
    }
    catch(err){
        console.log(err);
    }
    finally{
        let connection = await mongoConnection.dbConnection();
        await connection.close();
    }
}
main();