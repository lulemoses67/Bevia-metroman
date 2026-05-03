import { useState } from "react";

const Loading = () => {
    const [isOpen, setIsOpen] = useState(true);
    setTimeout(()=> setIsOpen(false),5000);
    return (
        <>
        {isOpen && <div className='bg-light test-primary' id='preLoader'>
            <div className='content bg-dark text-white text-center'>
                <p>Brevia</p>
            </div>
        </div>}
        </>
    );
}

export default Loading;