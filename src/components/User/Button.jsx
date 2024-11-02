const Button = ({title, setIsOpenModal}) => {
    return (  
        <button 
            className="mt-auto ml-auto mr-8 mb-4 w-24 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
            onClick={() => setIsOpenModal(true)}
        >
             {title}
        </button>
    );
}
 
export default Button;