FROM python:3.9.15-slim

WORKDIR /app/telegram-bot

COPY . .

RUN python3 -m pip install -r /app/telegram-bot/requirements.txt

CMD [ "python", "main.py" ]