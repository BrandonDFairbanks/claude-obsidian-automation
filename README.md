# obisidan-mcp-server
MCP server for automating structured note creation in Obsidian via Claude Desktop

## Overview

This Model Context Protocol (MCP) server enables Claude Desktop to create structured markdown notes directly in your Obsidian vault. Instead of copying and pasting from Claude's artifacts, notes are generated automatically in your knowledge management system.

**Key Features:**
- Direct file creation in Obsidian vault
- Structured note templates (Decision logs, Book notes, MOCs, etc.)
- Eliminates copy-paste workflow
- Configurable vault paths via environment variables

## Prerequisites

Before installation, ensure you have:

1. **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
2. **Claude Desktop** - [Download here](https://claude.ai/download)
3. **Obsidian** with an existing vault - [Download here](https://obsidian.md/)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/BrandonDFairbanks/obsidian-mcp-server.git
cd obsidian-mcp-server
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
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

### 4. Configure Claude Desktop

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

### 5. Restart Claude Desktop
Quit Claude Desktop completely and reopen it for the configuration to take effect.

## Usage

### Starting the Server
```bash
node obsidian-mcp.js
```
The server will run continuously. Keep this terminal window open while using Claude.

### Creating Notes with Claude
Use explicit commands to trigger the MCP integration:

**Examples:**
- `"Use write_note to create a decision log about choosing our tech stack"`
- `"Create a book note using write_note for 'Atomic Habits'"`
- `"Build an MOC shell using write_note for Financial Planning"`

**Command Patterns:**
- `"Use write_note to create [filename]"`
- `"Create using write_note tool..."`
- `"Build me a [note type] using write_note"`

### Note Types Supported
- Decision Logs
- Book Notes  
- General Notes
- MOC (Map of Content) shells
- Any structured markdown content

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

### Permission Errors
**macOS:** You may need to grant terminal access to files
**Windows:** Run terminal as administrator if needed

## Development

### Project Structure
```
obsidian-mcp-server/
├── obsidian-mcp.js     # Main server code
├── package.json        # Dependencies and metadata  
├── .env               # Your local configuration (not tracked)
├── .env.example       # Template for environment variables
└── README.md          # This file
```

### Extending Functionality
The server can be extended to support additional tools:
- File reading capabilities
- Note searching and updating
- Custom template systems
- Integration with other tools

## Technical Details

**MCP (Model Context Protocol):** Enables Claude to interact with external tools and systems securely.

**Architecture:** Node.js server that Claude Desktop connects to via stdio transport. The server exposes a `write_note` tool that handles file operations.

**Security:** Environment variables keep personal vault paths separate from shared code. No sensitive information is stored in the repository.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Create an issue on GitHub
3. Ensure your environment matches the prerequisites

---

**Note:** This tool requires the server to run continuously while using Claude. Consider setting up as a background service for production use.
