create TABLE person(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255)
);

create TABLE post
(
    id        SERIAL PRIMARY KEY,
    text      VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE,
    user_id   INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);