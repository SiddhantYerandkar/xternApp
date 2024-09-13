// BottomNavigation.js
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
    const location = useLocation(); // Get the current location

    // Function to check if the current path matches the link
    const isActive = (path) => location.pathname === path;

    return (
        <div id="bottom-navigation">
            <div className="container">
                <div className="home-navigation-menu">
                    <div className="bottom-panel navigation-menu-wrap">
                        <ul className="bootom-tabbar">
                            <li className={isActive("/course-ongoing-screen") ? "active" : ""}>
                                <Link to="/course-ongoing-screen" className={isActive("/course-ongoing-screen") ? "active" : ""}>
                                    <svg
                                        className={isActive("/course-ongoing-screen") ? "active" : ""}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask
                                            id="mask0_202_1996"
                                            style={{ maskType: "alpha" }}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        >
                                            <rect width="24" height="24" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_202_1996)">
                                            <path
                                                d="M3 19.2058C4.36817 18.4159 5.92017 18 7.5 18C9.07983 18 10.6318 18.4159 12 19.2058C13.3682 18.4159 14.9202 18 16.5 18C18.0798 18 19.6318 18.4159 21 19.2058"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M3 6.20577C4.36817 5.41586 5.92017 5 7.5 5C9.07983 5 10.6318 5.41586 12 6.20577C13.3682 5.41586 14.9202 5 16.5 5C18.0798 5 19.6318 5.41586 21 6.20577"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M3 6.20581V19.2058"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 6.20581V19.2058"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M21 6.20581V19.2058"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                                <span className={`d-block ${isActive("/course-ongoing-screen") ? "fw-bold fs-6" : "fs-7"}`}>Courses</span>
                            </li>
                            <li className={isActive("/bookmark") ? "active" : ""}>
                                <Link to="/bookmark" className={isActive("/bookmark") ? "active" : ""}>
                                    <svg
                                        className={isActive("/bookmark") ? "active" : ""}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask
                                            id="mask0_202_2005"
                                            style={{ maskType: "alpha" }}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        >
                                            <rect width="24" height="24" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_202_2005)">
                                            <path
                                                d="M13 7C13.5304 7 14.0391 7.21071 14.4142 7.58579C14.7893 7.96086 15 8.46957 15 9V21L10 18L5 21V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7H13Z"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9.26514 4C9.44092 3.69553 9.69386 3.44278 9.99846 3.26721C10.3031 3.09165 10.6486 2.99948 11.0001 3H17.0001C17.5306 3 18.0393 3.21072 18.4143 3.58579C18.7894 3.96086 19.0001 4.46957 19.0001 5V17L18.0001 16.4"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                                <div className={isActive("/bookmark") ? "orange-boder active" : "orange-boder"}></div>
                            </li>
                            <li className={isActive("/homescreen") ? "active" : ""}>
                                <Link to="/homescreen" className={isActive("/homescreen") ? "active" : ""}>
                                    <svg
                                        className={isActive("/homescreen") ? "active" : ""}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask
                                            id="mask0_202_7251"
                                            style={{ maskType: "alpha" }}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        >
                                            <rect width="24" height="24" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_202_7251)">
                                            <path
                                                d="M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                                <div className={isActive("/homescreen") ? "orange-boder active" : "orange-boder"} ></div>
                            </li>
                            <li className={isActive("/chat-screen") ? "active" : ""}>
                                <Link to="/chat-screen" className={isActive("/chat-screen") ? "active" : ""}>
                                    <svg
                                        className={isActive("/chat-screen") ? "active" : ""}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask
                                            id="mask0_202_1988"
                                            style={{ maskType: "alpha" }}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        >
                                            <rect width="24" height="24" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_202_1988)">
                                            <path
                                                d="M3 20L4.3 16.1C3.17644 14.4382 2.76999 12.4704 3.15622 10.5623C3.54244 8.65415 4.69506 6.93563 6.39977 5.72623C8.10447 4.51683 10.2453 3.89885 12.4241 3.9872C14.6029 4.07554 16.6715 4.86419 18.2453 6.20652C19.819 7.54884 20.7909 9.3535 20.9801 11.2849C21.1693 13.2164 20.563 15.1432 19.2739 16.7071C17.9848 18.271 16.1007 19.3656 13.9718 19.7873C11.8429 20.2091 9.6142 19.9293 7.7 19L3 20"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 12V12.01"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 12V12.01"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16 12V12.01"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                                <div className={isActive("/chat-screen") ? "orange-boder active" : "orange-boder"}></div>
                            </li>
                            <li className={isActive("/profile") ? "active" : ""}>
                                <Link to="/profile" className={isActive("/profile") ? "active" : ""}>
                                    <svg
                                        className={isActive("/profile") ? "active" : ""}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask
                                            id="mask0_202_1984"
                                            style={{ maskType: "alpha" }}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        >
                                            <rect width="24" height="24" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_202_1984)">
                                            <path
                                                d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                                <div className={isActive("/profile") ? "orange-boder active" : "orange-boder"} ></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomNavigation;
