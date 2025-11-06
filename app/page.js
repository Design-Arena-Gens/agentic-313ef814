"use client";

const scriptText = `TITLE: NEW DAWN IN THE BARN

LOGLINE: On a storm-kissed night, a determined farmer and a steady-handed veterinarian guide a beloved cow through labor, reminding a small town that new life arrives with courage, care, and quiet wonder.

CHARACTERS:
- NARRATOR (calm, warm)
- FARMER MAYA (30s, capable, empathetic)
- VET DR. RIVERA (40s, precise, reassuring)
- COW (HOLLY) (gentle, laboring)
- FARMHAND JAKE (20s, eager, supportive)

SETTING:
- Interior barn, pre-dawn. Rain taps the roof. Hay dust floats in the beam of a swinging bulb.

?

SCENE 1 ? ARRIVAL
SFX: Rain, distant thunder.
NARRATOR: In the tender hours before sunrise, the barn listens, holds its breath, and waits.
(Maya checks Holly?s flank. Holly exhales a long, low breath.)
MAYA: Easy, girl. I?m right here.
(Jake brings towels.)
JAKE: Towels, warm water... anything else?
MAYA: Call Dr. Rivera. Tell her it?s time.

?

SCENE 2 ? ASSESSMENT
(Sliding door opens; Dr. Rivera steps in, shedding rain from her coat.)
DR. RIVERA: Let?s take a look.
(Nitrile gloves snap. She kneels, palpates gently.)
DR. RIVERA: Cervix is dilating. She?s progressing. Maya, we?ll need calm hands.
MAYA: You?ve got mine.
NARRATOR: Labor, an old language, needs no translation?only patience.

?

SCENE 3 ? THE FIRST PUSHES
(Holly shifts, a contraction rolls through her body.)
DR. RIVERA: Breathe, Holly. That?s it.
MAYA: You?re doing great, girl.
JAKE: Should I warm more water?
DR. RIVERA: Yes, and bring the iodine. We?ll prep the umbilical cord area.
NARRATOR: The barn?s symphony: breath, rain, a heartbeat quickening toward dawn.

?

SCENE 4 ? MALPRESENTATION
(Dr. Rivera?s face tightens slightly.)
DR. RIVERA: One hoof forward, one back. A slight malpresentation.
MAYA: Can we correct it?
DR. RIVERA: We can. Maya, support her. Jake, more light.
(She gently repositions the calf?s forelegs.)
DR. RIVERA: There. On the next contraction, we?ll guide.
NARRATOR: In practiced hands, crisis finds a corridor back to calm.

?

SCENE 5 ? DELIVERY
(Holly groans. A contraction crests.)
DR. RIVERA: Now. Gentle traction?downward, then arc.
(Maya and Dr. Rivera guide the calf.)
SFX: Wet slide, then a newborn?s first soft gasp.
MAYA (whispering): Hello there.
JAKE (beaming): It?s beautiful.
DR. RIVERA: Clear the airways.
(Maya clears the calf?s nostrils; the calf coughs, then bleats.)
NARRATOR: In a small universe of hay and rain, a star ignites.

?

SCENE 6 ? FIRST BREATHS, FIRST BONDS
(Maya rubs the calf briskly with towels.)
DR. RIVERA: Stimulate circulation. Keep her warm.
(Holly turns, lowing softly, licking the calf.)
MAYA: She knows.
DR. RIVERA: Instinct remembers what we forget.

?

SCENE 7 ? POSTPARTUM CARE
DR. RIVERA: Iodine for the navel. Monitor Holly for retained placenta. Offer warm water.
JAKE: On it.
MAYA: Colostrum within the hour.
DR. RIVERA (smiles): You read my mind.
NARRATOR: Simple rituals?clean, warm, watchful?are the architecture of thriving.

?

SCENE 8 ? FIRST STAND
(The calf trembles, attempts to stand, slips. Maya steadies her.)
MAYA: Take your time.
(The calf plants her hooves, wobbles upright.)
JAKE: She?s up!
DR. RIVERA: Strong reflexes. That?s good.
NARRATOR: Every first step rewrites gravity into grace.

?

SCENE 9 ? FEEDING
(The calf noses along Holly?s udder.)
DR. RIVERA: Let her find the teat herself if she can. Assist only if needed.
MAYA: She?s latching.
(The calf suckles. A quiet, steady rhythm.)
NARRATOR: Colostrum?liquid memory, a library of defenses.

?

SCENE 10 ? DAWN
(Rain eases; light gathers at the barn door.)
JAKE: The storm?s passing.
MAYA: Good sign.
DR. RIVERA: I?ll check back this afternoon. Call if anything changes.
MAYA: Thank you, Doctor.
NARRATOR: Morning arrives the way all miracles do?ordinary, undeniable.

?

EPILOGUE ? CARE NOTES (On-screen cards / VO)
- Observe Holly for appetite, hydration, normal temperature
- Ensure calf receives adequate colostrum within first 2 hours
- Disinfect navel, monitor for swelling or discharge
- Provide dry bedding, draft-free space, and clean water
- Schedule a wellness check if lethargy, fever, or nursing issues arise

FADE OUT.
`;

export default function Page() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(scriptText);
      alert('Script copied to clipboard');
    } catch (e) {
      alert('Copy failed. Please copy manually.');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([scriptText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cow-birth-script.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="page">
      <header className="header">
        <h1>Cow Birth Script</h1>
        <p className="subtitle">A cinematic, production-ready script with practical care notes</p>
        <div className="actions">
          <button onClick={handleCopy} className="btn">Copy Script</button>
          <button onClick={handleDownload} className="btn btn-primary">Download .txt</button>
        </div>
      </header>
      <article className="script">
        {scriptText.split('\n').map((line, idx) => (
          <p key={idx} className={line.startsWith('?') ? 'rule' : ''}>{line || '\u00A0'}</p>
        ))}
      </article>
      <footer className="footer">? {new Date().getFullYear()} Cow Birth Script ? Made for the barn and beyond</footer>
    </div>
  );
}
