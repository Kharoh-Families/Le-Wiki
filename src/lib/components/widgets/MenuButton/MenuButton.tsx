import * as React from "react"

function MenuButton(props: MenuButtonInformations) {
    return (
        <div id="MenuButton" onClick={() => props.changeMenuState(!props.isOpen)}>
                {
                props.isOpen
                ?
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        isolation: "isolate",
                    }}
                    viewBox="0 0 200 200"
                    >
                    <defs>
                        <clipPath id="prefix__a">
                        <path d="M0 0h200v200H0z" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#prefix__a)">
                        <path
                        d="M25 0h150c13.798 0 25 11.202 25 25v150c0 13.798-11.202 25-25 25H25c-13.798 0-25-11.202-25-25V25C0 11.202 11.202 0 25 0z"
                        fill="#2e2e2e"
                        />
                        <path
                        d="M25 0h150c13.798 0 25 11.202 25 25v150c0 13.798-11.202 25-25 25H25c-13.798 0-25-11.202-25-25V25C0 11.202 11.202 0 25 0z"
                        fill="none"
                        stroke="#000"
                        strokeWidth={10}
                        strokeLinecap="square"
                        strokeMiterlimit={2}
                        />
                        <path
                        d="M43.427 50.499l7.072-7.072c3.903-3.903 10.24-3.903 14.143 0l91.931 91.931c3.903 3.903 3.903 10.24 0 14.143l-7.072 7.072c-3.903 3.903-10.24 3.903-14.143 0L43.427 64.642c-3.903-3.903-3.903-10.24 0-14.143z"
                        fill="#ebebeb"
                        />
                        <path
                        d="M149.501 43.427l7.072 7.072c3.903 3.903 3.903 10.24 0 14.143l-91.931 91.931c-3.903 3.903-10.24 3.903-14.143 0l-7.072-7.072c-3.903-3.903-3.903-10.24 0-14.143l91.931-91.931c3.903-3.903 10.24-3.903 14.143 0z"
                        fill="#ebebeb"
                        />
                    </g>
                    </svg>

                    :

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        isolation: "isolate",
                    }}
                    viewBox="0 0 200 200"
                    >
                    <defs>
                        <clipPath id="prefix__a">
                        <path d="M0 0h200v200H0z" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#prefix__a)">
                        <path
                        d="M25 0h150c13.798 0 25 11.202 25 25v150c0 13.798-11.202 25-25 25H25c-13.798 0-25-11.202-25-25V25C0 11.202 11.202 0 25 0z"
                        fill="#2e2e2e"
                        />
                        <path
                        d="M25 0h150c13.798 0 25 11.202 25 25v150c0 13.798-11.202 25-25 25H25c-13.798 0-25-11.202-25-25V25C0 11.202 11.202 0 25 0z"
                        fill="none"
                        stroke="#000"
                        strokeWidth={10}
                        strokeLinecap="square"
                        strokeMiterlimit={2}
                        />
                        <path
                        d="M35 90h130c5.519 0 10 4.481 10 10s-4.481 10-10 10H35c-5.519 0-10-4.481-10-10s4.481-10 10-10zM35 45h130c5.519 0 10 4.481 10 10s-4.481 10-10 10H35c-5.519 0-10-4.481-10-10s4.481-10 10-10zM35 135h130c5.519 0 10 4.481 10 10s-4.481 10-10 10H35c-5.519 0-10-4.481-10-10s4.481-10 10-10z"
                        fill="#ebebeb"
                        />
                    </g>
                    </svg>
            }
        </div>
            
    )
}

export default MenuButton

export interface MenuButtonInformations {
    isOpen: boolean
    changeMenuState: Function
}
