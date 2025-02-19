import { FaSearch } from 'react-icons/fa';

function expsearch(){

}


export default function navbar(){
    return(
        <div className="flex flex-row justify-between text-green-500 bg-white relative">
             {/* logo of navbar */}
            <img src="assets/favicon.ico" alt="Logo" className="mr-auto absolute ml-1/20" />
            {/* data */}
            <a className="absolute">
               About Us
            </a>
            <a className="absolute">
               Governance
            </a>
            <a className="absolute">
               Department
            </a>
            <a className="absolute">
               Admissions Alumni
            </a>

        </div>
    )
}