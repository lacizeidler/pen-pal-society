import { getLetters } from "./dataAccess.js";

export const Letters = () => {
    const letters = getLetters()
    
    let html = ""
    html += `
    <ul class="sentMessagesList">
    <li>
    ${letters.map(letter => {
        return `
        Dear ${letter.recipientId},
        <br>
        ${letter.message}
        <br>
        Sincerely, ${letter.authorId}
        <br>
        ${letter.topicId}
        <br>
        `
    }).join("")
}
    </li>
    </ul>
    `
    return html
}