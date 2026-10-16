#!/usr/bin/env python3
"""Deterministic one-page A4 facilitator companion (reportlab) plus text transcript."""
from pathlib import Path

from reportlab.graphics import renderPDF
from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[2]
PDF = ROOT / "output/pdf/typologyquiz-elements-building-materials-facilitator.pdf"
TXT = ROOT / "docs/growth/market-ops/2026-10-16-chemistry-companion.txt"

NAVY, TEAL, TEAL_DK = HexColor("#0B1F3A"), HexColor("#0E8A86"), HexColor("#0A5F5C")
WARM, CARD, MIST = HexColor("#FBF7EF"), HexColor("#FFFFFF"), HexColor("#D9F0EE")
W, H = A4
M = 36
CW = W - 2 * M

QUIZ = "https://typologyquiz.com/trivia/periodic-table-first-20/"
ACS = "https://www.acs.org/education/national-chemistry-week.html"
RSC_SI = "https://periodic-table.rsc.org/element/14/silicon"
RSC_CA = "https://periodic-table.rsc.org/element/20/calcium"

TITLE = "What helps build a house?"
SUBTITLE = "An elements-to-materials warm-up | Facilitator edition | 16 October 2026"
AUDIENCE = ("Audience:", "Suggested for learners 12+ familiar with element symbols; the facilitator reviews suitability. Duration: 9 minutes.")
OBJECTIVE = ("Proposed activity objective:", "recall element names and explain one difference between an element and a compound in a building material.")
STEPS = [
    ("1", "Recall (3 min)", "Open the first-20 quiz, or on paper write the names matching Si, Ca, O and C, then as many other first-20 elements as time allows. Pairs can share one device; allow untimed paper use if preferred. No room or public chat is needed."),
    ("2", "Connect (3 min)", "Show the two cards below. Ask: Is a glass window pure silicon? Is limestone calcium metal? Answer: No. Those materials contain compounds, whose properties differ from the isolated elements. Do not imply every glass or cement has identical composition. No samples, chemicals or demonstrations are needed."),
    ("3", "Explain (3 min)", "Ask each pair to give one material, name an element in one of its compounds, and explain why the material is not the pure element. Accept spoken, written or drawn answers; judge explanations, not speed. Example: silica in glass contains silicon and oxygen; glass is not pure silicon."),
]
CARDS = [
    ("Silicon | Si | atomic number 14", "Silica contains silicon and oxygen and is a main ingredient of common glass."),
    ("Calcium | Ca | atomic number 20", "Limestone is mainly calcium carbonate and is used in making cement."),
]
KEY_HEAD = "Offline answer key"
KEY = "Si = silicon | Ca = calcium | O = oxygen | C = carbon"
ACCESS_HEAD = "Access choices"
ACCESS = "Shared device or facilitator read-aloud. Large-print, untimed paper alternative. No need to share scores or names, or to use rooms or chat. This PDF is not claimed to be fully accessibility-certified; a plain-text transcript is provided separately."
SEASON = ("Seasonal note:", "optional tie-in to National Chemistry Week, 18-24 October 2026 (theme: Chemistry Under Construction). After 24 October, describe the event as past; the activity itself is evergreen.")
FOOT = ("Prepared by TypologyQuiz. Independent warm-up, not classroom-tested or ACS/RSC endorsed. "
        "Original text only; no third-party art reproduced. Links checked 16 Oct 2026.")
SOURCES = [("Public quiz", QUIZ), ("ACS National Chemistry Week", ACS),
           ("RSC silicon", RSC_SI), ("RSC calcium", RSC_CA)]


def style(size, lead, color=NAVY, bold=False):
    return ParagraphStyle("s", fontName="Helvetica-Bold" if bold else "Helvetica",
                          fontSize=size, leading=lead, textColor=color)


def para(c, text, x, ytop, w, st):
    p = Paragraph(text, st)
    _, h = p.wrap(w, 1000)
    p.drawOn(c, x, ytop - h)
    return h


def height(text, w, st):
    return Paragraph(text, st).wrap(w, 1000)[1]


