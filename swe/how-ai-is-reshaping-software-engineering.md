# How AI is Reshaping Software Engineering

Software engineering is in the middle of a genuine shift. Not the kind that changes which framework you use or which cloud provider you deploy to, the kind that changes what the job actually is. In general the problem of software was almost never the technical implementation itself, it was understanding what to build, for whom, and why.

AI is compressing the cost of **_writing_** code towards zero. That changes the value equation for everything built on top of it, what skills matter, where judgment gets applied, how products get built, and what good engineering looks like. The engineers who adapt will have more leverage and productivity than ever. The ones who don't and primarily define themselves by their technical skills will have a far smaller market to serve. This applies especially for, how I phrase them, "solved problems", meaning e.g. creating the same functionalities a multitude of applications have created before, just with a different focus or niche. Think about CRM systems, how different are they really between each other.

---

## The Engineer as an Orchestrator

AI systems are still evolving rapidly, so things can change still change a lot over the coming years. But I envision a future engineer to act as an **AI agent orchestrator**. AI systems can already execute multi-step workflows to create new features end-to-end, scaffolding a service, creating new endpoints, integrating them into the UI and writing test suites. The engineer's role becomes directing, constraining, and evaluating that output rather than producing it.

This is already happening in practice. An engineer today might prompt an AI to generate a REST API, review the result for structural problems, ask it to revise with different error handling, then wire it into an existing system with an eye towards how it fits the broader architecture. The code is largely AI-generated, the decisions though on what to build, how it fits in the overall system, what to commit and reject are human. Nowadays engineers should work more like technical directors than individual contributors, setting the constraints, defining the interfaces, breaking down the problem into subtasks an agent can execute, and assembling the results into something coherent and maintainable. The craft is moving up the abstraction ladder. This is already visible with emerging workflows like [Spec-Driven Development(SDD)](https://specdriven.ai/).

This doesn't make the job easier, it rather raises the ladder and simply knowing how to code is not enough. Directing AI agents well requires a deeper understanding of what you're building than copying a StackOverflow answer ever did. You can't evaluate output you don't understand. The engineers who struggle will be the ones who used AI to avoid thinking, the ones who thrive will be the ones who understand the principles and leverage AI to think at a higher level.

---

## The New Engineering Loop

_I will cover some of the here mentoned topics more in depth in a separate articles, this section merely covers the overlapping basics with AI._

The engineer's primary acts become:
- understanding what the product actually needs
- translating that into precise requirements and specifications
- reasoning about how it fits into the existing system
- directing agents to implement it
- reviewing what comes back

Every single one of these steps can also be AI assisted in itself, e.g. "understanding the product", here AI could fetch analytics, aggregated them and hand back a synthesized summary of user behavior.

---

## Product Engineering: The Iteration Cycle Gets Faster

One underappreciated consequence of AI is what it does to the product feedback loop.

Traditionally, validating a product idea required building something, which took weeks. The lean startup philosophy pushed this toward MVPs, prototypes, and user interviews. It already accelarated with tools like Figma Prototypes, but AI compresses this even further and brings it closer to customers. An actual interactive prototype that would have taken a week to scaffold can now be built in an afternoon. A design variation can now be created even _during_ a user interview, thanks to tools like [Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs) or [Google's Stitch](https://stitch.withgoogle.com/).<br />
Another powerful accelerator would be enabling users to draft their own ideas directly within your application as lightweight MVPs, then seamlessly hand them off to the engineering team as structured proposals, protocols like [A2UI](https://a2ui.org/) could be invaluable here.

This changes the economics of iteration. When building is cheap, **testing assumptions becomes the bottleneck**. The engineer who understands what problem a prototype is supposed to solve, is more valuable than the one who can build it fastest.

Example: Imagine a product team exploring a new onboarding flow. Instead of debating wireframes for a sprint, an AI can generate three interactive variations in a day. An engineer's job is no longer "build the prototype", it's "define what we're testing, evaluate the generated options for technical feasibility, refine the one that best isolates the variable we care about, and instrument it to collect meaningful signal."

That's a more product-minded role. It requires understanding user goals, not just implementation details. It requires knowing when a prototype is good enough to test and when it's misleading. It requires connecting technical decisions to business outcomes.

The engineers who embrace this will have a hand in product decisions in a way that was previously gatekept by processes and build time. The ones who wait for a fully specified ticket to appear in their backlog will find themselves left behind.

---

## The Scalability Judgment Call

One of the places AI-generated code fails most consistently is in scalability decisions, not because it generates broken code, but because it defaults to patterns that look sophisticated without asking whether this sophistication is needed in the first place.

Ask an AI to design a backend for a new product and it will often reach for microservices, Kubernetes, event-driven architecture, distributed caching. These are real solutions to real problems, but problems that only occur at scale, with multiple independent teams, under unpredictable load. They are also expensive: in infrastructure cost, operational complexity, onboarding time, and cognitive overhead.

For most products, most of the time, **a well-structured monolith running on a modest server will outperform a microservices architecture by every measure that matters**:
- time to ship
- ease of debugging
- cost to operate
- speed of iteration

_Read more about [DORA metrics](https://dora.dev/guides/dora-metrics/)_

The distributed system introduces failure modes that didn't exist before, you pay those costs before you get any of the benefits.

The rule of thumb worth internalizing: **optimize for the constraints you have now, not the ones you imagine having later**. A system that handles 10,000 daily active users doesn't need the same architecture as one handling 10 million. And by the time you have 10 million users, you'll know things about your actual bottlenecks that you can't possibly know today.

This doesn't mean ignoring scalability. It means being precise and pragmatic about what you're optimizing for:

- **Vertical scaling** is simple, cheap and often sufficient
- **A single well-indexed Postgres database** can handle more load than most teams will ever generate
- **Microservices** make sense when independent deployability and team autonomy are genuine requirements
- **Kubernetes** is a powerful tool for teams with complex deployment and scaling needs across multiple services

The engineer who can look at a proposed architecture and say "this is more than we need right now, here's what we actually need" is doing something AI cannot do: making a judgment call grounded in context. Context about the team's size, the product's stage, the organization's operational maturity, and the cost of being wrong in each direction.

Over-engineering is a real failure mode that engineering teams often already suffer from, AI just amplifies this. It slows teams down, burns money, and creates complexity. The discipline to resist it, especially when the sophisticated solution looks impressive and the simple solution looks boring, is one of the clearest markers of engineering maturity.<br />A notable example is Amazon's video encoding service, which migrated back to a monolith and saw significant gains in operational simplicity and cost efficiency as a result. [More info](https://thenewstack.io/return-of-the-monolith-amazon-dumps-microservices-for-video-monitoring/)

---

## What This Means in Practice

The shift is already underway. The engineers feeling it first are the ones who lean most heavily on AI tools, they're discovering that output quality depends almost entirely on the quality of their direction, and that evaluating that output requires exactly the skills that tutorials alone don't teach.

System design. Architectural judgment. Product thinking. Knowing when something is good enough and when it will become a problem. These have always mattered. What's changed is that they're no longer optional supplements to implementation skill, they are becoming the core of the job.

AI is extraordinarily good at producing code. It is not as good at knowing what code should exist and why.

That part is still ours.
