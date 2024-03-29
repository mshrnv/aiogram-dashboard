"""Telegram Bot Main Module"""

import asyncio
import logging
from aiogram import Bot, Dispatcher, types
import database
from dotenv import load_dotenv, find_dotenv
from os import getenv


# ENV settings
load_dotenv(find_dotenv())

# Enabling logging
logging.basicConfig(level=logging.INFO)

# Bot object
bot = Bot(token=getenv("BOT_TOKEN"))

# Dispatcher
dp = Dispatcher(bot)


@dp.message_handler(commands=["start"])
async def cmd_start(message: types.Message):
    """Responds to the start command

    Args:
        message (Message): "/start" message
    """

    # Collecting user to database
    user = dict(message.from_user)
    database.insert_user(user)

    await message.answer("Hello :)")


@dp.message_handler()
async def echo_message(message: types.Message):
    """Echo

    Args:
        message (types.Message): New message
    """

    # Collecting message to database
    message_dict = dict(message)
    database.insert_message(message_dict)

    await message.answer(message.text)


async def main():
    """Includes routers and launching the process of polling new updates"""

    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
