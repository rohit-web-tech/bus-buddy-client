import { FC } from 'react'
import NavMoreBtn from './NavMoreBtn'
import NavMoreTab from './NavMoreTab'

const MoreMenu: FC = () => {
    return (
        <div
            className="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right"
        >
            <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark:bg-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <NavMoreBtn
                        to="/profile"
                    >
                        <NavMoreTab title="My Profile" subTitle='Open your profile'>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                className="md:h-6 md:w-6 h-4 w-4"
                            >
                                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                            </svg>
                        </NavMoreTab>
                    </NavMoreBtn>
                    <NavMoreBtn
                        to="/myBookings"
                    >
                        <NavMoreTab title="My Bookings" subTitle='Manage your bookings'>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                className="md:h-6 md:w-6 h-4 w-4"
                            >
                                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                        </NavMoreTab>
                    </NavMoreBtn>
                    <NavMoreBtn
                        to="/logout"
                    >
                        <NavMoreTab title="Logout" subTitle='Logout your account'>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                className="md:h-6 md:w-6 h-4 w-4"
                            >
                                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                            </svg>
                        </NavMoreTab>
                    </NavMoreBtn>
                </div>
            </div>
        </div>
    )
}

export default MoreMenu 
