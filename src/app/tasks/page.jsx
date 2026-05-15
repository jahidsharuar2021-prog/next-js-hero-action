import { AddTask } from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import { Button } from "@heroui/react";
import Link from "next/link";




const TaskPage = async() => {
    const tasks = await getTasks ();

    return (
        <div>
            <h2>Tasks: {tasks.length}</h2>
            <AddTask createATask={createATask}></AddTask>

            <Link href="/tasks/new">
            <Button variant="secondary">Add Task</Button>
            </Link>

            <div className="grid grid-cols-3 gap-4 pt-8">
                {
                  tasks.map(task=> <TaskCard key={task.id} task={task}></TaskCard>)  
                }
            </div>
        </div>
    );
};

export default TaskPage;