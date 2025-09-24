# Claude Project Setup Documentation

This document contains the complete instructions and templates needed to create a Claude project that generates structured Obsidian notes. The system is designed to be customizable to your specific knowledge domains and interests.

## Overview

The note generation system uses carefully crafted prompts and templates to create consistent, structured markdown files. The system recognizes different request patterns and automatically applies the appropriate template with domain-specific formatting that you configure for your knowledge areas.

## Quick Setup Guide

### Step 1: Configure Your Knowledge Domains (Optional but Recommended)

**Domain configuration is optional** - the system works with generic templates if you prefer organic emergence of your knowledge areas. However, configuration provides better tag suggestions, MOC recommendations, and link relevance.

**Configuration Options:**
- **Skip configuration:** Use the system immediately with generic templates and `#general` tags
- **Configure now:** Follow the Domain Configuration section below to customize for your knowledge areas
- **Configure later:** Start with generic approach and add domain configuration as patterns emerge

**Getting help with configuration:** You can ask Claude to help draft your domain configuration by describing your interests and work areas. For example: "Help me configure knowledge domains for a software engineer interested in AI, productivity, and financial independence."

### Step 2: Copy Instructions to Claude Project

**After domain configuration (if you chose to configure):**
Copy the complete Core Project Instructions section into your Claude project's custom instructions field. If you configured domains, your customized instructions will use those settings. If you skipped configuration, the system will use generic fallbacks.

### Step 3: Test and Refine

Start with simple requests to ensure the system works with your domain configuration, then refine as needed.

## Domain Configuration

### Configuring Your Knowledge Domains

The system works best when configured for your specific knowledge areas. Follow these steps:

1. **Identify Your Primary Domains** - Choose 3-5 knowledge areas you work with regularly
2. **Define MOC Names** - Create "Map of Content" names for each domain  
3. **Choose Relevant Tags** - Select 2-3 tags per domain that match your terminology
4. **Write Description Patterns** - Create brief descriptions that reflect how you think about each domain
5. **Update the Domain Mapping** - Replace the examples below with your configuration

### Domain Configuration Template

**Getting help:** Ask Claude to draft your domain configuration by describing your work and interests. For example: "I'm a marketing manager interested in psychology and personal finance. Help me configure 3-4 knowledge domains for structured note-taking."

Replace these examples with your own knowledge areas:

```markdown
### My Knowledge Domains

**Domain 1: [Your Primary Field]**
- Focus: [Key concepts and activities in this area]
- Parent MOC: `[Your Domain] MOC`
- Common tags: `#[primary]`, `#[secondary]`, `#[tertiary]`
- Description pattern: "[domain-specific methodologies and frameworks]"

**Domain 2: [Your Secondary Field]**
- Focus: [Key concepts and activities in this area]
- Parent MOC: `[Your Domain] MOC`
- Common tags: `#[primary]`, `#[secondary]`, `#[tertiary]`
- Description pattern: "[domain-specific approaches and methods]"

[Continue for 3-5 domains total]
```

### Example Domain Configurations

#### Example 1: Product Management Professional
**Product Management**
- Focus: Discovery frameworks, prioritization, user stories
- Parent MOC: `Product Management MOC`
- Tags: `#product`, `#ux`, `#strategy`
- Description pattern: "discovery frameworks and prioritization methods"

**Leadership**
- Focus: Management philosophy, decision-making, team dynamics
- Parent MOC: `Leadership MOC`
- Tags: `#leadership`, `#management`, `#strategy`
- Description pattern: "management philosophy and decision-making approaches"

#### Example 2: Academic Researcher
**Literature Studies**
- Focus: Literary analysis, critical theory, historical context
- Parent MOC: `Literature MOC`
- Tags: `#literature`, `#criticism`, `#theory`
- Description pattern: "literary analysis and critical frameworks"

**Research Methods**
- Focus: Methodology, data analysis, academic writing
- Parent MOC: `Research Methods MOC`
- Tags: `#research`, `#methodology`, `#analysis`
- Description pattern: "research methodologies and analytical approaches"

#### Example 3: Creative Professional
**Design Strategy**
- Focus: User experience, visual design, design systems
- Parent MOC: `Design MOC`
- Tags: `#design`, `#ux`, `#creative`
- Description pattern: "design methodologies and creative processes"

**Content Creation**
- Focus: Writing, storytelling, content strategy
- Parent MOC: `Content MOC`
- Tags: `#writing`, `#content`, `#creative`
- Description pattern: "content creation and storytelling frameworks"

## Core Project Instructions

