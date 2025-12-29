import React from "react";
import "./app.css";

const App = () => {
    const tasks = [
        {
            id: 1,
            title: "Doctors Appointment",
            dueDate: "Feb 5th at 2:30pm",
            status: "pending",
        },
        {
            id: 2,
            title: "Meeting at School",
            dueDate: "Feb 6th at 1:30pm",
            status: "done",
        },
        {
            id: 3,
            title: "Food Shopping",
            dueDate: "Feb 5th at 2:30pm",
            status: "pending",
        },
    ];

    return (
        <div className="bg-blue-200 h-screen">
            <p className="bg-blue-400 text-white p-4 text-center font-bold text-3xl">
                React Task Tracker App
            </p>

            <div className="p-4 bg-white m-4 rounded shadow-md">
                {/* App content goes here */}
                <p className="p-2 rounded text-center text-2xl font-semibold">Tasks</p>
                <div class="w-full h-px bg-gray-300"></div>
                <div>
                    <div className="flex justify-end p-2">
                        <div className="flex items-center gap-x-1 mr-4">
                            <span className="inline-block border-1 w-4 h-4 rounded-full bg-green-100"></span>
                            <p>Done tasks</p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <span className="inline-block border-1 w-4 h-4 rounded-full bg-yellow-100"></span>
                            <p>Pending tasks</p>
                        </div>
                    </div>
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className={`p-2 m-2 rounded shadow-md flex place-content-between ${
                                task.status === "done" ? "bg-green-100" : "bg-yellow-100"
                            }`}
                        >
                            <p className="font-semibold">{task.title}</p>
                            <p>{task.dueDate}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
