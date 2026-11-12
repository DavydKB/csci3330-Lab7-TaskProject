//req, res
import services from "../services/services.js"

const getTasks = (req, res, next) => {
    try{
        const allTasks = services.getDB();
        res.status(200).json({
            success: true,
            data: allTasks
        });
    }catch(error){
        next(error);
    }
}
const createTask = (req, res, next) => {
    try{
        const params = req.body;
        const newTask = services.createTask(params.req) 

        res.status(201).json({
            success: true,
            data: newTask
        });
    }catch(error){
        next(error);
    }
    return task;
}

export default {
    getTasks,
    createTask,
}