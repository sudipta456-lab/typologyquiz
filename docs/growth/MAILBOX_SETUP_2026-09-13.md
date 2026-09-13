# TypologyQuiz mailbox setup — September 13, 2026

LATEST: Bidirectional delivery passed. Sent a test from hello@typologyquiz.com to the owner Gmail; received in Gmail Inbox. Replied from Gmail and opened that reply in Zoho, addressed to hello. Display name TypologyQuiz. Thus mail works despite Zoho’s MX verification UI still reporting propagation delay. Two operator-only test messages sent; no publisher outreach sent.

## Latest: hello alias created

User selected ceo@therapreneur.app for replacement. Used Zoho's Edit Alias address form to change it directly to hello@typologyquiz.com, display name TypologyQuiz, without changing the primary mailbox. Zoho confirmed “Email alias updated successfully” and listed the new address. No extra license or payment. The old ceo alias no longer appears. MX re-verification still reports DNS propagation failure despite public MX records resolving correctly. Actual send/receive testing remains pending; no outreach sent.

## September 13 continuation — domain added, alias blocked

User approved adding typologyquiz.com to the existing Zoho organization and chose an alias in the existing inbox. Domain ownership verified with CNAME. Added ownership TXT and DNS-only CNAME, three Canadian MX records (10 mx.zohocloud.ca, 20 mx2.zohocloud.ca, 50 mx3.zohocloud.ca), SPF `v=spf1 include:zohocloud.ca ~all`, and Zoho-issued zmail._domainkey DKIM TXT in Cloudflare. Existing Worker records unchanged. Public Cloudflare resolver returns all three MX records; Zoho still reports MX propagation delay. SPF/DKIM setup lookup showed success icons.

Creating TypologyQuiz / hello@typologyquiz.com was rejected: “You have reached the maximum number of email aliases permitted.” Add User also reports no available mailbox license. No alias created, no existing alias removed, no purchase, no test mail or outreach sent. Need user identification of an unused alias to replace, or a separate paid mailbox. Do not claim hello is operational. Chrome Zoho tab 1810480078 retained; Cloudflare user tab 1810479995 on DNS. Narrow five-record zone import succeeded via native file picker after extension upload was unavailable.

The earlier signup notes below are historical; the user chose the existing organization.

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
