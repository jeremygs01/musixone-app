-- example create table
create table if not exists songs (id uuid primary key default gen_random_uuid(), title text);
