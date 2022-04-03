import ufo from "./assets/images/ufo.png";
import project1 from './assets/images/projects/8121cd0609b8412497001bae77b1af31.webp'
import project2 from './assets/images/projects/brendan-church-9F3sEV1-Iog-unsplash.webp'
import project3 from './assets/images/projects/Fashion Magazine.webp'

const localData = {
    navbar: {
        togglerIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
            </svg>
        ),
    },

    pages: {
        home: {
            title: "home page title",
            description: "home page description",
        },
        about: {
            title: "about page title",
            description: "about page description",
        },
        error: {
            "not-found": {
                message: "nothing exist here",
                cover: ufo,
                status: 404,
            },
            "connection-error": {
                message: "connection error",
                cover: ufo,
                status: 400,
            },
        },
    },
    projects: [
        {
            name: "project name 0",
            text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you",
            cover: project1
        },
        {
            name: "project name 1",
            text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you",
            cover: project2
        },
        {
            name: "project name 2",
            text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you",
            cover: project3
        },
    ],
    unsubscribed: {
        telegram: (
            <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="SendIcon"
            >
                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
        ),
        trash: (
            <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="DeleteIcon"
            >
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg>
        ),
    },
};

export default localData;
