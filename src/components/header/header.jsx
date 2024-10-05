import React from "react";
import "./header.css";
import BurgerMenu from "./BurgerMenu";
import logo from "../../assets/UTMLogo.webp";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <>
            <div className="header">
                {/* <svg preserveAspectRatio="none" data-bbox="-0.003 0.03 312.544 183.06" viewBox="-0.003 0.03 312.544 183.06" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                    <path fill="#0ec167" d="M247.8 91.56c0 50.55-40.98 91.53-91.53 91.53-50.55 0-91.53-40.98-91.53-91.53 0-50.55 40.98-91.53 91.53-91.53 50.55 0 91.53 40.98 91.53 91.53z" data-color="1"></path>
                    <path d="M295.18 111c-10.84-7-27-14.79-46.75-22.69a787.09 787.09 0 0 0-83.83-27.49c-31-8.4-61.29-14.9-87.56-18.79-20.69-3.03-38.29-4.38-50.9-3.82-9.91.44-23.35 2.07-25.8 11.07-1.87 6.93 3.85 14.06 18.57 23.14 11 6.75 26.77 14.39 45.8 22.12 0-4 .16-7.63.41-10.64-15.9-6.59-29.34-13.06-39.06-18.85-13.94-8.29-15.77-12.46-16-13.23 1.65-2.39 16.67-7.13 65.51.1 25.9 3.83 55.78 10.25 86.41 18.56a774.26 774.26 0 0 1 82.74 27.14c46.94 18.76 57.65 30.63 57.82 33.48-2.05 2.14-17.55 6.11-63.86-.23-1.35 2.75-3.06 6-5.06 9.39 18.67 2.68 35 4.08 47.52 4.08h2.94c17.56-.33 26.23-3.56 28.11-10.48 2.46-9.11-8.53-17.4-17.01-22.86z" fill="#c6f4eb" data-color="2"></path>
                </svg> */}

                <svg width="274" height="82" viewBox="0 0 274 82" fill="none" xmlns="http://www.w3.org/2000/svg" id="logoSvg">
                    <path d="M63.66 61.48C62.42 61.48 61.46 61.14 60.78 60.46C60.14 59.74 59.82 58.76 59.82 57.52V25.12H48.12C47.08 25.12 46.26 24.84 45.66 24.28C45.1 23.68 44.82 22.88 44.82 21.88C44.82 20.84 45.1 20.06 45.66 19.54C46.26 18.98 47.08 18.7 48.12 18.7H79.2C80.24 18.7 81.04 18.98 81.6 19.54C82.2 20.06 82.5 20.84 82.5 21.88C82.5 22.88 82.2 23.68 81.6 24.28C81.04 24.84 80.24 25.12 79.2 25.12H67.5V57.52C67.5 58.76 67.18 59.74 66.54 60.46C65.9 61.14 64.94 61.48 63.66 61.48ZM94.7381 61.6C91.4181 61.6 88.5581 60.98 86.1581 59.74C83.7581 58.5 81.8981 56.74 80.5781 54.46C79.2981 52.18 78.6581 49.48 78.6581 46.36C78.6581 43.32 79.2781 40.66 80.5181 38.38C81.7981 36.1 83.5381 34.32 85.7381 33.04C87.9781 31.72 90.5181 31.06 93.3581 31.06C95.4381 31.06 97.2981 31.4 98.9381 32.08C100.618 32.76 102.038 33.74 103.198 35.02C104.398 36.3 105.298 37.86 105.898 39.7C106.538 41.5 106.858 43.54 106.858 45.82C106.858 46.54 106.598 47.1 106.078 47.5C105.598 47.86 104.898 48.04 103.978 48.04H84.7181V43.72H101.578L100.618 44.62C100.618 42.78 100.338 41.24 99.7781 40C99.2581 38.76 98.4781 37.82 97.4381 37.18C96.4381 36.5 95.1781 36.16 93.6581 36.16C91.9781 36.16 90.5381 36.56 89.3381 37.36C88.1781 38.12 87.2781 39.22 86.6381 40.66C86.0381 42.06 85.7381 43.74 85.7381 45.7V46.12C85.7381 49.4 86.4981 51.86 88.0181 53.5C89.5781 55.1 91.8581 55.9 94.8581 55.9C95.8981 55.9 97.0581 55.78 98.3381 55.54C99.6581 55.26 100.898 54.8 102.058 54.16C102.898 53.68 103.638 53.48 104.278 53.56C104.918 53.6 105.418 53.82 105.778 54.22C106.178 54.62 106.418 55.12 106.498 55.72C106.578 56.28 106.458 56.86 106.138 57.46C105.858 58.06 105.358 58.58 104.638 59.02C103.238 59.9 101.618 60.56 99.7781 61C97.9781 61.4 96.2981 61.6 94.7381 61.6ZM121.258 61.6C119.138 61.6 117.238 61.2 115.558 60.4C113.918 59.56 112.618 58.44 111.658 57.04C110.738 55.64 110.278 54.06 110.278 52.3C110.278 50.14 110.838 48.44 111.958 47.2C113.078 45.92 114.898 45 117.418 44.44C119.938 43.88 123.318 43.6 127.558 43.6H130.558V47.92H127.618C125.138 47.92 123.158 48.04 121.678 48.28C120.198 48.52 119.138 48.94 118.498 49.54C117.898 50.1 117.598 50.9 117.598 51.94C117.598 53.26 118.058 54.34 118.978 55.18C119.898 56.02 121.178 56.44 122.818 56.44C124.138 56.44 125.298 56.14 126.298 55.54C127.338 54.9 128.158 54.04 128.758 52.96C129.358 51.88 129.658 50.64 129.658 49.24V42.34C129.658 40.34 129.218 38.9 128.338 38.02C127.458 37.14 125.978 36.7 123.898 36.7C122.738 36.7 121.478 36.84 120.118 37.12C118.798 37.4 117.398 37.88 115.918 38.56C115.158 38.92 114.478 39.02 113.878 38.86C113.318 38.7 112.878 38.38 112.558 37.9C112.238 37.38 112.078 36.82 112.078 36.22C112.078 35.62 112.238 35.04 112.558 34.48C112.878 33.88 113.418 33.44 114.178 33.16C116.018 32.4 117.778 31.86 119.458 31.54C121.178 31.22 122.738 31.06 124.138 31.06C127.018 31.06 129.378 31.5 131.218 32.38C133.098 33.26 134.498 34.6 135.418 36.4C136.338 38.16 136.798 40.44 136.798 43.24V57.64C136.798 58.88 136.498 59.84 135.898 60.52C135.298 61.16 134.438 61.48 133.318 61.48C132.198 61.48 131.318 61.16 130.678 60.52C130.078 59.84 129.778 58.88 129.778 57.64V54.76H130.258C129.978 56.16 129.418 57.38 128.578 58.42C127.778 59.42 126.758 60.2 125.518 60.76C124.278 61.32 122.858 61.6 121.258 61.6ZM156.77 61.6C153.69 61.6 151.01 60.98 148.73 59.74C146.45 58.46 144.69 56.66 143.45 54.34C142.21 52.02 141.59 49.3 141.59 46.18C141.59 43.82 141.93 41.72 142.61 39.88C143.33 38 144.35 36.42 145.67 35.14C146.99 33.82 148.59 32.82 150.47 32.14C152.35 31.42 154.45 31.06 156.77 31.06C158.09 31.06 159.51 31.24 161.03 31.6C162.59 31.96 164.05 32.56 165.41 33.4C166.05 33.8 166.47 34.28 166.67 34.84C166.87 35.4 166.91 35.98 166.79 36.58C166.67 37.14 166.41 37.64 166.01 38.08C165.65 38.48 165.19 38.74 164.63 38.86C164.07 38.94 163.45 38.8 162.77 38.44C161.89 37.92 160.99 37.54 160.07 37.3C159.15 37.02 158.27 36.88 157.43 36.88C156.11 36.88 154.95 37.1 153.95 37.54C152.95 37.94 152.09 38.54 151.37 39.34C150.69 40.1 150.17 41.06 149.81 42.22C149.45 43.38 149.27 44.72 149.27 46.24C149.27 49.2 149.97 51.54 151.37 53.26C152.81 54.94 154.83 55.78 157.43 55.78C158.27 55.78 159.13 55.66 160.01 55.42C160.93 55.18 161.85 54.8 162.77 54.28C163.45 53.92 164.05 53.8 164.57 53.92C165.13 54.04 165.59 54.32 165.95 54.76C166.31 55.16 166.53 55.66 166.61 56.26C166.69 56.82 166.61 57.38 166.37 57.94C166.17 58.5 165.77 58.96 165.17 59.32C163.85 60.12 162.45 60.7 160.97 61.06C159.49 61.42 158.09 61.6 156.77 61.6ZM174.031 61.48C172.831 61.48 171.911 61.16 171.271 60.52C170.631 59.84 170.311 58.88 170.311 57.64V22C170.311 20.76 170.631 19.82 171.271 19.18C171.911 18.54 172.831 18.22 174.031 18.22C175.231 18.22 176.151 18.54 176.791 19.18C177.471 19.82 177.811 20.76 177.811 22V37.54H176.971C177.851 35.42 179.211 33.82 181.051 32.74C182.931 31.62 185.051 31.06 187.411 31.06C189.771 31.06 191.711 31.5 193.231 32.38C194.751 33.26 195.891 34.6 196.651 36.4C197.411 38.16 197.791 40.4 197.791 43.12V57.64C197.791 58.88 197.471 59.84 196.831 60.52C196.191 61.16 195.271 61.48 194.071 61.48C192.871 61.48 191.931 61.16 191.251 60.52C190.611 59.84 190.291 58.88 190.291 57.64V43.48C190.291 41.2 189.851 39.54 188.971 38.5C188.131 37.46 186.811 36.94 185.011 36.94C182.811 36.94 181.051 37.64 179.731 39.04C178.451 40.4 177.811 42.22 177.811 44.5V57.64C177.811 60.2 176.551 61.48 174.031 61.48Z" fill="#5225EE"/>
                    <path d="M218.22 61.48C217.1 61.48 216.24 61.16 215.64 60.52C215.04 59.88 214.74 59 214.74 57.88V21.82C214.74 20.66 215.06 19.78 215.7 19.18C216.34 18.54 217.22 18.22 218.34 18.22C219.34 18.22 220.12 18.42 220.68 18.82C221.28 19.18 221.82 19.82 222.3 20.74L237.12 48.16H235.2L250.02 20.74C250.5 19.82 251.02 19.18 251.58 18.82C252.14 18.42 252.92 18.22 253.92 18.22C255.04 18.22 255.9 18.54 256.5 19.18C257.1 19.78 257.4 20.66 257.4 21.82V57.88C257.4 59 257.1 59.88 256.5 60.52C255.94 61.16 255.08 61.48 253.92 61.48C252.8 61.48 251.94 61.16 251.34 60.52C250.74 59.88 250.44 59 250.44 57.88V30.1H251.76L239.16 53.08C238.76 53.76 238.34 54.26 237.9 54.58C237.46 54.9 236.86 55.06 236.1 55.06C235.34 55.06 234.72 54.9 234.24 54.58C233.76 54.22 233.34 53.72 232.98 53.08L220.26 30.04H221.7V57.88C221.7 59 221.4 59.88 220.8 60.52C220.24 61.16 219.38 61.48 218.22 61.48Z" fill="#5225EE"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 19.5C6.933 19.5 8.5 21.067 8.5 23V45.664C8.5 50.8579 12.5284 54.5 18.5 54.5C24.4716 54.5 28.5 50.8579 28.5 45.664V23C28.5 21.067 30.067 19.5 32 19.5C33.933 19.5 35.5 21.067 35.5 23V45.664C35.5 55.5642 27.4401 61.5 18.5 61.5C9.55994 61.5 1.5 55.5642 1.5 45.664V23C1.5 21.067 3.067 19.5 5 19.5Z" fill="#5225EE"/>
                    <path d="M269 58L269 23" stroke="#5225EE" stroke-width="7" stroke-linecap="round"/>
                    <circle cx="5" cy="11" r="5" fill="#00CE94"/>
                    <circle cx="32" cy="11" r="5" fill="#00CE94"/>
                    <circle cx="269" cy="11" r="5" fill="#00CE94"/>
                </svg>

                <Navbar />
                <BurgerMenu />

                <div className="social-icons">
                        {/* FACEBOOK */}
                    <a href="/">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 10.3333V23.6667C32 28.269 28.269 32 23.6667 32H10.3333C5.73097 32 2 28.269 2 23.6667V10.3333C2 5.73097 5.73097 2 10.3333 2H23.6667C28.269 2 32 5.73097 32 10.3333Z" stroke="black" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.3335 32.0002C15.3335 27.0002 15.3335 22.0002 15.3335 17.0002C15.3335 13.3543 16.1668 10.3335 22.0002 10.3335" stroke="black" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 18.6665H15.3333H22" stroke="black" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>

                        {/* INSTAGRAM */}
                    <a href="/">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0002 23.6668C20.682 23.6668 23.6668 20.682 23.6668 17.0002C23.6668 13.3183 20.682 10.3335 17.0002 10.3335C13.3183 10.3335 10.3335 13.3183 10.3335 17.0002C10.3335 20.682 13.3183 23.6668 17.0002 23.6668Z" stroke="black" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 23.6667V10.3333C2 5.73097 5.73097 2 10.3333 2H23.6667C28.269 2 32 5.73097 32 10.3333V23.6667C32 28.269 28.269 32 23.6667 32H10.3333C5.73097 32 2 28.269 2 23.6667Z" stroke="black" stroke-width="3.5" />
                            <path d="M26.167 7.85199L26.1854 7.83154" stroke="black" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>

                        {/* YOUTUBE */}
                    <a href="/">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 23.6667V10.3333C2 5.73097 5.73097 2 10.3333 2H23.6667C28.269 2 32 5.73097 32 10.3333V23.6667C32 28.269 28.269 32 23.6667 32H10.3333C5.73097 32 2 28.269 2 23.6667Z" stroke="black" stroke-width="3.5"/>
                            <path d="M23.4813 15.2053C24.9711 15.938 24.9711 18.062 23.4813 18.7947L14.1652 23.3765C12.8362 24.0301 11.2825 23.0628 11.2825 21.5818V12.4182C11.2825 10.9372 12.8362 9.96989 14.1652 10.6235L23.4813 15.2053Z" fill="black" id="youtube"/>
                        </svg>
                    </a>
                </div>

            </div>
        </>
    )
}

export default Header;