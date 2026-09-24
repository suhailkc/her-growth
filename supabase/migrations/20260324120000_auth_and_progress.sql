-- Digital Skills: allowlist, profile, progress (single-user RLS model)

create table public.allowed_emails (
  email text primary key,
  created_at timestamptz not null default now()
);

comment on table public.allowed_emails is 'Google accounts permitted to use the app (maintain via Supabase dashboard). Store emails lowercase, e.g. insert into public.allowed_emails (email) values (''you@example.com'');';

create table public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null default '',
  preferred_locale text not null default 'en' check (preferred_locale in ('en', 'ml')),
  onboarding_complete boolean not null default false,
  settings jsonb not null default '{"theme":"light","completionHaptics":false}'::jsonb,
  updated_at timestamptz not null default now()
);

create table public.topic_completions (
  user_id uuid not null references auth.users (id) on delete cascade,
  topic_key text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, topic_key)
);

create index topic_completions_user_id_idx on public.topic_completions (user_id);

create table public.user_journey_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  celebrated_stage_ids text[] not null default '{}',
  last_visit_at timestamptz,
  updated_at timestamptz not null default now()
);

alter table public.allowed_emails enable row level security;
alter table public.profiles enable row level security;
alter table public.topic_completions enable row level security;
alter table public.user_journey_state enable row level security;

-- Allowlist: users may only read a row matching their JWT email (existence check).
create policy "allowlisted_email_self_lookup"
  on public.allowed_emails
  for select
  to authenticated
  using (lower(email) = lower(coalesce(auth.jwt() ->> 'email', '')));

create policy "profiles_select_own"
  on public.profiles
  for select
  to authenticated
  using (user_id = auth.uid());

create policy "profiles_insert_own"
  on public.profiles
  for insert
  to authenticated
  with check (user_id = auth.uid());

create policy "profiles_update_own"
  on public.profiles
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "topic_completions_select_own"
  on public.topic_completions
  for select
  to authenticated
  using (user_id = auth.uid());

create policy "topic_completions_insert_own"
  on public.topic_completions
  for insert
  to authenticated
  with check (user_id = auth.uid());

create policy "topic_completions_update_own"
  on public.topic_completions
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "topic_completions_delete_own"
  on public.topic_completions
  for delete
  to authenticated
  using (user_id = auth.uid());

create policy "journey_state_select_own"
  on public.user_journey_state
  for select
  to authenticated
  using (user_id = auth.uid());

create policy "journey_state_insert_own"
  on public.user_journey_state
  for insert
  to authenticated
  with check (user_id = auth.uid());

create policy "journey_state_update_own"
  on public.user_journey_state
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());
