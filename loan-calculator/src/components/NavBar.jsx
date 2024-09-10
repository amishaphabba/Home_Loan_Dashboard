const NavBar = () => {
    return (
        <div id="nav-bar">
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="none" viewBox="0 0 71 71"><title>QuickLend</title><path fill="#E98135" d="M35.257 0C15.889 0 .209 15.691.209 35.022c0 19.33 15.691 35.02 35.048 35.02a34.785 34.785 0 0 0 19.008-5.608l.162-.093c9.568-6.246 15.877-17.035 15.877-29.32C70.304 15.692 54.601 0 35.257 0m18.961 47.584-5.404-5.853-6.24-6.767-8.094 7.451 5.833 6.34 5.834 6.327a22.61 22.61 0 0 1-10.972 2.816c-12.536 0-22.707-10.152-22.707-22.691 0-12.54 10.17-22.691 22.707-22.691s22.708 10.163 22.708 22.69c0 4.567-1.345 8.832-3.676 12.378z"></path><path fill="#292A68" d="m40.325 48.754 5.833 6.328a22.61 22.61 0 0 1-10.971 2.816c-9.336 0-17.338-5.644-20.84-13.687 4.117 4.172 9.834 6.768 16.155 6.768 3.514 0 6.842-.8 9.811-2.225zM57.895 35.207c0 4.566-1.346 8.83-3.677 12.377l-5.404-5.853A22.537 22.537 0 0 0 53.221 28.3c0-3.199-.661-6.246-1.856-9.005 4.048 4.103 6.541 9.723 6.541 15.923z"></path><path fill="#4B67B0" d="m54.265 64.005-8.107-8.819-5.833-6.327-5.834-6.34 8.095-7.451 6.24 6.768 5.404 5.852 8.176 8.889.325.324a35.22 35.22 0 0 1-8.13 7.44l-.325-.336z"></path></svg>
            </div>
            <nav>
                <ul>
                    <li className="nav-options"><a href="">Home</a></li>
                    <li>
                        <div className="dropdown">
                            <div className="ribbon">NEW</div>
                            <a className="dropbtn nav-options">Calculators</a>
                            <div className="dropdown-content">
                                <a>Home Loan EMI</a>
                                <a>PPF Calculator</a>
                                <a>Personal Loan EMI</a>
                                <a>Car Loan EMI</a>
                                <a>SIP Calculator</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-options"><a href="">FAQs</a></li>
                    <li id="nav-button"><a href="">Get started</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar