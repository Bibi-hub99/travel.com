//builds pagination links for showing items in portions and not overload the app
import Button from "../components/button"
import {useState} from "react"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Pagination(props){

 
    const allActive = 'px-5 py-1 rounded-xl mr-5 '
    const inActive =  allActive +'bg-gray text-black hover:bg-gray-400 '
    const active = inActive +'bg-black text-white'

    const [pages,setPages] = useState([
        {
            number:1,
            isOpened:true,
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

    const checkFn = (skip,elemNum)=>{

        props.handleClick(skip,elemNum).then(()=>{


            setPages((oldValue)=>{

                const findLength = oldValue.length
                const lastElement = oldValue.findLast((each)=>each)
                const clickElementIndex = oldValue.findIndex((each) => each.number === elemNum)

                let x = [...oldValue]
    
                if(clickElementIndex === findLength - 1){
                    x = [...oldValue.slice(1),{number:lastElement.number + 1,isOpened:false,skip:lastElement.skip + 10}]
                }
                
                if(clickElementIndex === 0){

                    const firstElement = oldValue.find((each)=>{
                        return each
                    })

                    if(firstElement.number !== 1){

                        x = [...oldValue.slice(0,3)]
                        x.unshift({number:firstElement.number - 1,isOpened:false,skip:firstElement.skip - 10})

                    }
                    
                }

                return x.map((each) => {
                    return elemNum ===  each.number ? {...each,isOpened:true}:{...each,isOpened:false}
                })

            })
            

        })

    }

    console.log(pages)

    return (
        <div className={`${props.style}`}>
        <Button
        btnInnerText={<FaAngleLeft className={'inline'}
        btnStyle={'cursor-pointer bg-green-400'}/>}/>
           {
            pages.map((each,index)=>{
                //const isActive = each
                return (
                    <Button
                    key={`pages${index}`}
                    btnInnerText={each.number}
                    btnStyle={each.isOpened ? active : inActive}
                    handleClick={()=>checkFn(each.skip,each.number)}/>
                )
            })
           }
           <Button 
           btnInnerText={<FaAngleRight className={'inline'}/>}
           />
        </div>
    )

}

export default Pagination