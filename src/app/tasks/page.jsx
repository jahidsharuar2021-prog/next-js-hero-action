import { AddTask } from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { getTasks } from "@/lib/tasks";




const TaskPage = async() => {
    const tasks = await getTasks ();

    return (
        <div>
            <h2>Tasks: {tasks.length}</h2>
            <AddTask></AddTask>
            <div className="grid grid-cols-3 gap-4 pt-8">
                {
                  tasks.map(task=> <TaskCard key={task.id} task={task}></TaskCard>)  
                }
            </div>
        </div>
    );
};

export default TaskPage;