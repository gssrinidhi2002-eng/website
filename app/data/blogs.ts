import { ContentBlock } from "../types/content";

export interface Blog {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    date: string;
    link: string; // Can be derived from id, but keeping for compatibility
    blocks: ContentBlock[];
}

export const blogs: Blog[] = [
    {
        id: "blog1",
        title: "What We Shipped Because We Ran Out of Time",
        category: "PRODUCT",
        image: "/assets/Blog1/1.png",
        description: "When time ran out, we shipped clarity over ambition—cutting complexity, unstable ideas, and polish to protect what users could immediately understand.",
        date: "Oct 3, 2025",
        link: "/blogs/blog1",
        blocks: [
            {
                type: 'markdown',
                content: `
# When Time Runs Out, the Product Tells the Truth

Every product has two versions.

The one imagined at the start.

And the one that ships when time runs out.

The second version often feels compromised.

Features are cut. Systems are simplified. Ambition is trimmed to fit the clock.

But that version is usually the most **honest** one.

---

When time feels abundant, products collect possibilities.

Edge cases are noted. Complexity is justified. Promises are deferred.

*The AI will get better later.*
*The UX will be refined after launch.*

In that phase, almost everything feels defensible—because nothing has to survive reality yet.

Then deadlines arrive.

And the question quietly changes.

Not:

> *What should this be?*

But:

> **What actually matters right now?**

---

Under time pressure, weak ideas disappear on their own.

* Features that require explanation don’t survive
* Unstable or unpredictable AI behavior gets removed
* Nice-to-have polish gives way to immediate clarity

What ships is what users can understand *without patience the product hasn’t earned yet*.

Time doesn’t allow products to hide behind intention.

Only signal remains.

---

Deadlines don’t ruin products.

They **strip away self-deception**.

They force teams to protect the *experience* instead of the *idea*.

They reveal the gap between what sounded compelling in a roadmap—and what holds up when choices become irreversible.

---

The version that ships because time ran out reveals:

* What the product is truly about
* What users actually need first
* What the team is willing to stand behind

Not the ideal vision.

The real one.

---

The most important post-launch question isn’t:

> *What didn’t we ship?*

It’s:

> **What did we choose to protect when we couldn’t protect everything?**

Because that answer—more than any pitch deck or roadmap—defines what the product actually is.

                `,
            }
        ]
    },
    {
        id: "blog2",
        title: "Learning to Say No as the Youngest in the Room",
        category: "EXPERIENCE",
        image: "/assets/Blog2/2.png",
        description: "In fast teams, saying no at the right time helps prevent unfocused work, hidden trade-offs, and fragile product decisions.",
        date: "Mar 09, 2025",
        link: "/blogs/blog2",
        blocks: [
            {
                type: 'markdown',
                content: `
# Learning to Say No When You’re the Youngest in the Room

Being the youngest person in the room comes with an unspoken contract.

You listen more than you speak.
You agree more than you disagree.
You earn your place by not slowing things down.

In fast-moving product teams, that contract feels even stricter.

Ideas fly. Confidence is loud. Decisions are made quickly and with conviction.

Saying *yes* feels like participation.

Saying *no* feels like arrogance.

So you say yes.

At first, it feels safe.

---

## When Yes Looks Like Alignment

Early on, saying yes looks like alignment.

Plans move forward smoothly.

Meetings end on time.

Everyone appears to be on the same page.

But beneath that surface calm, something else begins to happen.

* Scopes quietly expand
* Edge cases stack up
* Assumptions go unchallenged

The work starts to feel heavier—not because it’s hard, but because it’s **unfocused**.

The discomfort shows up first at the edges:

* In implementation details that keep growing
* In timelines that slip for unclear reasons
* In teams that hesitate before committing

None of this feels big enough to interrupt a confident room.

So you stay quiet.

---

## Most Ideas Aren’t Bad. They’re Just Early.

Over time, a pattern becomes impossible to ignore.

Most ideas aren’t bad.

They’re just **early**.

They arrive before the product is ready.

Before the system is stable.

Before the team has finished digesting the last decision.

But when momentum is prized, timing becomes invisible.

Everything feels urgent.

Everything feels like progress.

In that environment, saying no feels like stepping in front of a moving train.

---

## The First Real No

The first real *no* rarely sounds like a rejection.

It sounds hesitant.

Careful.

Almost apologetic.

It’s framed as a question instead of a statement:

* What happens if we add this now?
* What gets delayed if we prioritize this?
* What assumption are we locking ourselves into?

These questions don’t stop the room.

But they change its **temperature**.

The conversation slows.

Trade-offs become visible.

What felt like obvious progress starts to reveal its cost.

And something unexpected happens.

Trust doesn’t break.

It **sharpens**.

---

## Proximity Creates Clarity

There’s a common fear that being the youngest person in the room means you don’t have enough context to push back.

But proximity has its own form of clarity.

When you’re close to execution:

* You feel the weight of every extra decision
* You see how easily focus fragments
* You notice when “just one more thing” turns into ten

That perspective doesn’t come from experience.

It comes from **contact**.

Ignoring it doesn’t make products stronger.

It makes them **fragile**.

---

## When Yes Becomes Irresponsible

Eventually, saying yes to everything stops feeling collaborative.

It starts to feel **irresponsible**.

Not rebellious.

Not opinionated.

Just careless.

Because:

* Every yes expands scope
* Every yes introduces risk
* Every yes asks the team to carry more than it already is

And when yes becomes automatic, it stops meaning anything at all.

---

## What a Confident No Sounds Like

The most confident no isn’t loud.

It doesn’t compete with seniority or authority.

It doesn’t posture.

It’s grounded.

It’s specific.

It’s about consequences—not ego.

It says:

> Not yet.
> Not like this.
> Not without understanding the cost.

And paradoxically, this is when the youngest voice in the room starts to carry weight.

---

## From Participation to Leadership

Learning to say no isn’t about asserting dominance.

It’s about developing **judgment**.

Judgment to recognize when momentum is useful—and when it’s masking uncertainty.

Judgment to protect focus when ambition threatens to dilute it.

Judgment to care more about outcomes than appearances.

Saying yes is easy.

Learning when to say no—especially when you’re the youngest in the room—is the skill that turns participation into leadership.
           `,
            }
        ]
    },
    {
        id: "blog3",
        title: "Building for Retention Before Product–Market Fit Is a Trap",
        category: "PRODUCT",
        image: "/assets/Blog3/3.png",
        description: "Optimizing retention before product–market fit creates false confidence; early retention reflects curiosity or confusion, not value, delaying real learning and alignment.",
        date: "Feb 19, 2025",
        link: "/blogs/blog3",
        blocks: [
            {
                type: 'markdown',
                content: `
# Retention Is a Dangerous Signal Before Product–Market Fit

Retention is usually treated as proof.

If users come back, the product must be working.
If they don’t, something must be broken.

In early-stage products—especially **games** and **AI-driven systems**—this assumption causes more damage than clarity.

Because before product–market fit exists, **retention doesn’t measure love**.

It measures confusion, habit, or curiosity.

---

## Why Teams Chase Retention Too Early

Early on, teams gravitate toward retention because it feels concrete.

It’s a number you can improve.
A graph that can go up.
A signal that feels closer to validation than messy qualitative feedback.

But without product–market fit, retention is **unstable by nature**.

Users return for reasons that have little to do with real value:

* Novelty
* Exploration
* Luck
* Or sheer tolerance

When those reasons fade, retention collapses—regardless of how much the product was optimized around it.

What looks like momentum is often just time passing.

---

## Games Reveal This Faster Than Most Products

Games surface this problem early and brutally.

* In **hypercasual games**, players return not because they’re invested—but because retrying is frictionless.
* In **casual games**, they return because progress feels safe and reversible.
* In **midcore games**, they return because mastery is still visible.

None of this guarantees product–market fit.

It only guarantees that the product isn’t actively pushing users away *yet*.

Retention here is permissive—not affirmative.

---

## How AI Products Distort Retention Signals

AI products add another layer of distortion.

Early retention often spikes because the system feels impressive.

Users test boundaries.
They poke at intelligence.
They explore failure.

This looks like engagement.

But curiosity-driven retention is fragile.

The moment expectations outpace understanding, users don’t churn loudly.

They simply stop exploring.

Retention falls not because the AI failed—but because the experience stopped **teaching users how to use it**.

---

## The Real Risk: False Confidence

Optimizing for retention too early creates a dangerous illusion of progress.

* Features get locked in
* Complexity accumulates
* Teams mistake repetition for satisfaction

Instead of asking *why* users leave, the focus shifts to *how* to keep them longer.

This flips the problem on its head.

Before product–market fit:

> **Churn is information.**
> **Retention without understanding is noise.**

---

## The Question That Actually Matters

At this stage, the most useful question isn’t:

> *“How do we increase retention?”*

It’s:

> **“Do returning users know why they’re here?”**

Are they:

* Clearer on the value the second time?
* More confident in what the product is for?
* More intentional in how they use it?

If not, retention isn’t compounding value.

It’s **delaying learning**.

---

## Teaching Comes Before Keeping

In early-stage products—especially games—the goal isn’t to keep users.

It’s to **teach them what the product is actually for**.

When users leave quickly *but clearly*, that’s progress.

When users stay *without understanding*, that’s a warning.

---

## When Retention Finally Matters

Retention makes sense **after alignment**:

* After expectations are set
* After value is legible
* After the product feels intentional rather than exploratory

Before that, retention should be **observed—not chased**.

Because product–market fit doesn’t come from making people stay.

It comes from making them want to come back—

> **for the same reason.**
    `,
            }
        ]
    },
    {
        id: "blog4",
        title: "We Kept Fixing Features. Users Kept Leaving.",
        category: "MANAGEMENT",
        image: "/assets/Blog4/4.png",
        description: "We fixed features, but users left—because uncertainty, not usability, drives churn. Most product failures are emotional before they’re technical.",
        date: "Nov 28, 2025",
        link: "/blogs/blog4",
        blocks: [
            {
                type: 'markdown',
                content: `
# The Emotional Friction Behind AI‑Native Products

*Why most product failures aren’t functional—and why fixing UX alone isn’t enough.*

---

While working inside a game startup building **AI‑native experiences**, I began noticing the same pattern repeat itself across products, playtests, and teams.

Whenever something wasn’t working, it was framed as a *functional* problem:

* Retention dipped → tweak onboarding
* Players dropped off → simplify mechanics
* Metrics became noisy → improve tracking

These responses weren’t wrong—but they were incomplete.

Over time, it became clear that many of these problems weren’t rooted in **usability**, **logic**, or even design execution.

They were rooted in something quieter and harder to measure:

> **How the product made people feel.**

---

## Observation 1: Users Rarely Quit Because They Don’t Understand

### They Quit Because They Feel Uncertain

In playtest after playtest, players technically understood what to do.

* They could explain the mechanics
* They could follow instructions
* They could complete early objectives

And yet, drop‑offs still happened—often within the first few minutes.

What stood out wasn’t confusion. It was **hesitation**.

* Players paused longer than expected
* They hovered before committing to choices
* They restarted interactions even when nothing was “wrong”

The underlying thought wasn’t:

> “I don’t know what to do.”

It was:

> **“I’m not sure if I’m doing this *right*.”**

The product wasn’t failing to explain itself.

It was failing to **reassure**.

---

## Observation 2: When AI Behavior Shifts, Metrics Lose Meaning

AI‑native products behave fundamentally differently from traditional software.

Small changes in system behavior—prompt tuning, model updates, response variance—can reshape the entire experience **without any visible UI change**.

Across iterations, a familiar pattern emerged:

* Retention swung unpredictably
* Funnels broke without obvious causes
* Benchmarks stopped being comparable week to week

At first glance, this looked like a tracking problem.

It wasn’t.

Metrics weren’t unreliable because analytics were broken—but because **user expectations were unstable**.

When users can’t predict how a system will respond, curiosity slowly turns into **caution**.

Until emotional expectations stabilize, **data remains noisy**—no matter how clean your dashboards are.

---

## Observation 3: Adding Clarity Often Increased Drop‑Offs

When something felt confusing, the default response was to explain more:

* More text
* More instructions
* More upfront context

But playtests consistently showed a counterintuitive result.

The moment explanations became dense, **engagement dropped**.

* Users skimmed
* They skipped
* They rushed forward without absorbing information

The issue wasn’t the *accuracy* of the information.

It was the **emotional cost** of processing it.

Users were far more comfortable **discovering rules through action** than being told everything in advance.

> Understanding followed confidence—not the other way around.

---

## Observation 4: Early Friction Felt Like a Test, Not an Invitation

In early interactions, the product often demanded effort before offering reward:

* Unfamiliar systems
* Ambiguous AI responses
* Unclear success criteria

From the user’s perspective, this didn’t feel like exploration.

It felt like **evaluation**.

As if the product was silently asking:

> **“Are you good enough to be here?”**

When products feel judgmental early on, users don’t rage‑quit.

They leave quietly—often without consciously knowing why.

---

## Observation 5: Product Chaos Is Often an Emotional Team Problem

This pattern didn’t stop with users.

Inside the startup, frequent shifts in direction and evolving system behavior created a parallel form of friction:

* Decisions slowed
* Teams became reactive
* Commitments felt risky

The issue wasn’t a lack of talent, effort, or alignment.

It was **uncertainty**.

Without emotional stability, even strong teams hesitate to move forward decisively.

---

## The Shift That Changed Everything

Eventually, one reframing became unavoidable.

Instead of asking:

> **“What’s broken?”**

It became more useful to ask:

* Where might users feel unsure?
* Where are expectations unclear?
* Where does the system feel unpredictable?
* Where does effort come before reward?

Products don’t fail only because they don’t work.

They fail because they make people feel:

* Lost
* Judged
* Overwhelmed
* Emotionally disconnected

---

## The Quiet Work of Product

The quiet work of product isn’t just enabling functionality.

It’s shaping **emotional experience**.

Great products don’t shout clarity.

They gently remove doubt.

They make users feel:

* Capable before skilled
* Curious before committed
* Safe before invested

Most product problems aren’t technical.

They’re emotional.

And once you start observing products through that lens, it’s hard to unsee.

                `,
            }
        ]
    },
    {
        id: "blog5",
        title: "What Game Genres Taught Me About UX and AI",
        category: "UX",
        image: "/assets/Blog5/5.png",
        description: "Why different game genres expose the real limits—and responsibilities—of AI-driven user experience.",
        date: "Dec 06, 2025",
        link: "/blogs/blog5",
        blocks: [
            {
                type: 'markdown',
                content: `
# What Games Teach About AI UX (That Other Products Miss)

Games don’t lie to you.

Hypercasual games lie the least.

When a player opens a hypercasual game, there is no patience buffer. No curiosity reserve. No willingness to learn.

The game has **seconds** to prove itself.

If the experience isn’t immediately legible, it’s over.

That brutality teaches a lesson most AI products still ignore:

> **Clarity isn’t a nice-to-have. It *is* the product.**

---

## Hypercasual: Where UX Has No Second Chances

Hypercasual games reveal something uncomfortable about user behavior.

Users don’t explore.

They don’t experiment.

They don’t read.

They **act**.

Every tap is a test of whether the system understands intent.

Every delay feels like friction.

Every unclear outcome feels like a mistake.

In this environment, AI can’t hide behind intelligence.

If it misreads intent even once, the player leaves—long before the system earns a second chance.

Here, UX isn’t guidance.

It’s **instant alignment**.

---

## Casual: UX as Emotional Safety

Casual games are kinder—but only slightly.

Players are willing to stay longer, but only if the experience feels *safe*.

They want to relax, not think.

They want progress without pressure.

In casual games, UX becomes a form of **emotional regulation**.

* Too much AI unpredictability feels stressful
* Too many options feel demanding
* Too much explanation feels like work

Casual players don’t want to feel impressed.

They want to feel **competent**.

AI systems that adapt quietly—without announcing their complexity—fit best here.

The moment intelligence becomes visible, it becomes intimidating.

---

## Midcore: Rules, Fairness, and Trust

Midcore games change the equation.

Players expect depth.

They accept complexity.

They want mastery.

But even here, patience has limits.

Midcore players don’t mind learning systems—but they demand **fairness**.

If AI behaves inconsistently, it doesn’t feel dynamic.

It feels broken.

In midcore games, UX is about **rules and trust**.

Players are happy to lose if they understand why.

They quit when they don’t.

AI in this context must behave like a *system*, not a personality.

Believability matters more than surprise.

---

## AI-Native Games: When Freedom Becomes Fragile

AI-native games complicate everything.

They promise freedom.

They advertise intelligence.

They suggest limitless possibility.

But without careful UX, that promise collapses quickly.

When AI behavior shifts without warning, players don’t feel wonder.

They feel **uncertainty**.

They stop experimenting.

They start playing defensively—or they stop playing entirely.

Across genres, the same pattern emerges:

> **The more open-ended the AI, the more grounded the UX must be.**

---

## The Truth Games Expose About AI UX

Across hypercasual, casual, midcore, and AI-native games, a consistent lesson appears:

* Hypercasual demands **instant clarity**
* Casual demands **emotional safety**
* Midcore demands **consistency**
* AI-native experiences demand **expectation management**

Ignore any one of these—and intelligence becomes irrelevant.

---

## Failure Isn’t the Problem. Silence Is.

Games also expose a critical truth about AI UX.

Failure isn’t the issue.

**Unexplained failure is.**

In games, failure teaches.

In AI products, failure often confuses.

When AI fails silently, users blame the system.

When AI fails *with feedback*, users adapt.

UX doesn’t remove AI limitations.

It teaches users how to live with them.

---

## What Working on Games Teaches You

Working across hypercasual, casual, midcore, and AI-driven games reshapes how UX is understood.

UX isn’t about elegance.

It’s about **trust**.

AI isn’t about capability.

It’s about **predictability**.

And games—more than any other medium—force these truths into the open.

Because when UX fails in games, users don’t complain.

They leave.

                `,
            }
        ]
    },

    // {
    //     id: "blog1",
    //     title: "We Kept Fixing Features. Users Kept Leaving.",
    //     category: "ARCHITECTURE",
    //     image: "/assets/Blog1/1.png",
    //     description: "We fixed features, but users left—because uncertainty, not usability, drives churn. Most product failures are emotional before they’re technical.",
    //     date: "Dec 14, 2025",
    //     link: "/blogs/blog1",
    //     blocks: [
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //             children: [
    //                 { type: 'heading', content: "The Coupling Trap", className: "text-3xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "What happens when you need to switch from Mirror to Photon?", className: "text-zinc-400 mb-8" },
    //                 {
    //                     type: 'group',
    //                     className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
    //                     children: [
    //                         {
    //                             type: 'group',
    //                             className: "bg-red-900/10 border border-red-500/30 p-6 rounded-xl",
    //                             children: [
    //                                 { type: 'heading', content: "Tightly Coupled", className: "text-white font-bold mb-2" },
    //                                 { type: 'text', content: "Game code talks directly to SDK. Switching breaks everything.", className: "text-zinc-400 text-sm" }
    //                             ]
    //                         },
    //                         {
    //                             type: 'group',
    //                             className: "bg-zinc-800/50 border border-zinc-700 p-6 rounded-xl",
    //                             children: [
    //                                 { type: 'heading', content: "Interface Abstraction", className: "text-white font-bold mb-2" },
    //                                 { type: 'text', content: "Game code talks to an Interface. SDKs are plugins.", className: "text-zinc-400 text-sm" }
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/uploaded_image_0_placeholder.png",
    //                     alt: "Coupling Diagram",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 },
    //                 { type: 'text', content: "When a project requires switching from one networking SDK to another, the coupling problem becomes painfully apparent. You've probably seen this scenario play out: a team chooses Mirror for its simplicity, then business requirements shift and Photon becomes necessary.", className: "text-zinc-400 mt-8 leading-relaxed" }
    //             ]
    //         },
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800 mt-12",
    //             children: [
    //                 { type: 'heading', content: "Think Like a Web Dev", className: "text-3xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "In web development, we use ORMs (Object-Relational Mappers) like Entity Framework. We write code once, and it works on SQL Server, MySQL, or PostgreSQL.", className: "text-zinc-400 mb-8" },
    //                 {
    //                     type: 'group',
    //                     className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
    //                     children: [
    //                         {
    //                             type: 'group',
    //                             children: [
    //                                 { type: 'text', content: "Why not do the same for Multiplayer?", className: "text-zinc-400 mb-6" },
    //                                 {
    //                                     type: 'group',
    //                                     className: "bg-zinc-800 p-4 rounded-lg border border-zinc-700 flex items-center gap-4",
    //                                     children: [
    //                                         { type: 'text', content: "SQL Abstraction → Network Abstraction", className: "font-mono text-sm text-white" }
    //                                     ]
    //                                 }
    //                             ]
    //                         },
    //                         {
    //                             type: 'group',
    //                             className: "bg-black rounded-xl p-6 border border-zinc-800 font-mono text-sm",
    //                             children: [
    //                                 { type: 'text', content: "// Database World\nvar users = db.Users.Where(u => u.Active);\nWorks on ANY database engine.\n\n// Unity World\nvar player = network.Spawn(\"Player\");\nWorks on ANY networking SDK.", className: "text-blue-400 whitespace-pre-wrap" }
    //                             ]
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: "blog2",
    //     title: "Runtime Visual Scripting",
    //     category: "TOOLING",
    //     image: "/assets/Blog2/2.png",
    //     description: "Empowering designers with node-based logic at runtime.",
    //     date: "Dec 10, 2025",
    //     link: "/blogs/blog2",
    //     blocks: [
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //             children: [
    //                 { type: 'heading', content: "Empowering Designers", className: "text-3xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "Visual scripting allows designers to implement game logic without writing code. This decoupling enables rapid iteration and empowers the creative team.", className: "text-zinc-400 mb-8" },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/LanDash/LanDashHero.jpg",
    //                     alt: "Visual Scripting Node Graph",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'group',
    //             className: "mt-12",
    //             children: [
    //                 { type: 'heading', content: "The Paradigm Shift", className: "text-2xl font-bold text-white mb-6" },
    //                 {
    //                     type: 'group',
    //                     className: "grid grid-cols-1 md:grid-cols-2 gap-6",
    //                     children: [
    //                         {
    //                             type: 'group',
    //                             className: "bg-red-900/10 border border-red-500/20 p-6 rounded-2xl",
    //                             children: [
    //                                 { type: 'heading', content: "Traditional Workflow", className: "text-red-200 font-bold mb-2" },
    //                                 { type: 'text', content: "1. Designer writes spec doc\n2. Programmer implements\n3. Compilation wait time\n4. Review & Repeat", className: "text-zinc-400 whitespace-pre-line" }
    //                             ]
    //                         },
    //                         {
    //                             type: 'group',
    //                             className: "bg-green-900/10 border border-green-500/20 p-6 rounded-2xl",
    //                             children: [
    //                                 { type: 'heading', content: "Visual Scripting", className: "text-green-200 font-bold mb-2" },
    //                                 { type: 'text', content: "1. Designer builds logic\n2. Instant Play Mode test\n3. Iterate immediately\n4. No engineer bottleneck", className: "text-zinc-400 whitespace-pre-line" }
    //                             ]
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: "blog3",
    //     title: "Runtime Hot-Reloading",
    //     category: "ARCHITECTURE",
    //     image: "/assets/Blog3/3.png",
    //     description: "Iterate faster with instant code updates.",
    //     date: "Dec 05, 2025",
    //     link: "/blogs/blog3",
    //     blocks: [
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //             children: [
    //                 { type: 'heading', content: "Instant Feedback Loops", className: "text-3xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "Waiting for compilation kills flow. By implementing runtime hot-reloading for game data and logic, we reduced iteration time from 45s to instant.", className: "text-zinc-400 mb-8" },
    //             ]
    //         },
    //         {
    //             type: 'group',
    //             className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-8",
    //             children: [
    //                 {
    //                     type: 'group',
    //                     className: "bg-zinc-800 p-6 rounded-xl border border-zinc-700 text-center",
    //                     children: [
    //                         { type: 'heading', content: "45s", className: "text-4xl font-bold text-red-400 mb-2" },
    //                         { type: 'text', content: "Previous Compilation Time", className: "text-zinc-500 text-sm" }
    //                     ]
    //                 },
    //                 {
    //                     type: 'group',
    //                     className: "bg-zinc-800 p-6 rounded-xl border border-zinc-700 text-center",
    //                     children: [
    //                         { type: 'heading', content: "< 100ms", className: "text-4xl font-bold text-green-400 mb-2" },
    //                         { type: 'text', content: "Hot Reload Time", className: "text-zinc-500 text-sm" }
    //                     ]
    //                 },
    //                 {
    //                     type: 'group',
    //                     className: "bg-zinc-800 p-6 rounded-xl border border-zinc-700 text-center",
    //                     children: [
    //                         { type: 'heading', content: "100%", className: "text-4xl font-bold text-blue-400 mb-2" },
    //                         { type: 'text', content: "State Preservation", className: "text-zinc-500 text-sm" }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'group',
    //             className: "mt-12 bg-black border border-zinc-800 rounded-xl overflow-hidden",
    //             children: [
    //                 {
    //                     type: 'group',
    //                     className: "bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center gap-2",
    //                     children: [
    //                         { type: 'group', className: "w-3 h-3 rounded-full bg-red-500" },
    //                         { type: 'group', className: "w-3 h-3 rounded-full bg-yellow-500" },
    //                         { type: 'group', className: "w-3 h-3 rounded-full bg-green-500" },
    //                         { type: 'text', content: "HotReloadSystem.cs", className: "ml-4 text-xs text-zinc-400 font-mono" }
    //                     ]
    //                 },
    //                 { type: 'heading', content: "// Serialize state -> Reload DLL -> Deserialize state\n\nvoid OnHotReload() {\n    var state = SerializeGameState();\n    ReloadAssemblies();\n    RestoreGameState(state);\n}", className: "p-6 font-mono text-sm text-zinc-300 whitespace-pre-wrap bg-transparent" }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: "blog4",
    //     title: "Custom Render Pipelines",
    //     category: "GRAPHICS",
    //     image: "/assets/Blog4/4.png",
    //     description: "Deep dive into scriptable render pipelines.",
    //     date: "Nov 28, 2025",
    //     link: "/blogs/blog4",
    //     blocks: [
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //             children: [
    //                 { type: 'heading', content: "Beyond Standard Rendering", className: "text-3xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "Unity's Scriptable Render Pipeline (SRP) opens the door to completely custom rendering flows.", className: "text-zinc-400 mb-8" },
    //             ]
    //         },
    //         {
    //             type: 'group',
    //             className: "mt-8",
    //             children: [
    //                 { type: 'heading', content: "The Pipeline", className: "text-xl font-bold text-white mb-4" },
    //                 {
    //                     type: 'group',
    //                     className: "flex flex-col md:flex-row gap-4 items-center justify-between bg-zinc-900/50 p-6 rounded-xl border border-zinc-800",
    //                     children: [
    //                         { type: 'heading', content: "Culling", className: "text-sm bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700" },
    //                         { type: 'text', content: "→", className: "text-zinc-500 font-bold" },
    //                         { type: 'heading', content: "Sorting", className: "text-sm bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700" },
    //                         { type: 'text', content: "→", className: "text-zinc-500 font-bold" },
    //                         { type: 'heading', content: "Batching", className: "text-sm bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700" },
    //                         { type: 'text', content: "→", className: "text-zinc-500 font-bold" },
    //                         { type: 'heading', content: "Draw", className: "text-sm bg-blue-900/30 text-blue-200 px-4 py-2 rounded-lg border border-blue-500/30" },
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: "blog5",
    //     title: "Physically Based Rendering",
    //     category: "GRAPHICS",
    //     image: "/assets/Blog5/5.png",
    //     description: "Understanding light transport and material properties.",
    //     date: "Nov 15, 2025",
    //     link: "/blogs/blog5",
    //     blocks: [
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //             children: [
    //                 { type: 'heading', content: "Material Authenticity", className: "text-3xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "Understanding light transport, microfacet theory, and energy conservation.", className: "text-zinc-400 mb-4" },
    //             ]
    //         },
    //         {
    //             type: 'group',
    //             className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-8",
    //             children: [
    //                 {
    //                     type: 'group',
    //                     className: "space-y-2",
    //                     children: [
    //                         { type: 'image', src: "/assets/Moto/MotoStart.jpg", className: "aspect-square rounded-lg object-cover w-full opacity-80 hover:opacity-100 transition-opacity" },
    //                         { type: 'text', content: "Albedo", className: "text-center text-xs text-zinc-500 uppercase tracking-widest" }
    //                     ]
    //                 },
    //                 {
    //                     type: 'group',
    //                     className: "space-y-2",
    //                     children: [
    //                         { type: 'image', src: "/assets/Moto/MotoStart.jpg", className: "aspect-square rounded-lg object-cover w-full grayscale contrast-125 hover:contrast-100 transition-all" },
    //                         { type: 'text', content: "Roughness", className: "text-center text-xs text-zinc-500 uppercase tracking-widest" }
    //                     ]
    //                 },
    //                 {
    //                     type: 'group',
    //                     className: "space-y-2",
    //                     children: [
    //                         { type: 'image', src: "/assets/Moto/MotoStart.jpg", className: "aspect-square rounded-lg object-cover w-full sepia brightness-50 hover:brightness-100 transition-all" },
    //                         { type: 'text', content: "Metallic", className: "text-center text-xs text-zinc-500 uppercase tracking-widest" }
    //                     ]
    //                 },
    //                 {
    //                     type: 'group',
    //                     className: "space-y-2",
    //                     children: [
    //                         { type: 'image', src: "/assets/Moto/MotoStart.jpg", className: "aspect-square rounded-lg object-cover w-full hue-rotate-90 hover:hue-rotate-0 transition-all" },
    //                         { type: 'text', content: "Normal", className: "text-center text-xs text-zinc-500 uppercase tracking-widest" }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // }

];
