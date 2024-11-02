import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

// import camping from "../../assets/camping.png"
import workshopImage from "../../assets/workshopImage.jpg"

const Workshops = () => {
    const [workshopList, setWorkshopList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setWorkshopList([
            {
                id: 1,
                title: "Nghệ thuật yêu lành",
                date: new Date(2024, 11, 20, 7, 30),
                location: "The Coffee House",
                content: "Đây là nội dung",
                image: workshopImage
            },
            {
                id: 2,
                title: "Nghệ thuật yêu lành",
                date: new Date(2024, 11, 20, 7, 30),
                location: "The Coffee House",
                content: "Đây là nội dung",
                image: workshopImage
            },
            {
                id: 3,
                title: "Nghệ thuật yêu lành",
                date: new Date(2024, 11, 20, 7, 30),
                location: "The Coffee House",
                content: "Đây là nội dung",
                image: workshopImage
            },
            {
                id: 4,
                title: "Nghệ thuật yêu lành",
                date: new Date(2024, 11, 20, 7, 30),
                location: "The Coffee House",
                content: "Đây là nội dung",
                image: workshopImage
            }
        ])
    }, [])

    const goToDetailWorkshop = (workshop) => {
        navigate(`/workshops/${workshop.id}`, {state: {workshop: workshop}});
    }

    return (
        <>
            <div className="flex flex-wrap justify-between items-center px-36 py-20">
                {workshopList.map((workshop, id) => {
                    return (
                        <div className="w-96 mb-4 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200" key={id}>
                            <img
                                src={workshop.image}
                                alt="Event"
                                className="w-full h-48 object-cover cursor-pointer"
                                onClick={() => goToDetailWorkshop(workshop)}
                            />
                            <div className="p-4">
                                <div className="flex items-center rounded-lg p-2 mb-4 h-32">
                                    <div className=" flex flex-col items-center justify-center w-20 p-2 bg-white text-purple-500 font-bold text-xl rounded-lg border-2 border-purple-500 mr-4">
                                        <span>{workshop.date.getDay()}</span>
                                        <span className="text-xs">Tháng {workshop.date.getMonth()}</span>
                                        <span>{workshop.date.getFullYear()}</span>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-purple-500"> {workshop.title} </p>
                                        <p className="flex text-gray-600 text-sm items-center space-x-1">
                                            <FaLocationDot />
                                            <span>{workshop.location}</span>
                                        </p>
                                        <p className="flex space-x-1 items-center text-gray-600 text-sm">
                                            <MdAccessTimeFilled />
                                            <span>{workshop.date.getHours()}:{workshop.date.getMinutes()}</span>
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

export default Workshops;