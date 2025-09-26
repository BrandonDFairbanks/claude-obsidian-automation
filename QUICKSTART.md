# Quickstart Guide

**Goal:** Get your first structured note writing directly to Obsidian in under 10 minutes.

## What You'll Experience

**Before:** 
- Copy content from Claude → paste into Obsidian → format manually → add tags/links

**After:**
```
You: "Use write_note to create a decision log about choosing a laptop"
Claude: [generates structured content] → [writes directly to vault]
Result: "Created note: Laptop Decision Log.md in your Obsidian vault"
```

Your note appears instantly in Obsidian with proper structure, tags, and empty sections ready to fill - Claude automatically detected the note type and applied smart formatting.

## Prerequisites (2 minutes)

✅ **Node.js installed** (check: `node --version`)  
✅ **Claude Desktop app** (not web version)  
✅ **Obsidian with an existing vault**  

Missing any? [Full setup guide here](README.md#prerequisites)

## Installation (3 minutes)

### 1. Clone and Install
```bash
git clone https://github.com/BrandonDFairbanks/obsidian-mcp-server.git
cd obsidian-mcp-server
npm install
```

### 2. Configure Your Vault Path
```bash
cp .env.example .env
```

Edit `.env` and set your vault path:
```
OBSIDIAN_VAULT_PATH=/Users/yourname/Documents/ObsidianVault
```

**Finding your path:** Right-click any note in Obsidian → "Reveal in Finder" → copy the folder path

### 3. Configure Claude Desktop
Edit your Claude config file:

**Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Windows:** `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "obsidian": {
      "command": "node",
      "args": ["/FULL/PATH/TO/obsidian-mcp-server/obsidian-mcp.js"]
    }
  }
}
```

Replace `/FULL/PATH/TO/` with your actual folder path.

## Test It (2 minutes)

### 1. Start the Server
```bash
node obsidian-mcp.js
```
Keep this terminal open.

### 2. Set Up Claude Project
- Create new project in Claude Desktop
- Copy instructions from [`claude-project-setup.md`](claude-project-setup.md) 
- Paste into project's custom instructions

### 3. Create Your First Note
In your Claude project, try:
```
Use write_note to create a theology note about biblical interpretation methods
```

**Expected result:** A new structured note appears in your Obsidian vault with proper formatting, tags, and sections.

## What Just Happened?

You've created a **lightweight AI agent** for your knowledge system:

- **Claude** provides the intelligence (templates, domain knowledge, formatting)
- **MCP server** provides the action capability (direct file writing)
- **Together** they create structured content that appears natively in your vault

## Next Steps

**Try different note types:**
- `Use write_note to create a decision log about [any choice]`
- `Create a book note using write_note for [book title]`  
- `Build an MOC using write_note for [topic area]`

**Customize templates:** Edit the Claude project instructions to match your workflow

**Troubleshooting:** Check the [complete guide](README.md#troubleshooting) if anything isn't working

---

**Ready for the full experience?** See the [complete setup guide](README.md) for advanced configuration and troubleshooting.
