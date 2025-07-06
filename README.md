# Запуск приложения


## Подключение к базе дынных и создание таблиц.

В проекте используется **PostgreSQL**.

1. Скачать **PostgreSQL**.
2. В файл по пути **todolist/backend/bd.js** вписать свои данные
**user, password, port**.
3. В терминале **SQL SHELL** создать базу данных **todolist** командой
**CREATE DATABASE todolist**;
4. Подключитья к базе данных **todolist** командой
**\connect todolist**
5. Создать таблицы скопировав код из файла **todolist/backend/database.sql**

## Запуск сервера backend
1. Открыть терминал и перейти в папу **backend** командой
**cd backend**
2. Прописать команду
**node index.js**

## Запуск сервера frontend
1. Открыть терминал и в какталоге **todolist** прописать команду
**npm start**


