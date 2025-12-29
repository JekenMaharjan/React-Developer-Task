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
        <div className="bg-blue-200 min-h-screen">
            <p className="bg-blue-400 text-white p-4 text-center font-bold text-3xl">
                React Task Tracker App
            </p>

            <div className="p-4 bg-white m-4 rounded shadow-md max-w-2xl mx-auto">
                <p className="p-2 text-center text-2xl font-semibold">Tasks</p>
                <div className="w-full h-px bg-gray-300 my-2"></div>

                {/* Legend */}
                <div className="flex justify-end p-2 gap-x-4 text-sm">
                    <div className="flex items-center gap-x-1">
                        <span className="inline-block w-4 h-4 rounded-full bg-green-200 border"></span>
                        <p>Done</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <span className="inline-block w-4 h-4 rounded-full bg-yellow-200 border"></span>
                        <p>Pending</p>
                    </div>
                </div>

                {/* Task List */}
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`p-3 m-2 rounded shadow-sm flex justify-between items-center ${task.status === "done" ? "bg-green-100" : "bg-yellow-100"
                            }`}
                    >
                        <div>
                            <p className="font-semibold">{task.title}</p>
                            <p className="text-sm text-gray-600">{task.dueDate}</p>
                        </div>

                        <span
                            className={`w-3 h-3 rounded-full ${task.status === "done" ? "bg-green-500" : "bg-yellow-500"
                                }`}
                        ></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
