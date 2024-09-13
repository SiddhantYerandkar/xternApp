// BottomNavigation.js
import { Link, useLocation } from "react-router-dom";
import { TbBriefcase2 } from "react-icons/tb";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";

const BottomNavigation = () => {
    const location = useLocation(); // Get the current location

    // Function to check if the current path matches the link
    const isActive = (path) => location.pathname === path;

    return (
        <div id="bottom-navigation" style={{ paddingBottom: '20px' }}>
            <div className="container">
                <div className="home-navigation-menu">
                    <div className="bottom-panel navigation-menu-wrap">
                        <ul className="bootom-tabbar d-flex justify-content-around">
                            <li className={isActive("/course-ongoing-screen") ? "active" : ""}>
                                <Link to="/course-ongoing-screen" className={isActive("/course-ongoing-screen") ? "active" : ""}>
                                    <MdOutlineMenuBook
                                        className={isActive("/course-ongoing-screen") ? "active" : ""}
                                        color={isActive("/course-ongoing-screen") ? "white" : ""}
                                        size={24}
                                    />
                                </Link>
                                <span className="d-block small">Assess</span>
                            </li>
                            <li className={isActive("/bookmark") ? "active" : ""}>
                                <Link to="/bookmark" className={isActive("/bookmark") ? "active" : ""}>
                                    <TbBriefcase2 // Replaced the SVG with TbBriefcase2 icon
                                        className={isActive("/bookmark") ? "active" : ""}
                                        color={isActive("/bookmark") ? "blue" : "lightblue"}
                                        size={24} // Set the size to match the previous SVG size
                                    />
                                </Link>
                                <span className="d-block small">Apply</span>
                            </li>
                            <li className={isActive("/homescreen") ? "active" : ""}>
                                <Link to="/homescreen" className={isActive("/homescreen") ? "active" : ""}>
                                    <MdGroups
                                        className={isActive("/homescreen") ? "active" : ""}
                                        color={isActive("/homescreen") ? "white" : "black"}
                                        size={24}
                                    />
                                </Link>
                                <span className="d-block small">Discover</span>
                            </li>
                            <li className={isActive("/chat-screen") ? "active" : ""}>
                                <Link to="/chat-screen" className={isActive("/chat-screen") ? "active" : ""}>
                                    <MdOutlineChat
                                        className={isActive("/chat-screen") ? "active" : ""}
                                        color={isActive("/chat-screen") ? "white" : ""}
                                        size={24}
                                    />
                                </Link>
                                <span className="d-block small">Chat</span>
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
                                <span className="d-block small">profile</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomNavigation;
