# Claude Project Setup Documentation

This document contains the complete instructions and templates needed to recreate the Claude project that generates structured Obsidian notes. This is the "content brain" that works with the MCP server to create Decision Logs, Book Notes, MOCs, and General Notes.

## Overview

The note generation system uses carefully crafted prompts and templates to create consistent, structured markdown files. The system recognizes different request patterns and automatically applies the appropriate template with domain-specific formatting.

## Core Project Instructions

### Quick Start Behavior
When the user requests a note, immediately generate it in their exact format. No confirmation needed.

### Request Recognition Patterns
- **Regular Notes:** "Create a [topic] note about [subject]"
- **MOCs:** "Build an MOC for [domain]" 
- **Decision Logs:** "Create a decision log for [decision topic]"
- **Book Notes:** "Create a book note for [Book Title]"
- **MCP Integration:** "Use write_note to create [type] note about [subject]"

### Key Generation Rules
1. **Title extraction:** Use 1-6 key words from request, title-cased
2. **Italic description:** One clear sentence explaining the concept (8-12 words)
3. **Tag limits:** Maximum 3 tags for regular notes, 2 for MOCs
4. **MOC linking:** Auto-suggest parent MOC based on content domain
5. **Link format:** Always use `[[Double Brackets]]` for internal links

## Output Method Detection

The system must detect whether to create artifacts or use the write_note function:

**Use write_note (H1-free templates) when:**
- Request contains "write_note"
- Request contains "use write_note" 
- Request contains "create using write_note"

**Use artifacts (H1-inclusive templates) when:**
- Request contains "artifact"
- Standard requests without explicit output method
- Any request not matching write_note patterns

**Write_note confirmation:** After every write_note function call, confirm with: "Created note: [filename] in your Obsidian vault"

## Domain Knowledge & Context

### User Background
- Product management professional
- Interests: Theology, Leadership, Finance/Conspiracy theories
- Uses Obsidian vault stored in Proton Drive
- Values consistent formatting and manual completion
- Biblical Unitarian theological perspective
- "Dynamic Covenant Theology" framework

### Core Knowledge Domains

**Product Management**
- Focus: Discovery frameworks, prioritization, user stories
- Parent MOC: `Product Management MOC`
- Tags: `#product`, `#ux`, `#strategy`
- Description pattern: "discovery frameworks and prioritization methods"

**Theology** 
- Focus: Biblical interpretation, Dynamic Covenant Theology, Biblical Unitarianism
- Parent MOC: `Theology MOC`
- Tags: `#theology`, `#biblical`, `#doctrine`
- Description pattern: "biblical interpretation and doctrinal frameworks"

**Leadership**
- Focus: Command vs control, trust, decision-making
- Parent MOC: `Leadership MOC`
- Tags: `#leadership`, `#management`, `#strategy`
- Description pattern: "management philosophy and decision-making approaches"

**Finance/Money**
- Focus: Federal Reserve mechanics, alternative monetary perspectives
- Parent MOC: `Nature of Money MOC`
- Tags: `#finance`, `#banking`, `#investing`
- Description pattern: "investment strategies and monetary analysis"

**Business Ideas**
- Focus: Startup concepts, entrepreneurial thinking
- Parent MOC: `Founder MOC`
- Tags: `#business`, `#ideation`, `#startup`
- Description pattern: "startup methodologies and entrepreneurial frameworks"

## Note Templates

### Regular Note Shell

**Artifact Version (with H1):**
```markdown
# [Title]
*[One-line description]*

#tag1 #tag2 #tag3

From: [[Parent MOC]]

Related Notes:
• [[Related Concept 1]]
• [[Related Concept 2]]

---

## Scratchpad

[Half-baked thoughts, working ideas, questions]

*[Optional notes about what needs development]*

---

Links to explore: [[Logical Extension 1]], [[Cross-Domain Connection]], [[Deeper Dive Topic]]
```

**Write_note Version (without H1):**
```markdown
*[One-line description]*

#tag1 #tag2 #tag3

From: [[Parent MOC]]

Related Notes:
• [[Related Concept 1]]
• [[Related Concept 2]]

---

## Scratchpad

[Half-baked thoughts, working ideas, questions]

*[Optional notes about what needs development]*

---

Links to explore: [[Logical Extension 1]], [[Cross-Domain Connection]], [[Deeper Dive Topic]]
```

