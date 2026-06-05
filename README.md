# YSE - Why Software Engineering (spoken wise)

> "People don't buy what you do, they buy why you do it."
> _Simon Sinek_

Simon Sinek's insights were aimed at leaders and organizations, but it applies just as well to the craft of software engineering. The why of our craft does not change, but the whats and hows do! Most resources cover only the latter two, but rarely also cover why does it actually matter. While these articles will definitely cover also the whats and hows, they will always try to also answer why it matters in the first place.

## The Problem with How-To

The internet is full of tutorials and step-by-step guides. During my career, engineers I worked with at every level, still struggle with the same decisions, when to reach for a new pattern, when to refactor vs. rewrite, how to structure a team, how to make an architectural call that holds up over time.

The gap isn't knowledge of what, it is understanding of why.

When you learn why a pattern exists, what problem it intends to solve, what trade-offs it has, you can apply it outside of the original context it was taught. When you know why a practice matters, not just that you should write tests, but also understand what happens when you don't, you can make better decisions under pressure.

### The AI Inflection Point

AI coding assistants can now produce code in virtually any language or framework in seconds. They can create backend services, design and create beautiful UIs and wire up CI pipelines faster than any engineer can type. The what of software engineering, the syntax, the boilerplate, the mechanics, all of this is increasingly commoditized.
What AI cannot do is think about a whole system, especially a system with your current goals and challenges. It doesn't know why you're building what you're building, what constraints your organization operates under, or what a decision made today will cost you in a year. It can generate ten implementations of a caching layer, but it doesn't tell you whether you actually need one in the first place.

This shifts the value of engineering expertise. Niche knowledge of a specific framework version, a particular ORM's API, or a language's syntax is decreasing in value, models are trained on all of it, and they're getting better. What compounds in value is the knowledge that sits underneath: programming paradigms, system design, architectural thinking, and the ability to reason about trade-offs under constraints.

An engineer who understands why distributed systems are hard will orchestrate AI-agents better than one who merely knows the syntax of a framework. An engineer who understands why frontend state management gets complicated will catch the subtle bugs that a generated component introduces. Understanding software engineering principles is no longer just a mark of seniority, it's becoming the essential skill that differentiates engineers who can leverage AI from those who are carried by it.

Code is nowadays written by machines. The judgment around the system this code works in still has to come from you.

## What This Is

YSE is a knowledge base for engineers and engineering leaders who want to go deeper. While I will mostly use languages, frameworks and practices I am most familiar with, but remember the core principles matter more than the actual code or practice itself.

While a lot of the practices can be applied to different areas, YSE will mostly focus on web applications and products with the following focus:

- Frontend Engineering; TypeScript, Angular, NgRx, Nx
- Backend Engineering; NestJS, Java with Spring and Hibernate, REST, GraphQL, Kafka
- Infrastructure; Azure, Docker, K8s, Event driven-systems
- Engineering Practices; Testing, CI/CD, developer experience(DX), product engineering, observability, technical debt, user monitoring & analytics, deployment strategies, performance optimizations,...
- Engineering Leadership; Effective teams, empowering leadership, culture of growth, communication patterns

## Disclaimers

### A Note on Opinions

Software engineering is full of contested ground. Reasonable engineers disagree about state management, API design, architecture, and almost everything else. I will try to provide solid reasoning wherever I state strong opinions. The goal is never to end a discussion, rather give enough context to form your own informed view.

If you want to open or participate in discussions, feel free to open a [new issue](https://github.com/westefan/YSE/issues) here on GitHub, I always encourage to challenge my statements and ideas!

### AI usage

The articles in YSE are researched, structured, and edited with the help of AI tools. The ideas, opinions, and judgment calls are human. AI assists with drafting and refinement, not with thinking. This feels worth stating plainly, especially in a publication that advocates for AI usage and argues about core principles such as understanding and reasoning. Practice what you preach!