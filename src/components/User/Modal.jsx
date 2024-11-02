import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const Modal = ({ isOpenModal, setIsOpenModal }) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState("");
	const [role, setRole] = useState("NO");
    const [note, setNote] = useState("");

	const handleClose = () => {
		setIsOpenModal(false);
		setEmail("");
		setName("");
		setPhoneNumber("");
        setAge("");
		setRole("NO");
        setNote("");
	}

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

    // const validatePhoneNumber = (phoneNumber) => {
    //     return Stri
    // }


	const handleSubmit = () => {
        if(name == "" || phoneNumber == "") {
            toast.warn("Chưa nhập đủ thông tin");
            return;
        }
        if(email.length != 0 && !validateEmail(email)) {
            console.log(email, 1);
            toast.warn("Email chưa đúng");
            return;
        }
        toast.success("Đã đăng ký thành công")
        handleClose();
	}

	return (
		isOpenModal && (
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 shadow-md text-slate-600">
				<div className="overflow-auto w-full max-w-2xl max-h-full rounded-lg shadow bg-white">
					<div className="flex p-5 border-b">
						<p className="text-xl font-bold">Đăng ký</p>
						<IoIosClose
							className="ml-auto text-3xl text-gray-400 cursor-pointer bg-transparent hover:bg-gray-200 hover rounded"
							onClick={handleClose}
						/>
					</div>
					<div className="p-5 grid gap-4 grid-cols-1 text-sm">
						<div className="col-span-1">
							<label htmlFor="name" className="block mb-2 font-medium"> Họ và tên (*) </label>
							<input type="name" id="name" className="bg-gray-50 border border-gray-300	rounded-lg p-2.5 w-full" value={name} onChange={(event) => setName(event.target.value)} placeholder="" required=""/>
						</div>
                        <div className="col-span-1">
							<label htmlFor="age" className="block mb-2 font-medium"> Tuổi </label>
							<input type="age" id="age" className="bg-gray-50 border border-gray-300	rounded-lg p-2.5 w-full" value={age} onChange={(event) => setAge(event.target.value)} placeholder="" required=""/>
						</div>
                        <div className="col-span-1">
							<label htmlFor="phoneNumber" className="block mb-2 font-medium"> Số Điện Thoại (*) </label>
							<input type="phoneNumber" id="phoneNumber" className="bg-gray-50 border border-gray-300	rounded-lg p-2.5 w-full" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder="" required=""/>
						</div>
						<div className="col-span-1">
							<label htmlFor="email" className="block mb-2 font-medium"> Email </label>
							<input type="email" id="email" className="bg-gray-50 border border-gray-300	rounded-lg p-2.5 w-full" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="" required=""/>
						</div>
						<div className="col-span-1">
							<label htmlFor="role" className="block mb-2 font-medium"> Bạn có muốn chúng mình tư vấn thêm cho bạn qua SĐT? </label>
							<select id="role" className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full" value={role} onChange={(event) => setRole(event.target.value)}>
								<option value="YES"> Có </option>
								<option value="NO"> Không </option>
							</select>
						</div>
                        <div className="col-span-1">
							<label htmlFor="note" className="block mb-2 font-medium"> Bạn có mong muốn gì khi tham gia </label>
							<textarea type="note" id="note" className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full" value={note} onChange={(event) => setNote(event.target.value)} placeholder=""/>
						</div>
					</div>
					<div className="flex justify-end p-5 border-t">
						<button className="w-[6rem] px-5 py-2.5 rounded-lg border bg-slate-400 hover:bg-slate-500 text-white	font-medium" onClick={handleClose}> Cancel </button>
						<button className="ml-2 w-[6rem] px-5 py-2.5 rounded-lg bg-purple-700 hover:bg-purple-800	text-white font-medium" onClick={handleSubmit}> Save </button>
					</div>
				</div>
			</div>
		)
	);
};

export default Modal;