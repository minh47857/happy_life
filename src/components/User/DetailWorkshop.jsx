import { useLocation } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";

const DetailWorkshop = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const location = useLocation();
    const workshop = location?.state?.workshop;

    return (
        <>
            {console.log(isOpenModal)}
            <div className="w-full flex justify-between px-36 py-20 space-x-8 text-slate-600">
                <div className="w-1/3 h-96 flex flex-col rounded-lg shadow-md border border-gray-200">
                    <img
                        src={workshop?.image}
                        alt="Event"
                        className="w-full h-48 object-corver"
                    />
                    <div className="p-4 ">
                        <p className="font-bold text-xl  mb-2">
                            {workshop?.title}
                        </p>
                        <p className=""> <span className="font-semibold mr-4 ">Địa điểm :</span> {workshop?.location} </p>
                        <p className=""> <span className="font-semibold mr-4 ">Thời gian:</span> 7:30  5/11/2024</p>
                    </div>
                </div>
                <div className="w-3/4 flex flex-col rounded-lg border shadow-md border-gray-200">
                    <div className="px-4 py-2 border-b font-bold text-2xl text-center">
                        Nội dung
                    </div>
                    <p className="px-4 py-6">
                       <p>● Hiểu được cốt lõi của tình yêu từ đó duy trì, nuôi dưỡng tình yêu bền vững</p> 
                       <p>● Nhận biết một mối quan hệ lành mạnh</p>
                       <p>● Học ngôn ngữ yêu thương để người kia cảm nhận đúng tình cảm của mình</p>
                       <p>● Cách giữ gìn, xây đắp mối quan hệ viên mãn, cùng nhau phát triển.</p>

                    </p>
                    <Button
                        className="mt-auto"
                        title={"Đăng ký"}
                        setIsOpenModal={setIsOpenModal}
                    />
                </div>
            </div>

            <Modal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
            />
        </>
    );
}

export default DetailWorkshop;