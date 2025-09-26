# obsidian-mcp-server

**Transform Claude from a chat tool into an intelligent agent for your Obsidian vault.**

Instead of copying and pasting from Claude's artifacts, get structured notes written directly to your knowledge system with smart templates, domain knowledge, and automated formatting.

## Why This Feels Agentic

On its own, Claude can only hand you artifacts you copy-paste. On its own, the MCP server can only write files you explicitly tell it to. But together, they act like a lightweight "agent" inside your Obsidian vault: Claude detects the type of note you want, applies the right template, adds tags/links, and then the MCP server writes it directly into your vault. The result: structured notes, no copy-paste, and smart suggestions that make Claude feel like a vault-native collaborator.

## Quick Start

**Want to try it in 10 minutes?** → [Quickstart Guide](QUICKSTART.md)

**Need the full setup?** → Continue reading below

---

## Overview

This Model Context Protocol (MCP) server enables Claude Desktop to create structured markdown notes directly in your Obsidian vault. The system consists of two components working together:

1. **MCP Server** (this repository) - Handles direct file writing to your Obsidian vault
2. **Claude Project** - Contains the prompt engineering and templates for structured content generation

**Key Features:**
- Direct file creation in Obsidian vault
- Structured note templates (Decision logs, Book notes, MOCs, etc.)
- Eliminates copy-paste workflow
- Configurable vault paths via environment variables
- Professional prompt engineering for consistent formatting

## Prerequisites

Before installation, ensure you have:

