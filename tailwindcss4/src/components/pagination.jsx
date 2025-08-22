//builds pagination links for showing items in portions and not overload the app
import Button from "../components/button"
import {useState,useEffect} from "react"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Pagination(props){

 
    //we assign these styled to pagination buttons based on logic if its current opened or not
    const allActive = 'px-5 py-1 rounded-xl mr-3 cursor-pointer '//applies to all
    const inActive =  allActive +'bg-gray text-black hover:bg-gray-400 '//applies to inactive
    const active = inActive +'bg-black text-white'//applie to active

    const prevIndex = Number(props.prevIndex)
    const prevSlide = Number(props.prevSlide)

    const [pages,setPages] = useState([
        {
            number:1,
            isOpened:false,
            skip:0,
        },
        {
            number:2,
            isOpened:false,
            skip:2
        },
        {
            number:3,
            isOpened:false,
            skip:4
        },
        {
            number:4,
            isOpened:false,
            skip:6
        }
    ])


    useEffect(()=>{

        if(prevIndex === 0){

            setPages([

                {
                    number:1,
                    isOpened:false,
                    skip:0
                },

                {
                    number:2,
                    isOpened:false,
                    skip:2
                },

                {
                    number:3,
                    isOpened:false,
                    skip:4
                },

                {
                    number:4,
                    isOpened:false,
                    skip:6
                },

            ])

        }

        if(prevSlide > 4){
            
            setPages((oldValue) => {


                return [

                    {
                        number:prevSlide - 2,
                        isOpened:false,
                        skip:prevIndex - 4
                    },
                    {
                        number:prevSlide - 1,
                        isOpened:false,
                        skip:prevIndex - 2
                    },
                    {
                        number:prevSlide,
                        isOpened:false,
                        skip:prevIndex
                    },
                    {
                        number:prevSlide + 1,
                        isOpened:false,
                        skip:prevIndex + 2
                    }

                ]
                
            })
        }


        setPages((oldValue) => {
            
            return oldValue.map((each) => {
                return each.skip === parseFloat(prevIndex) ? {...each,isOpened:true}:{...each}
            })

        })

    },[prevIndex])
    

    //function handles pagination logic and calls after the one on the parent component
    const checkFn = (skip,elemNum,prevIndex)=>{


        props.handlePage(skip,elemNum,prevIndex).then(()=>{

            setPages((oldValue)=>{

                const findLength = oldValue.length
                const lastElement = oldValue.findLast((each)=>each)
                const clickElementIndex = oldValue.findIndex((each) => each.number === elemNum)

                let x = [...oldValue]
    
                if(clickElementIndex === findLength - 1){
                    x = [...oldValue.slice(1),{number:lastElement.number + 1,isOpened:false,skip:lastElement.skip + 2}]
                }
                
                if(clickElementIndex === 0){

                    const firstElement = oldValue.find((each)=>{
                        return each
                    })

                    if(firstElement.number !== 1){

                        x = [...oldValue.slice(0,3)]
                        x.unshift({number:firstElement.number - 1,isOpened:false,skip:firstElement.skip - 2})

                    }
                    
                }

                return x.map((each) => {
                    return elemNum ===  each.number ? {...each,isOpened:true}:{...each,isOpened:false}
                })

            })
            

        })

    }

    const handleArrow = (direction) => {

        setPages((oldValue) => {

            let x = [...oldValue]

            const findElem = x.find((each) => {
                return each.isOpened === true
            })


            const firstElem = x.find((each) => {
                return each
                //returning just the first element without any logic delibately
            })


            const lastElemIndex = x.findIndex((each)=>{
                return each.isOpened
            })


            const findLength = x.length

            let nextElem;//stores 

            
            if(direction === 'forward'){
                nextElem = findElem.number + 1
                props.handlePageArrow(findElem.skip + 2,findElem.number + 1)
            }else{
                nextElem = findElem.number - 1
                console.log(nextElem)
                if(findElem.skip > 0){
                    props.handlePageArrow(findElem.skip - 2,findElem.number - 1)
                }
            }


            if(nextElem > 0){

                
                if(lastElemIndex + 1 === findLength && direction === "forward"){
                    x = [...x.slice(1),{number:findElem.number + 1,isOpened:true,skip:findElem.skip + 2}]

                }else if(firstElem.number > 1  && direction === "back"){
                    x = [{number:firstElem.number -  1,isOpened:true,skip:firstElem.skip - 2},...x.slice(0,3)]

                }
                
                return x.map((each) => {
                    return each.number === nextElem ? {...each,isOpened:true}:{...each,isOpened:false}
                })

            }

            return x
            
        })


    }


    return (
        <div className={`${props.style}`}>
        <Button
        btnInnerText={<FaAngleLeft className={'inline'}/>}
        btnStyle={'text-red mr-5 text-[1.1rem] hover:bg-gray-400 py-1 px-2 rounded-xl cursor-pointer'}
        handleClick={()=>handleArrow('back')}/>
           {
            pages.map((each,index)=>{
                //const isActive = each
                return (
                    <Button
                    key={`pages${index}`}
                    btnInnerText={each.number}
                    btnStyle={each.isOpened ? active : inActive}
                    handleClick={()=>checkFn(each.skip,each.number,props.prevIndex)}
                    />
                )
            })
           }
           <Button 
           btnInnerText={<FaAngleRight className={'inline'}/>}
           btnStyle={'text-red mr-5 text-[1.1rem] hover:bg-gray-400 py-1 px-2 rounded-xl cursor-pointer'}
           handleClick={()=>handleArrow('forward')}
           />
        </div>
    )

}

export default Pagination