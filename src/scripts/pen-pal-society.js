import { messageForm } from "./messageForm.js"
import { Letters } from "./savedMessages.js"

export const PenPalSociety = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="messageForm">
        ${messageForm()}
    </section>
    <section class="sentMessages">
    <h2>Sent Messages</h2>
        ${Letters()}
    </section>
    `
}