-- The site only ever sends new entries to these two tables; it never reads them back.
-- Restrict the public-facing roles to INSERT so submitted enquiries cannot be read,
-- changed or deleted by anyone visiting the site.

REVOKE ALL ON public.contact_enquiries FROM PUBLIC, anon, authenticated;
REVOKE ALL ON public.support_interest FROM PUBLIC, anon, authenticated;

GRANT INSERT ON public.contact_enquiries TO anon, authenticated;
GRANT INSERT ON public.support_interest TO anon, authenticated;

GRANT ALL ON public.contact_enquiries TO service_role;
GRANT ALL ON public.support_interest TO service_role;

ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.support_interest ENABLE ROW LEVEL SECURITY;