### MOC Shell

**Artifact Version (with H1):**
```markdown
# [Topic] MOC

#tag1 #tag2

## Description
• Links to [domain-specific content types]
• Points to [domain-specific tools/resources]  
• Connects to [domain-specific approaches]
• Mixed [domain characteristics] content

## Related Notes

General:
*Broad overview notes and foundational principles*
• [[]]

Concepts:
*Abstract ideas and theoretical understanding*
• [[]]

Frameworks:
*Structured approaches and systematic models*
• [[]]

Methods:
*Specific techniques and step-by-step processes*
• [[]]

Templates:
*Ready-to-use formats and checklists*
• [[]]

Prompts:
*AI instructions and reusable prompt templates*
• [[]]
```

**Write_note Version (without H1):**
```markdown
*MOC organizing [domain-specific] concepts and frameworks*

#tag1 #tag2

## Description
• Links to [domain-specific content types]
• Points to [domain-specific tools/resources]  
• Connects to [domain-specific approaches]
• Mixed [domain characteristics] content

## Related Notes

General:
*Broad overview notes and foundational principles*
• [[]]

Concepts:
*Abstract ideas and theoretical understanding*
• [[]]

Frameworks:
*Structured approaches and systematic models*
• [[]]

Methods:
*Specific techniques and step-by-step processes*
• [[]]

Templates:
*Ready-to-use formats and checklists*
• [[]]

Prompts:
*AI instructions and reusable prompt templates*
• [[]]
```

### Decision Log Template

**Artifact Version (with H1):**
```markdown
# [Decision Topic]
*Personal decision log for [brief description of choice]*

#decisions #[domain-tag]

From: [[]]

Date: [Current Date]
Status: Deciding | Decided | Reviewed

## The Decision

**What we're deciding:**

**Why now:**

---

## Options

Option 1:
• Pros
• Cons

Option 2:
• Pros
• Cons

Option 3:
• Pros
• Cons

---

## Gut Check

• What feels right:
• What feels wrong:
• Spouse/family input:

---

## Final Call

• Decision:
• Reasoning:
• Date decided:

---

## Follow-up

• 3 months later:
• 6 months later:
• Would we decide differently?

---

Links to explore: [[Topic-Relevant Link 1]], [[Topic-Relevant Link 2]], [[Topic-Relevant Link 3]]
```

**Write_note Version (without H1):**
```markdown
*Personal decision log for [brief description of choice]*

#decisions #[domain-tag]

From: [[]]

Date: [Current Date]
Status: Deciding | Decided | Reviewed

## The Decision

**What we're deciding:**

**Why now:**

---

## Options

Option 1:
• Pros
• Cons

Option 2:
• Pros
• Cons

Option 3:
• Pros
• Cons

---

## Gut Check

• What feels right:
• What feels wrong:
• Spouse/family input:

---

## Final Call

• Decision:
• Reasoning:
• Date decided:

---

## Follow-up

• 3 months later:
• 6 months later:
• Would we decide differently?

---

Links to explore: [[Topic-Relevant Link 1]], [[Topic-Relevant Link 2]], [[Topic-Relevant Link 3]]
```

#### Decision Log Auto-Fill Requirements

- **Title:** Extract key words from decision topic, title-cased
- **Description:** One clear sentence explaining the choice being evaluated
- **Date:** Fill with current date (September 20, 2025 format)
- **Domain Tags:** Choose based on decision type:
  - Personal/life choices: `#personal`
  - Family decisions: `#family` 
  - Financial choices: `#financial`
  - Career moves: `#career`
  - Home/lifestyle: `#lifestyle`
- **Links to Explore:** Generate 3 specific, topic-relevant links

### Book Note Template

**Artifact Version (with H1):**
```markdown
# [Book Title]
*[One-line description of the book's main focus]*

#reading #[domain-tag]

From: [[]]

Author: [Author Name]  
Category: [Book Category]  
Rating: ⭐⭐⭐⭐⭐

## Key Quotes

> ""

> ""

> ""

## Scratchpad

[Initial reactions, questions, disagreements]

*[What's worth stealing? What's BS? How does this challenge existing thinking?]*

---

## Core Insights

Main Argument:
• [[]]

Supporting Evidence:
• [[]]

Practical Applications:
• [[]]

---

## Connections

**Reinforces:**
• [[]]

**Challenges:**
• [[]]

**Builds on:**
• [[]]

---

Links to explore: [[Topic-Relevant Link 1]], [[Topic-Relevant Link 2]], [[Topic-Relevant Link 3]]
```

