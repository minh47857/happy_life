import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

// import camping from "../../assets/camping.png"
import camping from "../../assets/camping.png"

const Camping = () => {
    const [campingList, setCampingList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setCampingList([
            {
                id: 1,
                title: "Camp 24 giờ yêu thương",
                date: new Date(2024, 11, 20, 7, 30),
                location: "Vườn Bách Thảo",
                content: "Đây là nội dung",
                image: camping
            },
            {
                id: 2,
                title: "Camp 24 giờ yêu thương",
                date: new Date(2024, 11, 20, 7, 30),
                location: "Vườn Bách Thảo",
                content: "Đây là nội dung",
                image: camping
            },
            {
                id: 3,
                title: "Camp 24 giờ yêu thương",
                date: new Date(2024, 11, 20, 7, 30),
                location: "Vườn Bách Thảo",
                content: "Đây là nội dung",
                image: camping
            },
            {
                id: 4,
                title: "Camp 24 giờ yêu thương",
                date: new Date(2024, 11, 20, 7, 30),
                location: "Vườn Bách Thảo",
                content: "Đây là nội dung",
                image: camping
            }
        ])
    }, [])

    const goToDetailCamping = (camping) => {
        // navigate(`/camping/${camping.id}`, {state: {camping: camping}});
        navigate(`/camping/${camping.id}`, {state: {camping: camping}});
        console.log(camping);
    }

    return (
        <>
            <div className="flex flex-wrap justify-between items-center px-36 py-20">
                {campingList.map((camping, id) => {
                    return (
                        <div className="w-96 mb-4 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200" key={id}>
                            <img
                                src={camping.image}
                                alt="Event"
                                className="w-full h-48 object-cover cursor-pointer"
                                onClick={() => goToDetailCamping(camping)}
                            />
                            <div className="p-4">
                                <div className="flex items-center rounded-lg p-2 mb-4 h-32">
                                    <div className=" flex flex-col items-center justify-center w-20 p-2 bg-white text-purple-500 font-bold text-xl rounded-lg border-2 border-purple-500 mr-4">
                                        <span>{camping.date.getDay()}</span>
                                        <span className="text-xs">Tháng {camping.date.getMonth()}</span>
                                        <span>{camping.date.getFullYear()}</span>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-purple-500"> {camping.title} </p>
                                        <p className="flex text-gray-600 text-sm items-center space-x-1">
                                            <FaLocationDot />
                                            <span>{camping.location}</span>
                                        </p>
                                        <p className="flex space-x-1 items-center text-gray-600 text-sm">
                                            <MdAccessTimeFilled />
                                            <span>{camping.date.getHours()}:{camping.date.getMinutes()}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    );
}

export default Camping;