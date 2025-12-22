import { useRouteError } from "react-router-dom"


const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return(
        <div className="w-full h-screen justify-center flex flex-col items-center text-8xl font-semibold">
            <h1>{err.status}</h1>
            <h1 className="text-red-500">oooopss!!!</h1>
            <h1 className="text-2xl mt-8">{err.error.message}</h1>
        </div>
    )
}

export default Error