"""Telegram Bot Main Module"""

import asyncio
import logging
from aiogram import Bot, Dispatcher, types
from config import BOT_TOKEN
import database

# Enabling logging
logging.basicConfig(level=logging.INFO)

# Bot object
bot = Bot(token=BOT_TOKEN)

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


async def main():
    """Includes routers and launching the process of polling new updates"""

    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