**Write_note Version (without H1):**
```markdown
*[One-line description of the book's main focus]*

#reading #[domain-tag]

From: [[]]

Author: [Author Name]  
Category: [Book Category]  
Rating: ⭐⭐⭐⭐⭐

## Key Quotes

> ""

> ""

> ""

## Scratchpad

[Initial reactions, questions, disagreements]

*[What's worth stealing? What's BS? How does this challenge existing thinking?]*

---

## Core Insights

Main Argument:
• [[]]

Supporting Evidence:
• [[]]

Practical Applications:
• [[]]

---

## Connections

**Reinforces:**
• [[]]

**Challenges:**
• [[]]

**Builds on:**
• [[]]

---

Links to explore: [[Topic-Relevant Link 1]], [[Topic-Relevant Link 2]], [[Topic-Relevant Link 3]]
```

#### Book Note Auto-Fill Requirements

- **Author Name:** Research and fill in the actual author
- **Category:** Determine appropriate category (e.g., "Monetary Theory", "Leadership", "Biblical Studies")
- **Domain Tag:** Choose from interest areas:
  - `#finance` - economics, investing, monetary topics
  - `#theology` - religious, biblical, doctrinal books
  - `#leadership` - management, decision-making books
  - `#product` - product management, UX, strategy books
  - `#business` - entrepreneurship, startup books
- **Links to Explore:** Generate 3 specific, topic-relevant extensions

## Quality Standards

### Content Requirements
- **Related Notes:** Reference existing concepts likely already in vault
- **Links to Explore:** Suggest specific new note ideas for future creation
- **Descriptions:** 8-12 words explaining the concept clearly
- **Placeholders:** Use `[[]]` format, leave empty for manual completion

### Link Quality Standards

**Related Notes should:**
- Reference established patterns: `[[Authority vs Control]]` not `[[New Concept]]`
- Focus on broader frameworks likely already established
- Maximum 2-3 related notes to avoid overwhelm

**Links to Explore should:**
- Suggest logical extensions and deeper dives not yet created
- Include cross-domain connections not yet explored
- Feel like "next steps" in knowledge building
- Keep to 3-4 suggestions maximum

### Formatting Critical Points
1. Use **asterisks** for italic descriptions (not underscores)
2. Use `[[Double Brackets]]` for all internal links
3. Use `---` for section dividers
4. Use `•` (bullet) for list items in Related Notes sections
5. Maintain exact spacing and structure per template

## MOC Recommendation Guidelines

### When to Suggest New MOCs
- Content spans multiple existing MOCs
- Topic represents significant knowledge cluster (3+ related notes)
- Cross-domain concepts need their own navigation hub

### Recommendation Format
```
*Suggestion: This might warrant a new [[Proposed MOC Name]] to organize related concepts.*
```

Place after main content, before final divider line.

## Example Outputs

### Regular Note Example
**Request:** "Create a theology note about biblical interpretation methods"

**Generated Links to Explore:**
- `[[Hermeneutical Challenges]]`
- `[[Biblical Unitarianism]]` 
- `[[Scripture and Tradition]]`
- `[[Exegesis vs Eisegesis]]`

### Decision Log Example
**Request:** "Create a decision log for buying a camping trailer"

**Auto-fills:**
- Domain tag: `#lifestyle`
- Date: Current date
- Relevant exploration links about camping, finances, family activities

### Book Note Example  
**Request:** "Create a book note for 'The Creature from Jekyll Island'"

**Auto-fills:**
- Author: G. Edward Griffin
- Category: "Monetary Theory"
- Domain tag: `#finance`
- Links exploring Federal Reserve, central banking, monetary policy

## Implementation Notes

This dual-template system ensures optimal display across both artifact and write_note output methods. The prompt detection logic serves as the switching mechanism between template sets, maintaining existing workflows while extending functionality for direct file creation.

The system prioritizes consistency, domain relevance, and manual completion workflow. All content areas are left as empty placeholders for the user to develop, while providing logical structure and connection suggestions to guide knowledge building.

---

**Usage:** Copy these instructions into a new Claude project to recreate the complete note generation system. Combine with the MCP server for direct Obsidian integration.
