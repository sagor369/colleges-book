import Feedback from "./Feedback/Feedback";
import Colloges from "./Header/Colleges/Colloges";
import Header from "./Header/Header";
const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Colloges></Colloges>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;