def build():
    PDF.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(PDF), pagesize=A4, invariant=1, pageCompression=0)
    c.setTitle(TITLE + " - TypologyQuiz facilitator companion")
    c.setAuthor("TypologyQuiz")
    c.setSubject("Elements-to-materials warm-up, facilitator edition")
    c.setFillColor(WARM); c.rect(0, 0, W, H, stroke=0, fill=1)

    body = style(10.5, 13.6)
    # header
    hh = 76
    c.setFillColor(NAVY); c.roundRect(M, H - M - hh, CW, hh, 8, stroke=0, fill=1)
    c.setFillColor(TEAL); c.rect(M, H - M - hh, 8, hh, stroke=0, fill=1)
    c.setFillColor(white); c.setFont("Helvetica-Bold", 26)
    c.drawString(M + 22, H - M - 36, TITLE)
    c.setFillColor(MIST); c.setFont("Helvetica", 10.5)
    c.drawString(M + 22, H - M - 58, SUBTITLE)
    y = H - M - hh - 12

    for lab, txt in (AUDIENCE, OBJECTIVE):
        y -= para(c, f"<b>{lab}</b> {txt}", M, y, CW, body) + 3
    y -= 5

    ix = M + 30
    iw = CW - 30
    cw = (iw - 10) / 2
    for num, head, txt in STEPS:
        t = f'<font color="#0A5F5C"><b>{head}.</b></font> {txt}'
        h = height(t, iw, body)
        c.setFillColor(TEAL_DK); c.circle(M + 11, y - 11, 11, stroke=0, fill=1)
        c.setFillColor(white); c.setFont("Helvetica-Bold", 12)
        c.drawCentredString(M + 11, y - 15, num)
        para(c, t, ix, y, iw, body)
        y -= h + 6
        if num == "2":
            cs = style(10.5, 13.6)
            ch = max(height(f"<b>{a}</b><br/>{b}", cw - 16, cs) for a, b in CARDS) + 14
            for i, (a, b) in enumerate(CARDS):
                x = ix + i * (cw + 10)
                c.setFillColor(CARD); c.setStrokeColor(TEAL); c.setLineWidth(1.2)
                c.roundRect(x, y - ch, cw, ch, 6, stroke=1, fill=1)
                c.setFillColor(TEAL); c.rect(x, y - ch + 6, 4, ch - 12, stroke=0, fill=1)
                para(c, f'<font color="#0A5F5C"><b>{a}</b></font><br/>{b}', x + 12, y - 7, cw - 20, cs)
            y -= ch + 8
    y -= 2

    # key + access
    colw = (CW - 12) / 2
    kt = f'<font color="#0A5F5C"><b>{KEY_HEAD}</b></font><br/>{KEY}'
    at = f'<font color="#0A5F5C"><b>{ACCESS_HEAD}</b></font><br/>{ACCESS}'
    bh = max(height(kt, colw - 20, body), height(at, colw - 20, body)) + 14
    for i, t in enumerate((kt, at)):
        x = M + i * (colw + 12)
        c.setFillColor(MIST); c.roundRect(x, y - bh, colw, bh, 6, stroke=0, fill=1)
        para(c, t, x + 10, y - 7, colw - 20, body)
    y -= bh + 8

    y -= para(c, f"<b>{SEASON[0]}</b> {SEASON[1]}", M, y, CW, body) + 8

    # footer
    small = style(8.5, 10.6)
    link = ParagraphStyle("l", parent=small, textColor=TEAL_DK)
    lines = [(FOOT, small)] + [
        (f'{n}: <u><link href="{u}" color="#0A5F5C">{u}</link></u>', link) for n, u in SOURCES]
    fw = CW - 76
    fh = sum(height(t, fw, st) for t, st in lines) + 2
    top = M + fh + 8
    assert y > top + 4, f"content overflows: y={y:.1f} footer_top={top:.1f}"
    c.setStrokeColor(TEAL); c.setLineWidth(1); c.line(M, top, W - M, top)
    fy = top - 6
    for t, st in lines:
        fy -= para(c, t, M, fy, fw, st)
    # QR
    size = 60
    widget = qr.QrCodeWidget(QUIZ)
    b = widget.getBounds()
    d = Drawing(size, size, transform=[size / (b[2] - b[0]), 0, 0, size / (b[3] - b[1]), 0, 0])
    d.add(widget)
    renderPDF.draw(d, c, W - M - size, M + 12)
    c.linkURL(QUIZ, (W - M - size, M + 12, W - M, M + 12 + size), relative=0, thickness=0)
    c.setFillColor(NAVY); c.setFont("Helvetica", 8.5)
    c.drawRightString(W - M, M + 1, "Scan: first-20 quiz")
    c.showPage(); c.save()


def transcript():
    out = [TITLE, SUBTITLE, "", f"{AUDIENCE[0]} {AUDIENCE[1]}", f"{OBJECTIVE[0]} {OBJECTIVE[1]}", ""]
    for num, head, txt in STEPS:
        out.append(f"{num}. {head}. {txt}")
        if num == "2":
            out += [f"   - {a}: {b}" for a, b in CARDS]
    out += ["", f"{KEY_HEAD}: {KEY}", f"{ACCESS_HEAD}: {ACCESS}", "", f"{SEASON[0]} {SEASON[1]}", "",
            FOOT] + [f"{n}: {u}" for n, u in SOURCES]
    text = "\n".join(out) + "\n"
    assert text.isascii()
    TXT.write_text(text, encoding="ascii")


if __name__ == "__main__":
    build()
    transcript()
