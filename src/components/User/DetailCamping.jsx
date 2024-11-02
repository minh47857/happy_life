import { useLocation } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";

const DetailCamping = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const location = useLocation();
    const camping = location?.state?.camping;

    return (
        <>
            {console.log("i'm here")}
            <div className="w-full flex justify-between px-36 py-20 space-x-8 text-slate-600">
                <div className="w-1/3 h-96 flex flex-col rounded-lg shadow-md border border-gray-200">
                    <img
                        src={camping.image}
                        alt="Event"
                        className="w-full h-48 object-corver"
                    />
                    <div className="p-4 ">
                        <p className="font-bold text-xl  mb-2">
                            {camping.title}
                        </p>
                        <p className=""> <span className="font-semibold mr-4 ">Địa điểm :</span> {camping.location} </p>
                        <p className=""> <span className="font-semibold mr-4 ">Thời gian:</span> 7:30  5/11/2024 </p>
                    </div>
                </div>
                <div className="w-3/4 flex flex-col rounded-lg border shadow-md border-gray-200">
                    <div className="px-4 py-2 border-b font-bold text-2xl text-center">
                        Nội dung
                    </div>
                    <p className="px-4 py-6">
                        Khóa học kéo dài một ngày, các cặp đôi sẽ có một ngày đồng hành cùng
                        nhau từ sáng đến tối, cùng tham gia các trải nghiệm thú vị, chân thực, gần gũi, cùng
                        nhau trải qua nhiều cung bậc cảm xúc và đi sâu vào nội tâm để thấu hiểu, chữa lành,
                        dám bày tỏ ra những cảm xúc, những điều thầm kín bao lâu nay không dám nói ra. Từ
                        các hoạt động trải nghiệm, các cặp đôi sẽ học được các bài học về tình yêu: sự thấu
                        hiểu, chia sẻ, tôn trọng,... trân trọng nhau hơn. Từ đó: 
                        <p>● Các cặp đôi có thời gian bên nhau, cùng tạo nên kỷ niệm khó quên.</p>
                        <p>● Học được các bài học về tình yêu, kết nối sâu với đối phương.</p>
                        <p>● Chữa lành các vấn đề trong mối quan hệ, hướng đến tình yêu bền vững.</p>
                    </p>
                    <Button
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

export default DetailCamping;