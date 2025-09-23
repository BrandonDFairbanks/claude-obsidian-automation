/* This Node.js application acts as the bridge between Claude and your file system. Think of it as a translator 
that speaks both Claude's language (MCP protocol) and your computer's language (file operations). 
The server defines a single tool called `write_note` that accepts a filename and content, then writes that content 
as a markdown file to your vault directory.

The server must run continuously because it operates on a persistent connection model. 
When Claude wants to use your custom tool, it sends a request through this connection. 
Without the server running, Claude has no way to access your `write_note` functionality and falls 
back to creating artifacts instead. */

import 'dotenv/config';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs';
import path from 'path';

const VAULT_PATH = process.env.OBSIDIAN_VAULT_PATH || '/path/to/your/obsidian/vault';

const server = new Server({
  name: 'obsidian-mcp-server',
  version: '0.1.0',
}, {
  capabilities: {
    tools: {},
  },
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [{
      name: 'write_note',
      description: 'Write a markdown note to Obsidian vault',
      inputSchema: {
        type: 'object',
        properties: {
          filename: { type: 'string', description: 'Filename ending in .md' },
          content: { type: 'string', description: 'Markdown content' },
        },
        required: ['filename', 'content'],
      },
    }],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === 'write_note') {
    const { filename, content } = request.params.arguments;
    try {
      fs.writeFileSync(path.join(VAULT_PATH, filename), content);
      return { content: [{ type: 'text', text: `Created: ${filename}` }] };
    } catch (error) {
      return { content: [{ type: 'text', text: `Error: ${error.message}` }], isError: true };
    }
  }
  throw new Error(`Unknown tool: ${request.params.name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);