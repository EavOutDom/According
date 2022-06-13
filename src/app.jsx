import Question from "./question.jsx";
import questions from "./data";
// console.log(questions);
function App() {
    return (
        <div className="mt-20 flex justify-center">
            <div className="bg-white min-h-80 w-[42rem] p-3 flex rounded-xl shadow-xl">
                <h2 className="w-60 font-bold p-2 text-2xl">
                    Questions And Answers About Login
                </h2>
                <div className="p-2">
                   {questions.map((data) => {
                    return (<Question key={data.id} info={data.info} title={data.title}/>)
                   })} 
                </div>
            </div>
        </div>
    );
}

export default App;
