import React from "react";
import MessageService from "../API/MessageService";
import { useFetching } from "../hooks/useFetching";
import { useState, useEffect } from "react";

const MessagesTable = () => {

    const [messages, setMessages] = useState([])

    const [fetchMessages, isMessagesLoading, messagesError] = useFetching(async () => {
        const response = await MessageService.getAllMessages()
        setMessages([...response.data])
    })

    useEffect(() => {
        fetchMessages()
        console.log(messages)
    }, [])

    return (
        <div className="container" style={{ marginTop: 15 }}>
            <h2>Messages:</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Message ID</th>
                        <th scope="col">From ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Text</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map(message => (
                        <tr>
                            <th scope="row">{message.message_id}</th>
                            <td>{message.from.id}</td>
                            <td>{message.date}</td>
                            <td>{message.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default MessagesTable;