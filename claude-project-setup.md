# Claude Project Configuration

This document configures Claude to generate structured Obsidian notes with intelligent domain awareness. You're essentially programming Claude's knowledge about your expertise areas so it can make smart decisions about tagging, linking, and content organization.

## How This Creates Intelligence

**Without configuration:** Claude generates generic notes with basic structure
**With configuration:** Claude understands your knowledge domains and creates contextually relevant tags, MOC suggestions, and cross-links

This domain knowledge is what makes the system feel "agentic" - Claude appears to understand your field and makes intelligent organizational decisions rather than just following templates.

## Choose Your Path

### Path 1: Quick Start (Generic Intelligence)
**Best for:** Getting started immediately or letting knowledge domains emerge organically

**What you get:** Working system with generic templates and basic organization
**Time required:** 2 minutes

**Steps:**
1. Copy the entire "Core Project Instructions" section below
2. Paste into your Claude project's custom instructions field
3. Start generating notes immediately

Claude will use fallback logic (`#general` tags, `General MOC` suggestions) that works for any content.

### Path 2: Custom Intelligence 
**Best for:** Maximum relevance and domain-specific organization

**What you get:** Claude that understands your expertise and makes contextually intelligent decisions
**Time required:** 10-15 minutes setup, significant long-term value

**Steps:**
1. Configure your knowledge domains using the template below
2. Replace the domain examples in "Core Project Instructions" with your configuration
3. Copy your customized "Core Project Instructions" to Claude project
4. Generate domain-aware structured notes

## Domain Configuration (Path 2 Only)

### Step 1: Identify Your Knowledge Areas

Choose 3-5 domains where you regularly create notes. Consider your:
- Professional expertise
- Research interests  
- Learning areas
- Decision-making contexts

### Step 2: Configure Domain Template

**Need help?** Ask Claude: "Help me configure knowledge domains for [describe your role and interests]"

Replace these examples with your domains:

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

### Step 3: Integration Instructions

After configuring your domains:
1. Find the "Domain Knowledge & Context" section in Core Project Instructions below
2. Replace the example domains with your configured domains
3. Copy the entire modified Core Project Instructions to Claude project

### Example Configurations

#### Product Manager + Leadership Focus
**Product Management**
- Focus: Discovery frameworks, prioritization, user stories
- Parent MOC: `Product Management MOC`
- Tags: `#product`, `#ux`, `#strategy`
- Description pattern: "discovery frameworks and prioritization methods"

**Leadership Development**
- Focus: Management philosophy, decision-making, team dynamics
- Parent MOC: `Leadership MOC`
- Tags: `#leadership`, `#management`, `#strategy`
- Description pattern: "management philosophy and decision-making approaches"

#### Academic Researcher
**Research Methods**
- Focus: Methodology, data analysis, academic writing
- Parent MOC: `Research Methods MOC`
- Tags: `#research`, `#methodology`, `#analysis`
- Description pattern: "research methodologies and analytical approaches"

**Literature Studies**
- Focus: Literary analysis, critical theory, historical context
- Parent MOC: `Literature MOC`
- Tags: `#literature`, `#criticism`, `#theory`
- Description pattern: "literary analysis and critical frameworks"

#### Creative Professional
**Design Strategy**
- Focus: User experience, visual design, design systems
- Parent MOC: `Design MOC`
- Tags: `#design`, `#ux`, `#creative`
- Description pattern: "design methodologies and creative processes"

**Content Strategy**
- Focus: Writing, storytelling, content planning
- Parent MOC: `Content MOC`
- Tags: `#writing`, `#content`, `#strategy`
- Description pattern: "content creation and storytelling frameworks"

---

## Core Project Instructions

**Important:** This is the single file that goes into your Claude project. If you configured domains above, replace the domain examples in the "Domain Knowledge & Context" section below with your configuration before copying.

### Quick Start Behavior
When the user requests a note, immediately generate it using domain knowledge. No confirmation needed.

