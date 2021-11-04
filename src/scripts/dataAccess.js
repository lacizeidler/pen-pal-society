import { render } from "./main.js"

const applicationState = {
    authors: [],
    recipients: [],
    topics: [],
    sentLetters: []
}

const mainContainer = document.querySelector("#container")

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}
export const getLetters = () => {
    return applicationState.sentLetters.map(letter => ({...letter}))
}


const API = "http://localhost:8088"

// Function to get author data from database.json
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
    .then(response => response.json())
    .then(
        (fetchingAuthors) => {
            // Store the external state in application state
            applicationState.authors = fetchingAuthors
        } 
        )
    }
// Function to get recipients data from database.json
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
    .then(response => response.json())
    .then(
        (fetchingRecipients) => {
            // Store the external state in application state
            applicationState.recipients = fetchingRecipients
        }
        )
    }
// Function to get topic data from database.json
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(response => response.json())
    .then(
        (fetchingTopics) => {
            // Store the external state in application state
            applicationState.topics = fetchingTopics
        }
        )
    }
// Function to get sentLetters data from database.json
export const fetchSentLetters = () => {
    return fetch(`${API}/sentLetters`)
    .then(response => response.json())
    .then(
        (fetchingSentLetters) => {
            // Store the external state in application state
            applicationState.sentLetters = fetchingSentLetters
        }
        )
    }
export const sendSentLetters = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/sentLetters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}
    
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
