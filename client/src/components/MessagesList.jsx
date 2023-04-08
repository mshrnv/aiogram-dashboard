import React, {useEffect, useState} from 'react';
import {Card} from "flowbite-react";
import MessageService from "../API/MessageService";
import moment from 'moment';

const MessagesList = () => {

    const [page, setPage] = useState(1)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        MessageService.getAllMessages(page)
            .then(({data}) => setMessages(data))
    }, [page])

    return (
        <div className="w-full">
            {messages.map((message) =>
                <Card className="mb-4">
                    <div className="flex items-center justify-between">
                        <h6 className="font-bold leading-none text-gray-900 dark:text-white">
                            #{message.from.id}
                        </h6>
                        <p className="text-sm font-medium hover:underline dark:text-gray-500">
                            {moment.unix(message.date).format("HH:mm DD.MM.YYYY")}
                        </p>
                    </div>
                    <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
                        {message.text}
                    </p>
                </Card>
            )}
        </div>
    );
};

export default MessagesList;