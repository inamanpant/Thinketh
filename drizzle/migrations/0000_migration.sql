CREATE TABLE public.contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name text NOT NULL CHECK (char_length(parent_name) BETWEEN 1 AND 120),
  contact text NOT NULL CHECK (char_length(contact) BETWEEN 3 AND 200),
  child_class text NOT NULL CHECK (char_length(child_class) <= 40),
  message text CHECK (char_length(message) <= 2000),
  consent boolean NOT NULL CHECK (consent = true),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_enquiries TO anon, authenticated;
GRANT ALL ON public.contact_enquiries TO service_role;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit enquiry" ON public.contact_enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.support_interest (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  contact text NOT NULL CHECK (char_length(contact) BETWEEN 3 AND 200),
  support_type text NOT NULL CHECK (char_length(support_type) <= 60),
  message text CHECK (char_length(message) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.support_interest TO anon, authenticated;
GRANT ALL ON public.support_interest TO service_role;
ALTER TABLE public.support_interest ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit support interest" ON public.support_interest FOR INSERT TO anon, authenticated WITH CHECK (true);