### Quick Start Behavior
When the user requests a note, immediately generate it using their configured domain knowledge. No confirmation needed.

### Request Recognition Patterns
- **Regular Notes:** "Create a [topic] note about [subject]"
- **MOCs:** "Build an MOC for [domain]" 
- **Decision Logs:** "Create a decision log for [decision topic]"
- **Book Notes:** "Create a book note for [Book Title]"
- **MCP Integration:** "Use write_note to create [type] note about [subject]"

### Key Generation Rules
1. **Title extraction:** Use 1-6 key words from request, title-cased
2. **Domain mapping:** Match request content to user's configured knowledge domains
3. **Tag selection:** Use configured tags for matched domain (max 3 for regular notes, 2 for MOCs)
4. **MOC linking:** Suggest configured parent MOC based on content domain
5. **Link format:** Always use `[[Double Brackets]]` for internal links

### Output Method Detection

**Use write_note (H1-free templates) when:**
- Request contains "write_note"
- Request contains "use write_note" 
- Request contains "create using write_note"

**Use artifacts (H1-inclusive templates) when:**
- Request contains "artifact"
- Standard requests without explicit output method
- Any request not matching write_note patterns

**Write_note confirmation:** After every write_note function call, confirm with: "Created note: [filename] in your Obsidian vault"

### Domain Matching Logic

**Primary Domain Recognition:**
- Scan request content for domain-specific terminology
- Match against user's configured knowledge areas
- If no match found, use generic approach with minimal tagging
- Default to most general domain if request spans multiple areas

**Fallback Behavior:**
- If no domain match: use `#general` tag and `General MOC` parent
- If multiple domains match: choose most specific or ask for clarification
- Always generate valid note structure regardless of domain matching success

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
• Input from others:

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
• Input from others:

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
- **Date:** Fill with current date
- **Domain Tags:** Choose based on decision type and user's configured domains:
  - Personal/life choices: `#personal`
  - Work decisions: Use relevant professional domain tag
  - Financial choices: `#financial` (or user's finance domain tag)
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

*[What's worth applying? What seems questionable? How does this connect to existing knowledge?]*

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

*[What's worth applying? What seems questionable? How does this connect to existing knowledge?]*

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
- **Category:** Determine appropriate category based on book's subject matter
- **Domain Tag:** Choose from user's configured interest areas based on book topic
- **Links to Explore:** Generate 3 specific, topic-relevant extensions

## Quality Standards

### Content Requirements
- **Related Notes:** Reference concepts that likely exist in user's configured domains
- **Links to Explore:** Suggest specific new note ideas for future creation
- **Descriptions:** 8-12 words explaining the concept clearly
- **Placeholders:** Use `[[]]` format, leave empty for manual completion

### Link Quality Standards

**Related Notes should:**
- Reference broad frameworks within user's knowledge domains
- Focus on foundational concepts likely already established
- Maximum 2-3 related notes to avoid overwhelm

**Links to Explore should:**
- Suggest logical extensions and deeper dives not yet created
- Include cross-domain connections when relevant
- Feel like "next steps" in knowledge building
- Keep to 3-4 suggestions maximum

### Formatting Critical Points
1. Use **asterisks** for italic descriptions (not underscores)
2. Use `[[Double Brackets]]` for all internal links
3. Use `---` for section dividers
4. Use `•` (bullet) for list items in Related Notes sections
5. Maintain exact spacing and structure per template

## Customization Instructions

### Adding New Domains
To add a new knowledge domain:
1. Define the domain focus and scope
2. Choose 2-3 relevant tags
3. Create or identify the parent MOC
4. Write a description pattern that matches your terminology
5. Test with sample note generation

### Modifying Templates
Template modifications should maintain:
- Consistent structure across note types
- Empty placeholders for manual completion
- Logical flow from general to specific information
- Cross-linking opportunities

### Advanced Configuration
For specialized workflows:
- Adjust tag hierarchies for your organizational system
- Modify MOC structures to match your navigation preferences
- Customize link suggestion patterns for your research style
- Adapt decision log categories for your decision-making process

## Implementation Notes

This system prioritizes flexibility and user customization while maintaining consistent output quality. The dual-template approach ensures optimal display across both artifact and write_note output methods.

The domain matching logic gracefully handles edge cases through fallback behavior, ensuring users always receive properly structured notes even when domain recognition fails.

Configuration is front-loaded in the setup process, allowing the generation system to run smoothly once properly configured for the user's knowledge domains and preferences.

---

**Usage:** Configure your knowledge domains using the examples above, then copy the Core Project Instructions into a new Claude project to begin generating structured notes tailored to your specific knowledge areas.
