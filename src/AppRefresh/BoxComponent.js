const BoxComponent = (props) => {

    return (
        <div className="border-solid border-2 content-center text-white border-pink-300 m-5 p-10 rounded-xl">
            {props.children}
        </div>
    );

}
export default BoxComponent;