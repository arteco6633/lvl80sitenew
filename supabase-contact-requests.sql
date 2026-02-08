-- Запустить в Supabase Dashboard → SQL Editor
-- Создаёт таблицу для заявок с сайта

create table if not exists contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  message text not null,
  source text not null check (source in ('contacts', 'modal')),
  created_at timestamptz default now()
);

-- Разрешить вставку для анонимных пользователей (anon key)
alter table contact_requests enable row level security;

create policy "Allow insert for anonymous" on contact_requests
  for insert to anon with check (true);

-- Только аутентифицированные пользователи могут читать
create policy "Allow read for service role" on contact_requests
  for select to service_role using (true);
