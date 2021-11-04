import { getAuthors, getLetters, getRecipients, getTopics } from "./dataAccess.js";

const BuildLetter = (letter) => {
    const recipients = getRecipients()
    const authors = getAuthors()
    const topics = getTopics()
    const foundRecipient = recipients.find(recipient => {
        return letter.recipientId === recipient.id
    })
    const foundAuthor = authors.find(author => {
        return letter.authorId === author.id
    })
    const foundTopic = topics.find(topic => {
        return letter.topicId === topic.id
    })

    if (foundTopic && foundAuthor && foundRecipient) {

    let html = ""
    html += `
    <br>
    Dear ${foundRecipient.recipient},
    <br>
    ${letter.message}
    <br>
    Sincerely, ${foundAuthor.author}
    <br>
    ${foundTopic.topic}
    <br>
    <br>
    `
    return html
}
}

export const Letter = () => {
    const letters = getLetters()
    
    let html = `<div class="oneLetter">`

    const letterItems = letters.map(BuildLetter)

    html += letterItems.join("")

    html += `</div>`

    return html
}