import homepage from "../../assets/home_page.jpg";

const Homepage = () => {
    return (
        <>
            <div className="flex flex-col space-y-4 px-36 pb-20">
                <div className="flex justify-between ">
                    <div className="flex items-center mx-11 my-20">
                        <p className="bg-opacity-20 rounded-xl p-4 text-xl font-monos italic">
                            Yêu Lành là dự án thuộc lĩnh vực tâm lý học, chuyên cung cấp các kiến thức, kỹ
                            năng, nhận thức đúng đắn về tâm lý học tình cảm dành cho các cặp đôi. Dự án hướng
                            tới các bạn trẻ trong độ tuổi 22 đến 27 nhằm giúp họ có một tình yêu lành mạnh, hạnh
                            phúc và bền vững.
                        </p>
                    </div>
                    <img src={homepage} alt="" className="w-1/2 object-cover" />
                </div>
                <p className="font-bold text-center text-3xl">&quot;Yêu Lành&quot; cùng Happy Life</p>
                <p className="text-center px-36">Chúng tôi hướng tới là điểm đến hàng đầu cho các cặp đôi trẻ tuổi trong hành trình tìm hiểu và phát triển tình yêu bền vững, nơi mỗi mối quan hệ được nuôi dưỡng và thấu hiểu, thông qua:</p>
                <div className="flex justify-center space-x-8">
                    <div className="w-80 border p-4 rounded-xl shadow">
                        <p className="text-purple-500 font-bold text-lg">
                            #Workshop
                        </p>
                        <p className="">
                            Hiểu cốt lõi tình yêu để nuôi dưỡng bền vững, nhận biết mối quan hệ lành mạnh,
                            học ngôn ngữ yêu thương, và cùng xây dựng mối quan hệ viên mãn.
                        </p>
                    </div>
                    <div className="w-80 border p-4 rounded-xl shadow">
                        <p className="text-purple-500 font-bold text-lg">
                            #Camping 24h
                        </p>
                        <p className="">
                            Các cặp đôi cùng tạo kỷ niệm, học bài học tình yêu,
                            kết nối sâu sắc và chữa lành mối quan hệ hướng đến tình yêu bền vững.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;