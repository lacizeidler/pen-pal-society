import { fetchAuthors, fetchRecipients, fetchSentLetters, fetchTopics } from "./dataAccess.js";
import { PenPalSociety } from "./pen-pal-society.js";

const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchSentLetters().then(
    fetchAuthors().then(
        fetchRecipients().then(
            fetchTopics().then(
        () => {
            mainContainer.innerHTML = PenPalSociety()
        }
    )
        )
    )
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)