DROP POLICY IF EXISTS "Anyone can submit enquiry" ON public.contact_enquiries;
CREATE POLICY "Anyone can submit valid enquiry" ON public.contact_enquiries
FOR INSERT TO anon, authenticated
WITH CHECK (
  consent = true
  AND char_length(btrim(parent_name)) BETWEEN 1 AND 200
  AND char_length(btrim(contact)) BETWEEN 3 AND 200
  AND char_length(btrim(child_class)) BETWEEN 1 AND 50
  AND (message IS NULL OR char_length(message) <= 2000)
);

DROP POLICY IF EXISTS "Anyone can submit support interest" ON public.support_interest;
CREATE POLICY "Anyone can submit valid support interest" ON public.support_interest
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) BETWEEN 1 AND 200
  AND char_length(btrim(contact)) BETWEEN 3 AND 200
  AND char_length(btrim(support_type)) BETWEEN 1 AND 100
  AND (message IS NULL OR char_length(message) <= 2000)
);