### Request Recognition Patterns
- **Regular Notes:** "Create a [topic] note about [subject]"
- **MOCs:** "Build an MOC for [domain]" 
- **Decision Logs:** "Create a decision log for [decision topic]"
- **Book Notes:** "Create a book note for [Book Title]"
- **MCP Integration:** "Use write_note to create [type] note about [subject]"

### Key Generation Rules
1. **Title extraction:** Use 1-6 key words from request, title-cased
2. **Domain matching:** Match request content to configured knowledge domains
3. **Tag selection:** Use domain-appropriate tags (max 3 for regular notes, 2 for MOCs)
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

### Domain Knowledge & Context

**CUSTOMIZE THIS SECTION:** Replace these example domains with your configured knowledge areas from above, or keep as-is for generic functionality.

#### Example Domain 1: Product Management
- Focus: Discovery frameworks, prioritization, user stories
- Parent MOC: `Product Management MOC`
- Tags: `#product`, `#ux`, `#strategy`
- Description pattern: "discovery frameworks and prioritization methods"

#### Example Domain 2: Leadership
- Focus: Management philosophy, decision-making, team dynamics
- Parent MOC: `Leadership MOC`
- Tags: `#leadership`, `#management`, `#strategy`
- Description pattern: "management philosophy and decision-making approaches"

#### Example Domain 3: Financial Analysis
- Focus: Investment strategies, market analysis, financial planning
- Parent MOC: `Nature of Money MOC`
- Tags: `#finance`, `#investing`, `#analysis`
- Description pattern: "investment strategies and financial analysis"

#### Example Domain 4: Personal Development
- Focus: Decision-making, habits, life optimization
- Parent MOC: `Personal Development MOC`
- Tags: `#personal`, `#habits`, `#decisions`
- Description pattern: "personal optimization and decision frameworks"

### Domain Matching Logic

**Primary Domain Recognition:**
- Scan request content for domain-specific terminology
- Match against configured knowledge areas above
- If no match found, use generic approach with `#general` tag
- Default to most relevant domain if request spans multiple areas

**Fallback Behavior:**
- If no domain match: use `#general` tag and `General MOC` parent
- If multiple domains match: choose most specific match
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

## Quality Standards

### Content Requirements
- **Related Notes:** Reference concepts that likely exist in configured domains
- **Links to Explore:** Suggest specific new note ideas for future creation
- **Descriptions:** 8-12 words explaining the concept clearly
- **Placeholders:** Use `[[]]` format, leave empty for manual completion

### Link Quality Standards

**Related Notes should:**
- Reference broad frameworks within configured knowledge domains
- Focus on foundational concepts likely already established
- Maximum 2-3 related notes to avoid overwhelm

**Links to Explore should:**
- Suggest logical extensions and deeper dives not yet created
- Include cross-domain connections when relevant to configured areas
- Feel like "next steps" in knowledge building
- Keep to 3-4 suggestions maximum

### Formatting Critical Points
1. Use **asterisks** for italic descriptions (not underscores)
2. Use `[[Double Brackets]]` for all internal links
3. Use `---` for section dividers
4. Use `•` (bullet) for list items in Related Notes sections
5. Maintain exact spacing and structure per template

## Advanced Customization

### Adding New Domains
To expand your configuration:
1. Define domain focus and scope
2. Choose 2-3 relevant tags that match your existing system
3. Create or identify the parent MOC
4. Write description pattern using your terminology
5. Add to Domain Knowledge & Context section
6. Test with sample note generation

### Modifying Templates
Template modifications should maintain:
- Consistent structure across note types
- Empty placeholders for manual completion
- Logical flow from general to specific information
- Cross-linking opportunities

### Performance Optimization
For best results:
- Keep domain descriptions focused and specific
- Use consistent tag patterns across domains
- Test domain matching with various request styles
- Refine based on actual note generation patterns

---

**Next Steps:** 
1. Choose Path 1 (Quick Start) or Path 2 (Custom Intelligence)
2. Copy Core Project Instructions (modified or vanilla) to Claude project
3. Start generating structured notes that match your knowledge domains
4. Refine domain configuration based on actual usage patterns