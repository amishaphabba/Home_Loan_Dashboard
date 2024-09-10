import { FaGreaterThan } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";


const BreadCrumbs = () =>{
    return(
       <ul className="bread-crumbs">
        <li><FaHome /> <a href="">Home</a></li>
        <FaGreaterThan />
        <li> <FaCalculator /> <a href="">Calculators</a> </li>
        <FaGreaterThan />
        <li> <FaIndianRupeeSign /> <a href="">Home Loan</a></li>
       </ul>
    )
}

export default BreadCrumbs