1. **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
2. **Claude Desktop** - [Download here](https://claude.ai/download)
3. **Obsidian** with an existing vault - [Download here](https://obsidian.md/)

## Complete Setup Guide

### Step 1: Install the MCP Server

#### Clone the Repository
```bash
git clone https://github.com/BrandonDFairbanks/obsidian-mcp-server.git
cd obsidian-mcp-server
```

#### Install Dependencies
```bash
npm install
```

#### Configure Environment Variables
Create a `.env` file in the project directory:
```bash
cp .env.example .env
```

Edit the `.env` file and update the vault path:
```
OBSIDIAN_VAULT_PATH=/path/to/your/obsidian/vault
```

**Finding your vault path:**
- Open Obsidian
- Right-click any note → "Reveal in Finder" (macOS) or "Show in folder" (Windows)
- Copy the folder path up to your vault name

#### Configure Claude Desktop

Create or edit the Claude Desktop configuration file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%/Claude/claude_desktop_config.json`

Add this configuration:
```json
{
  "mcpServers": {
    "obsidian": {
      "command": "node",
      "args": ["/full/path/to/obsidian-mcp-server/obsidian-mcp.js"]
    }
  }
}
```

Replace `/full/path/to/obsidian-mcp-server/` with the actual path to your cloned repository.

#### Restart Claude Desktop
Quit Claude Desktop completely and reopen it for the configuration to take effect.

### Step 2: Configure the Claude Project

The MCP server handles file writing, but you need a Claude project to generate the structured content.

#### Create the Claude Project
1. **Create a new Claude project** in Claude Desktop
2. **Copy the complete instructions** from [`claude-project-setup.md`](claude-project-setup.md)
3. **Paste into your project's custom instructions** field
4. **Save the project**

#### What the Claude Project Provides
- **Domain knowledge** about knowledge management workflows
- **Template logic** for different note types (Decision Logs, Book Notes, MOCs, General Notes)
- **Output detection** that switches between artifact and direct file creation
- **Quality standards** for consistent formatting and useful link suggestions

See [`claude-project-setup.md`](claude-project-setup.md) for complete templates, domain mappings, and detailed configuration.

### Step 3: Complete Workflow

#### Start the MCP Server
```bash
node obsidian-mcp.js
```
The server will run continuously. Keep this terminal window open while using Claude.

#### Use the Integration
In your configured Claude project, use explicit commands to trigger direct file creation:

**Decision Logs:**
```
Use write_note to create a decision log about choosing our tech stack
```

**Book Notes:**
```
Create a book note using write_note for 'Atomic Habits'
```

**MOCs (Maps of Content):**
```
Build an MOC using write_note for Financial Planning
```

**General Notes:**
```
Use write_note to create a product management note about user story refinement
```

#### Expected Results
- **Immediate file creation** in your Obsidian vault
- **Structured formatting** with proper tags, links, and templates
- **Confirmation message** from Claude: "Created note: [filename] in your Obsidian vault"
- **No copy-paste required** - files appear directly in your knowledge system

## Usage Examples

### Creating a Decision Log
**Command:** `"Use write_note to create a decision log about whether to buy a camping trailer"`

**Result:** Creates a structured decision log with:
- Pros/cons sections for multiple options
- Gut check and family input areas
- Follow-up tracking for 3 and 6 months later
- Relevant links to explore

### Creating a Book Note
**Command:** `"Create a book note using write_note for 'The Creature from Jekyll Island'"`

**Result:** Creates a book note with:
- Auto-filled author (G. Edward Griffin)
- Appropriate category (Monetary Theory)
- Domain-specific tags (#finance)
- Structured sections for quotes, insights, and connections

### Building an MOC
**Command:** `"Build an MOC using write_note for Decision Making"`

**Result:** Creates a Map of Content with:
- Organized sections for frameworks, methods, templates
- Empty placeholders for manual completion
- Logical structure for knowledge organization

## Troubleshooting

### Server Won't Start
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Test basic functionality
node -e "console.log('Node.js working')"
```

### Claude Can't See the Tool
1. Verify `claude_desktop_config.json` syntax is valid
2. Ensure file paths are absolute, not relative
3. Restart Claude Desktop completely (not just close window)
4. Check server is running in terminal

### Files Not Appearing in Obsidian
1. Verify vault path in `.env` is correct
2. Test by creating a file manually in that directory
3. Check Obsidian vault permissions
4. Ensure Obsidian is pointing to the same vault location

### Claude Project Not Working
1. Verify you copied the complete instructions from [`claude-project-setup.md`](claude-project-setup.md)
2. Ensure you're using the configured project (not a generic Claude chat)
3. Use explicit "write_note" commands
4. Check that both MCP server and Claude project are properly configured

### Permission Errors
**macOS:** You may need to grant terminal access to files
**Windows:** Run terminal as administrator if needed

## Advanced Configuration

### Customizing Note Templates
The Claude project templates can be modified for your specific needs:
1. Edit the templates in [`claude-project-setup.md`](claude-project-setup.md)
2. Adjust domain knowledge and tag mappings
3. Modify link suggestion patterns
4. Update the Claude project instructions

### Adding New Note Types
To add new structured note types:
1. Create templates in the Claude project setup
2. Add recognition patterns and generation logic
3. Test with the MCP integration
4. No changes needed to the MCP server code

## Technical Details

**MCP (Model Context Protocol):** Enables Claude to interact with external tools and systems securely.

**Architecture:** Node.js server that Claude Desktop connects to via stdio transport. The server exposes a `write_note` tool that handles file operations.

**Security:** Environment variables keep personal vault paths separate from shared code. No sensitive information is stored in the repository.

## Development

### Project Structure
```
obsidian-mcp-server/
├── obsidian-mcp.js          # Main server code
├── package.json             # Dependencies and metadata  
├── .env                     # Your local configuration (not tracked)
├── .env.example             # Template for environment variables
├── claude-project-setup.md  # Complete Claude project instructions
├── QUICKSTART.md            # 10-minute setup guide
└── README.md                # This file
```

### Extending Functionality
The server can be extended to support additional tools:
- File reading capabilities
- Note searching and updating
- Custom template systems
- Integration with other knowledge management tools

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly with both components
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Try the [Quickstart Guide](QUICKSTART.md) for a simplified setup
3. Verify both MCP server and Claude project are properly configured
4. Create an issue on GitHub with details about your setup
5. Ensure your environment matches the prerequisites

---

**Important:** This system requires both the MCP server (for file writing) and the Claude project (for content generation) to function properly. The server must run continuously while using Claude, and explicit "write_note" commands are required to trigger direct file creation instead of artifact generation.
