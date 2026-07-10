import Link from "next/link";
import { SITE } from "@/lib/site";
import { InviteFriends } from "@/components/InviteFriends";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="site-logo">
              <img
                src="/assets/typologyquiz-logo.svg"
                alt={SITE.legalName}
                className="footer-logo-img"
                width={200}
                height={48}
              />
            </Link>
            <p className="footer-tagline">
              Free typology quizzes for figuring yourself out with friends. No account. Scored on
              your device.
            </p>
          </div>

          <div className="footer-cols">
            <div>
              <h4 className="footer-heading">Quizzes</h4>
              <div className="footer-links">
                <Link href="/tests" className="footer-link">
                  All tests
                </Link>
                <Link href="/test/friend-role" className="footer-link">
                  Friend role
                </Link>
                <Link href="/test/social-battery" className="footer-link">
                  Social battery
                </Link>
                <Link href="/test/attachment-style" className="footer-link">
                  Attachment
                </Link>
              </div>
            </div>
            <div>
              <h4 className="footer-heading">Company</h4>
              <div className="footer-links">
                <Link href="/about" className="footer-link">
                  About
                </Link>
                <Link href="/credits" className="footer-link">
                  Credits
                </Link>
                <a href={`mailto:${SITE.email}`} className="footer-link">
                  Contact
                </a>
              </div>
            </div>
            <div className="footer-invite">
              <h4 className="footer-heading">Invite</h4>
              <InviteFriends variant="compact" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <div className="footer-legal">
            <Link href="/about" className="footer-link footer-legal-link">
              Privacy
            </Link>
            <Link href="/about" className="footer-link footer-legal-link">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
