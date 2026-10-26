#!/usr/bin/env node
/**
 * awardtape-mcp — Zero-dependency stdio-to-Streamable-HTTP MCP Bridge
 * Operated by Datil Technologies Inc., 66 West Flagler Street, Suite 900, PMB 12079, Miami, FL 33144
 * Remote endpoint: https://awardtape.com/api/mcp
 */
import readline from "node:readline";

const ENDPOINT = process.env.AWARDTAPE_MCP_URL || "https://awardtape.com/api/mcp";
const API_KEY = process.env.AWARDTAPE_API_KEY || "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", async (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;
  let req;
  try {
    req = JSON.parse(trimmed);
  } catch {
    return;
  }
  try {
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    };
    if (API_KEY) headers["X-Agent-Key"] = API_KEY;
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers,
      body: JSON.stringify(req),
    });
    const text = await res.text();
    if (text) {
      process.stdout.write(text.trim() + "\n");
    }
  } catch (err) {
    if (req && req.id !== undefined) {
      process.stdout.write(JSON.stringify({
        jsonrpc: "2.0",
        id: req.id,
        error: { code: -32603, message: String(err?.message || err) }
      }) + "\n");
    }
  }
});
