CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE teacher (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    class VARCHAR NOT NULL
);

CREATE TABLE post (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    teacher_id UUID,
    CONSTRAINT fk_teacher FOREIGN KEY (teacher_id) REFERENCES teacher(id)
);
