//returns comments information about the service for the clients and for adding own comment
import {useState,useEffect} from "react"
import Button from "../components/button"
import {useParams} from "react-router-dom"
import {addComment,getProductData} from "../crud/services"
import {useMyContext} from "../context/context"
import CommentCard from "../components/comment-card"

function CommentsPage(){

    const [comment,setComment] = useState("")//stores input from comment
    const {serviceID} = useParams()
    const [value,jwtToken,setJwtToken,expIn,setExpIn,accountType,setAccountType] = useMyContext()
    const [comments,setComments] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const handleChange = (evt) => {
        //handles input change
        const {value} = evt.target
        setComment(value)
    }

    const handleAddComment = async(evt) => {

        evt.preventDefault()

        if(comment.trim() !== ""){

            try{
                const {data} = await addComment({
                    serviceID,
                    comment,
                    jwtToken
                })
                setComments(data.comments.comments)
                setComment("")
            }catch(err){
                console.log(err)
            }

        }

    }

    useEffect(()=>{

        const fetchComments = async () => {
            try{
                setIsLoading(true)
                const {data} = await getProductData({serviceID,jwtToken})
                if(data.serviceID){
                    setComments(data.comments.comments)
                }
                setIsLoading(false)
            }catch(err){
                console.log(err)
            }
        }

        fetchComments()

    },[])

    const isComment = comment.trim() !== "" ? 'bg-black cursor-pointer':'bg-gray-300'

    return (
        <div className={''}>

            <div className={'relative w-[100%] pt-6'}>
                <textarea 
                className={'border-b-1 resize-none w-full outline-none pr-24'} 
                rows={'1'}
                onChange={handleChange}
                placeholder={'Add Comment'}></textarea>
                <Button
                btnInnerText={'Comment'}
                btnType={'button'}
                handleClick={handleAddComment}
                btnStyle={`${isComment} text-white absolute right-1 top-[5%] px-1 py-2 rounded-xl`}/>
            </div>

            <div className={''}>
                {isLoading && <p className={'text-center'}>fetching comments...</p>}
                {
                    comments.length > 0 ? comments.map((each)=>{
                        return (
                            <CommentCard key={`comments${each._id}`} user={each._id.slice(0,10)} comment={each.comment}/>
                        )
                    }):<p>No comments</p>
                }
            </div>

        </div>
    )

}

export default CommentsPage