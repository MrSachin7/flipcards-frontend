import ReactLoading from "react-loading";

function Spinner() {

    return (
        <div className={"flex justify-center items-center h-dvh w-dvw"}>
            <ReactLoading className={"content-center"} type="spin" height={"10%"} width={"10%"} color={"#000"}/>
        </div>
    )
}

export default Spinner;