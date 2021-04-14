export default function Skeleton() {
    return (
        <div>
            <h1 className="flex justify-between items-center border-b-2 border-purple-600 w-full pb-2 mb-5 bg-purple-400 h-1/4"></h1>
            <div className="flex flex-wrap overflow-hidden space-x-4">

                <div className="flex-1 bg-purple-400 h-1/4">
                    
                </div>

                <div className="w-6/12 flex flex-wrap flex-col">
                    <h1 className="border-b-2 text-center w-full pb-2 border-purple-500 bg-purple-400 h-1/4"></h1>
                    <ul className="list-inside py-5">
                        <li className="bg-purple-400 h-1/4"></li>
                        <li className="bg-purple-400 h-1/4"></li>
                        <li className="bg-purple-400 h-1/4"></li>
                    </ul>
                    <h1 className="border-b-2 text-center w-full pb-2 border-purple-300 bg-purple-400 h-1/4"></h1>
                    <div className="bg-purple-400 h-1/4">
                        
                    </div>

                    <div>
                        <h2 className="bg-purple-400 h-1/4"></h2>
                        <h4 className="bg-purple-400 my-5 py-3 h-1/4"></h4>
                    </div>

                </div>

            </div>
        </div>
    )
}