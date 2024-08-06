import { useParams } from "@remix-run/react";
import { sculptureList } from "./data";

export default function GetCourse() {
    const { courseId } = useParams();
    console.log("Course ID:", courseId);

    const course = sculptureList.find(item => item.id === Number(courseId));

    if (!course) {
        console.log('Wrong Course, please try again!');
        return <p className="text-red-500 text-lg font-semibold text-center">Course not found. Please check the ID and try again.</p>;
    }

    return (
        <div className="p-8 bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="max-w-md w-full bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-64 relative">
                    <img className="w-full h-full object-cover" src={course.url} alt={course.name} />
                </div>
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-blue-700 mb-4">{course.name}</h1>
                    <div className="text-gray-800 text-lg">
                        <p className="mb-4"><span className="font-semibold text-gray-600">ชื่อเล่น:</span> {course.artist}</p>
                        <p><span className="font-semibold text-gray-600">ข้อมูลตัวละคร:</span> {course.alt}</p>
                        <p><span className="font-semibold text-gray-600"></span> {course.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}