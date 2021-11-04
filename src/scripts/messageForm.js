import { getAuthors, getRecipients, getTopics, sendSentLetters } from "./dataAccess.js"

export const messageForm = () => {
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()
    let html = ""
    //Author Section
    html += `
    <div class="field authors">
    <label for="authorDescription">Author</label>
    <select name="authors" id="authors">
    <option value="0">Choose an Author...</option>
    ${authors.map(author => {
        return `<option value="${author.id}">${author.author}</option>`
    }
    ).join("")
}
</select>
    </div>
    `
    // Letter body section
    html += `
    <div class="field letters">
        <label for="letteDescription">Letter</label>
        <textarea type="textarea" name="letterDescription" class="textarea" id="textarea"></textarea
    </div>
    `
    // Topic section with radio buttons for selection
    html += `
    <label for="topicDescription">Topics</label>
    <div class="field topics">
        ${topics.map(topic => {
            return `
            <input type="radio" id="topics" name="topicDescription" value="${topic.id}">${topic.topic}</input>
            `
        }).join("")
    }
    </div>
    `

    // Recipient Section with dropdown list
    html += `
    <div class="field recipients">
    <label for="recipientDescription">Recipient</label>
    <select name="recipients" id="recipients">
    <option value="0">Choose an Recipient...</option>
    ${recipients.map(recipient => {
        return `<option value="${recipient.id}">${recipient.recipient}</option>`
    }
    ).join("")
}
</select>
    </div>
    `
    //Button Section
    html += `
    <button class="button" id="sendLetter">Send Letter</button>
    `
    return html

}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    clickEvent => {
        if (clickEvent.target.id === "sendLetter") {
            const userAuthor = document.querySelector("#authors").value
            const userLetter = document.querySelector("#textarea").value
            const userTopic = document.querySelector("#topics").value
            const userRecipient = document.querySelector("#recipients").value

            const dataToSendToAPI = {
                authorId: parseInt(userAuthor),
                message: userLetter,
                topicId: parseInt(userTopic),
                recipientId: parseInt(userRecipient)
            }

            sendSentLetters(dataToSendToAPI)
        }
    }
)