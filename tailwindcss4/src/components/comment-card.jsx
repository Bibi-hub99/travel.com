//builds a card component for a comment which includes comment and info about the commenter
import {useMyContext} from "../context/context"

function CommentCard(props){

    const [value] = useMyContext()
    const date = new Date(2004,5,20)

    return (
        <div className={'p-1 flex mb-3 rounded-xl mt-2 bg-white shadow-gray-900 shadow-sm'}>

            <div className={'w-[15%] text-center md:w-[10%]'}>
                <div className={'h-[50px] w-[50px] bg-blue-500 rounded-full text-center pt-3 text-white inline-block'}>
                    <p>{value.icons[3].icon}</p>
                </div>
            </div>

            <div className={'px-2 box-border relative w-[80%]'}>
                <div>
                    <p>{props.user}</p>
                    <p>{props.comment}</p>
                </div>
                <p className={'absolute right-1 top-0'}>{date.getFullYear() +'-'+date.getMonth()+'-'+date.getDate()}</p>
            </div>
        </div>
    )

}

export default CommentCard