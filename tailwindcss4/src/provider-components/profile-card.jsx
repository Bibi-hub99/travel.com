//builds a profile card for displaying service provider information
import { GrEdit } from "react-icons/gr";
import Button from "../components/button"
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";



import {useMyContext} from "../context/context"

function ProfileCard(props){

    const [value] = useMyContext()

    const tableRowStyle = 'p-2'
    const blueRow = ' bg-blue-200 text-white'

    return (
        <div className={'grid grid-cols-1 md:grid-cols-3 gap-2 text-blue-500 font-bold'}>

            <div className={'bg-white shadow-gray-500 shadow-lg md:col-start-1 md:col-end-2 text-center rounded-xl'}>
                <p className={'text-[10rem]'}>
                    {value.icons[16].icon}
                </p>
            </div>

            <div className={'bg-white shadow-gray-500 shadow-lg rounded-xl col-start-1 col-end-2 text-center md:text-left p-2'}>
                <div className={'rounded-xl'}>
                    <Button
                    btnStyle={'text-[1.7rem] w-full text-center cursor-pointer hover:bg-blue-500 hover:text-white rounded-xl'}
                    btnInnerText={<GrEdit className={'inline'}/>}
                    />
                </div>
                <div className={'text-[1.2rem]'}>
                    <p><MdOutlineMailOutline className={'inline my-3'}/> {props.email}</p>
                    <p> <FaRegCircleUser className={'inline my-3'}/> {props.firstNames}</p>
                </div>
            </div>

            <div className={'bg-white shadow-gray-500 shadow-lg rounded-xl md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3 text-center md:text-left p-2'}>
                <table className={'w-[100%] p-2'}>
                    <tbody className={'p-2'}>

                        <tr className={'p-2 mt-2'}>
                            <th className={tableRowStyle + blueRow}>Last Name</th>
                            <td className={tableRowStyle}>{props.lastName}</td>
                        </tr>

                        <tr>
                            <th className={tableRowStyle}>Account Type</th>
                            <td className={tableRowStyle + blueRow}>{props.accountType}</td>
                        </tr>

                        <tr>
                            <th className={tableRowStyle + blueRow}>Gender</th>
                            <td className={tableRowStyle}>{props.gender}</td>
                        </tr>

                        <tr>
                            <th className={tableRowStyle}>Id Number</th>
                            <td className={tableRowStyle + blueRow}>{props.id_number}</td>
                        </tr>

                        <tr>
                            <th className={tableRowStyle + blueRow}>Contacts</th>
                            <td className={tableRowStyle}>{props.contacts}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )

}

export default ProfileCard