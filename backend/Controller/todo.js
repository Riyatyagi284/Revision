import Todo from "../Models/todo.js";

export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newTodo = await Todo.create({ title, description });
        
       res.status(200), res.json({
            data: newTodo,
            msg: 'New TODO created successfully!!'
        })

    } catch (error) {
        console.log("error",error)
       res.status(500), res.json({ msg: 'Error Occured ', error: error.msg });
       //process.exit(1);
    }
}

export const getAllTodo = async (req,res) => {
    try {
        const Todos = await Todo.find({});

        res.status(201), res.json({ data: Todos, msg: 'Successfully find all the Todos!!' })
    } catch (error) {
        console.log("error", error)
        res.status(500), res.json({ msg: 'error occured!',  error: error.msg });
        // process.exit(1);
    }
}

export const deleteTodo = async (req,res) => {
    try{ 
        const {id} = req.params;
        const deleteTodo = await Todo.findByIdAndDelete({_id: id});

        res.status(200), res.json({ msg: 'Selected Todo deleted successfully'});
    } catch(error) {
        console.log("error", error);
        res.status(500), res.json({ error: error, msg: 'Error occured while deleting this todo'});
        // process.exit(1)
    }
}

export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const updateTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200), res.json({ data: updateTodo, msg: 'Selected todo updated successfully' });
    } catch (error) {
        res.status(500), res.json({ error: error, msg: 'Error occur while updating the selected todo'});
    }
}