import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    // stop-19 
    // i want to draw a line chart for math marks.please give me data of 10 students.give me id, name, math - marks
    const mathMarksData = [
        { "id": 1, "name": "Student 1", "math_marks": 78, "physics_marks": 85, "chemistry_marks": 72 },
        { "id": 2, "name": "Student 2", "math_marks": 85, "physics_marks": 90, "chemistry_marks": 88 },
        { "id": 3, "name": "Student 3", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 76 },
        { "id": 4, "name": "Student 4", "math_marks": 88, "physics_marks": 92, "chemistry_marks": 89 },
        { "id": 5, "name": "Student 5", "math_marks": 76, "physics_marks": 75, "chemistry_marks": 80 },
        { "id": 6, "name": "Student 6", "math_marks": 90, "physics_marks": 86, "chemistry_marks": 78 },
        { "id": 7, "name": "Student 7", "math_marks": 82, "physics_marks": 78, "chemistry_marks": 85 },
        { "id": 8, "name": "Student 8", "math_marks": 95, "physics_marks": 94, "chemistry_marks": 91 },
        { "id": 9, "name": "Student 9", "math_marks": 89, "physics_marks": 87, "chemistry_marks": 84 },
        { "id": 10, "name": "Student 10", "math_marks": 81, "physics_marks": 80, "chemistry_marks": 92 }
    ]


    return (
        <div>
            {/* step-20  */}
            <LChart width={900} height={400} data={mathMarksData}>
                <XAxis dataKey={'name'}/>
                <YAxis></YAxis>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'chemistry_marks'} stroke='black'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;