function ComponentLoader(){

    function MockUp (){

    return (
        <div className={'bg-white shadow-gray-300 shadow-xl p-2 box-border'}>
            <div className={'h-[100px] bg-gray-300'}>

            </div>
            <br></br>
            <div className={'bg-gray-300 h-[20px]'}>

            </div>
        </div>
        )
    }

    const mockUpData = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]

    return (
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-20 w-[98%] ml-[1%]'}>
            {mockUpData.map((each,index)=>{
                return (
                    <MockUp key={`offer-loader-${index}`}/>
                )
            })}
        </div>
    )

}

export default ComponentLoader