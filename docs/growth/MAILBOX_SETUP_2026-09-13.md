# TypologyQuiz mailbox setup — September 13, 2026

The owner confirmed hello@typologyquiz.com does not yet exist and requested creation through Zoho or Cloudflare. Nothing has been sent to outreach prospects.

Current Canadian Zoho pricing UI: Mail Lite 5 GB C$1.25/user/month billed annually, no monthly option. One mailbox is C$15/year before applicable tax. No forever-free plan was offered in this Canadian signup. Signup prepared in the in-app browser at https://mail.zohocloud.ca/signup?type=org&plan=newMail5gb . User must enter a new password, accept account terms and finish verification. No account creation, subscription or payment has been completed by the agent. Recovery email field should be checked by the user; the browser automation did not expose a confirmed filled value.

Cloudflare can continue hosting DNS. Public MX/TXT lookups returned no records during this check; no mail DNS records have been changed. After the Zoho account and plan are ready, add typologyquiz.com in its admin console, use the exact tenant-provided verification record, create hello, and configure the issued MX/SPF/DKIM records. Verify delivery in both directions before using the address for submissions. Do not guess regional Zoho MX hosts or overwrite unrelated DNS records.

Cloudflare's 2026 Email Service now supports outbound API/Workers/SMTP as well as routing. Its published service positioning is transactional email; it is not a ready-made mailbox. Zoho is the simpler mailbox for normal business conversations. Neither provider should be treated as permission for mass promotional email. Use the invited editorial submission channels documented in OUTREACH_2026-09-13.md and respect provider/recipient policies.

Sources:
- https://www.zoho.com/mail/zohomail-pricing.html
- https://www.zoho.com/mail/help/adminconsole/add-domains.html
- https://www.zoho.com/mail/help/usage-policy.html
- https://developers.cloudflare.com/email-service/reference/faq/
- https://developers.cloudflare.com/email-service/api/send-emails/smtp/
